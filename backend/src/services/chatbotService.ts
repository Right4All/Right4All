import axios from 'axios'
import { db } from './databaseService'

interface ChatMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
}

interface ChatResponse {
  answer: string
  sourceType: 'database' | 'general' | 'off-topic'
  citations: string[]
  responseTime: number
}

interface WageCalculation {
  steps: string[]
  citation: string
  totalOvertimePay?: number
}

interface DatabaseContext {
  id: number
  content: string
  reference: string
  source: string
}

class ChatbotService {
  private apiKey: string
  private apiUrl = 'https://api.deepseek.com/v1/chat/completions'
  private timeoutMs = 3000

  constructor() {
    this.apiKey = process.env.DEEPSEEK_API_KEY || ''
    if (!this.apiKey) {
      console.warn('⚠️  DEEPSEEK_API_KEY not configured')
    }
  }

  // Check if question is related to migrant workers/labour rights
  private isRelevantQuestion(question: string): boolean {
    const keywords = [
      'work', 'job', 'employer', 'employee', 'salary', 'wage', 'pay', 'overtime',
      'leave', 'contract', 'passport', 'visa', 'permit', 'migrant', 'foreign worker',
      'rights', 'law', 'legal', 'labour', 'labor', 'safety', 'hours', 'accommodation',
      'complaint', 'dispute', 'termination', 'resign', 'annual leave', 'sick leave',
      'malaysia', 'employment act', 'minimum wage', 'working hours', 'rest day'
    ]

    const lowerQuestion = question.toLowerCase()
    return keywords.some(keyword => lowerQuestion.includes(keyword))
  }

  // Search database with timeout
  private async searchDatabaseWithTimeout(question: string): Promise<DatabaseContext[]> {
    return Promise.race([
      this.searchDatabase(question),
      new Promise<DatabaseContext[]>((resolve) =>
        setTimeout(() => resolve([]), this.timeoutMs)
      )
    ])
  }

  // Search all relevant tables for context
  private async searchDatabase(question: string): Promise<DatabaseContext[]> {
    const searchTerm = `%${question}%`
    const contexts: DatabaseContext[] = []

    try {
      // Search rights_guide
      const rightsResults = await db.query(
        `SELECT id, question, answer, law_ref
         FROM rights_guide
         WHERE question ILIKE $1 OR answer ILIKE $1
         LIMIT 3`,
        [searchTerm]
      )

      rightsResults.rows.forEach(row => {
        contexts.push({
          id: row.id,
          content: `Q: ${row.question}\nA: ${row.answer}`,
          reference: row.law_ref || '',
          source: 'rights_guide'
        })
      })

      // Search FAQ
      const faqResults = await db.query(
        `SELECT id, question, answer
         FROM faq
         WHERE question ILIKE $1 OR answer ILIKE $1
         LIMIT 3`,
        [searchTerm]
      )

      faqResults.rows.forEach(row => {
        contexts.push({
          id: row.id,
          content: `Q: ${row.question}\nA: ${row.answer}`,
          reference: '',
          source: 'faq'
        })
      })

      // Search employment_laws
      const lawResults = await db.query(
        `SELECT id, title, section, content, law_type
         FROM employment_laws
         WHERE content ILIKE $1 OR title ILIKE $1
         LIMIT 2`,
        [searchTerm]
      )

      lawResults.rows.forEach(row => {
        contexts.push({
          id: row.id,
          content: `${row.title} - ${row.section}: ${row.content}`,
          reference: `${row.title}-${row.section}`,
          source: 'employment_laws'
        })
      })

      return contexts
    } catch (error) {
      console.error('Database search error:', error)
      return []
    }
  }

  // Build system prompt with hybrid mode instructions
  private buildSystemPrompt(language: string): string {
    const langMap: Record<string, string> = {
      'en': 'English',
      'ms': 'Bahasa Malaysia',
      'ne': 'Nepali',
      'hi': 'Hindi',
      'bn': 'Bengali'
    }

    const lang = langMap[language] || 'English'

    return `You are Right4All's assistant, helping migrant workers in Malaysia.

Your purpose is to provide accurate and trustworthy information about:
- migrant workers' rights
- wages, overtime, and working hours
- employment contracts, documents, and leave
- workplace conditions, safety, and accommodation
- support organizations, NGOs, and complaint mechanisms
- migration statistics in Malaysia

IMPORTANT RULES:

1. If database context is provided below, use it as the primary source and include [ref:id] citations.

2. If the context is missing, delayed, or incomplete, you may use your own knowledge
   ONLY for topics related to migrant workers and Malaysian labour rights.
   - Do not reference foreign laws.
   - If you are unsure, give a brief general explanation labeled "(General Information)".

3. If the question is unrelated to migrant workers, labour rights, or Malaysia,
   reply: "I'm sorry, I can only answer questions about migrant workers, labour rights, wages, and working conditions in Malaysia. Please visit the Support page for other inquiries."

Always answer in ${lang}.
Keep answers short, factual, and friendly.
Use simple language that is easy to understand.`
  }

  // Call DeepSeek API
  private async callDeepSeek(messages: ChatMessage[]): Promise<string> {
    if (!this.apiKey) {
      throw new Error('DeepSeek API key not configured')
    }

    try {
      const response = await axios.post(
        this.apiUrl,
        {
          model: 'deepseek-chat',
          messages: messages,
          temperature: 0.7,
          max_tokens: 500
        },
        {
          headers: {
            'Authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json'
          },
          timeout: 10000
        }
      )

      return response.data.choices[0].message.content
    } catch (error) {
      console.error('DeepSeek API error:', error)
      throw new Error('Failed to get response from AI')
    }
  }

  // Main chat function with hybrid RAG approach
  async chat(question: string, language: string = 'en'): Promise<ChatResponse> {
    const startTime = Date.now()

    // Check if question is relevant
    if (!this.isRelevantQuestion(question)) {
      return {
        answer: "I'm sorry, I can only answer questions about migrant workers, labour rights, wages, and working conditions in Malaysia. Please visit the Support page for other inquiries.",
        sourceType: 'off-topic',
        citations: [],
        responseTime: Date.now() - startTime
      }
    }

    // Search database with timeout
    const contexts = await this.searchDatabaseWithTimeout(question)

    // Build messages
    const messages: ChatMessage[] = [
      {
        role: 'system',
        content: this.buildSystemPrompt(language)
      }
    ]

    // Add context if found
    if (contexts.length > 0) {
      const contextText = contexts.map((ctx, idx) =>
        `[${idx + 1}] ${ctx.content}${ctx.reference ? ` [ref:${ctx.reference}]` : ''}`
      ).join('\n\n')

      messages.push({
        role: 'system',
        content: `CONTEXT FROM DATABASE:\n${contextText}`
      })
    }

    // Add user question
    messages.push({
      role: 'user',
      content: question
    })

    // Call DeepSeek
    const answer = await this.callDeepSeek(messages)

    // Extract citations from answer
    const citationRegex = /\[ref:([^\]]+)\]/g
    const citations: string[] = []
    let match
    while ((match = citationRegex.exec(answer)) !== null) {
      citations.push(match[1])
    }

    // Determine source type
    const sourceType = contexts.length > 0 ? 'database' : 'general'

    return {
      answer,
      sourceType,
      citations,
      responseTime: Date.now() - startTime
    }
  }

  // Calculate wages with step-by-step breakdown
  async calculateWage(monthlySalary: number, overtimeHours: number = 0): Promise<WageCalculation> {
    const steps: string[] = []

    // Daily wage
    const dailyWage = monthlySalary / 26
    steps.push(`Daily wage = RM ${monthlySalary.toFixed(2)} ÷ 26 = RM ${dailyWage.toFixed(2)}`)

    // Hourly wage
    const hourlyWage = dailyWage / 8
    steps.push(`Hourly wage = RM ${dailyWage.toFixed(2)} ÷ 8 = RM ${hourlyWage.toFixed(2)}`)

    // Overtime pay
    let totalOvertimePay = 0
    if (overtimeHours > 0) {
      const overtimeRate = hourlyWage * 1.5
      totalOvertimePay = overtimeRate * overtimeHours
      steps.push(`Overtime rate = RM ${hourlyWage.toFixed(2)} × 1.5 = RM ${overtimeRate.toFixed(2)}`)
      steps.push(`Total overtime pay = RM ${overtimeRate.toFixed(2)} × ${overtimeHours} hours = RM ${totalOvertimePay.toFixed(2)}`)
    }

    return {
      steps,
      citation: '[ref:EA-Section-60I]',
      totalOvertimePay: totalOvertimePay > 0 ? totalOvertimePay : undefined
    }
  }

  // Save conversation for analytics
  async saveConversation(
    sessionId: string,
    question: string,
    response: ChatResponse,
    language: string
  ): Promise<void> {
    try {
      await db.query(
        `INSERT INTO chatbot_conversations
         (session_id, user_question, bot_response, source_type, language, response_time_ms, citations)
         VALUES ($1, $2, $3, $4, $5, $6, $7)`,
        [
          sessionId,
          question,
          response.answer,
          response.sourceType,
          language,
          response.responseTime,
          response.citations
        ]
      )
    } catch (error) {
      console.error('Error saving conversation:', error)
    }
  }
}

export const chatbotService = new ChatbotService()
