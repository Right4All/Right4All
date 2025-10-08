import { Router, Request, Response } from 'express'
import { chatbotService } from '../services/chatbotService'
import { z } from 'zod'

const router = Router()

// Request validation schemas
const chatRequestSchema = z.object({
  question: z.string().min(1).max(1000),
  language: z.enum(['en', 'ms', 'ne', 'hi', 'bn']).default('en'),
  sessionId: z.string().optional()
})

const wageRequestSchema = z.object({
  monthly: z.number().positive(),
  otHours: z.number().min(0).default(0)
})

// POST /api/chatbot/chat
// Main chatbot endpoint
router.post('/chat', async (req: Request, res: Response) => {
  try {
    // Validate request
    const validation = chatRequestSchema.safeParse(req.body)
    if (!validation.success) {
      return res.status(400).json({
        error: 'Invalid request',
        details: validation.error.errors
      })
    }

    const { question, language, sessionId } = validation.data

    // Get response from chatbot
    const response = await chatbotService.chat(question, language)

    // Save conversation (async, don't wait)
    if (sessionId) {
      chatbotService.saveConversation(sessionId, question, response, language)
        .catch(err => console.error('Failed to save conversation:', err))
    }

    // Return response
    res.json({
      answer: response.answer,
      sourceType: response.sourceType,
      citations: response.citations,
      responseTime: response.responseTime
    })

  } catch (error) {
    console.error('Chatbot error:', error)
    res.status(500).json({
      error: 'Failed to process your question',
      message: error instanceof Error ? error.message : 'Unknown error'
    })
  }
})

// POST /api/chatbot/wage/check
// Wage calculator endpoint
router.post('/wage/check', async (req: Request, res: Response) => {
  try {
    // Validate request
    const validation = wageRequestSchema.safeParse(req.body)
    if (!validation.success) {
      return res.status(400).json({
        error: 'Invalid request',
        details: validation.error.errors
      })
    }

    const { monthly, otHours } = validation.data

    // Calculate wage
    const calculation = await chatbotService.calculateWage(monthly, otHours)

    // Return calculation
    res.json({
      steps: calculation.steps,
      citation: calculation.citation,
      totalOvertimePay: calculation.totalOvertimePay
    })

  } catch (error) {
    console.error('Wage calculation error:', error)
    res.status(500).json({
      error: 'Failed to calculate wage',
      message: error instanceof Error ? error.message : 'Unknown error'
    })
  }
})

// GET /api/chatbot/starter-questions
// Get starter questions for different languages
router.get('/starter-questions', (req: Request, res: Response) => {
  const language = req.query.language as string || 'en'

  const starterQuestions: Record<string, string[]> = {
    en: [
      'How is overtime calculated?',
      'What are legal working hours?',
      'How much leave do I get?',
      'What is the minimum wage in Malaysia?',
      'Can my employer hold my passport?'
    ],
    ms: [
      'Bagaimana pengiraan lebih masa?',
      'Apakah waktu kerja yang sah?',
      'Berapa hari cuti yang saya dapat?',
      'Berapakah gaji minimum di Malaysia?',
      'Bolehkah majikan saya memegang pasport saya?'
    ],
    ne: [
      'ओभरटाइम कसरी गणना गरिन्छ?',
      'कानुनी काम गर्ने घण्टा के हुन्?',
      'मलाई कति बिदा मिल्छ?',
      'मलेसियामा न्यूनतम पारिश्रमिक कति हो?',
      'के मेरो नियोक्ताले मेरो राहदानी राख्न सक्छ?'
    ],
    hi: [
      'ओवरटाइम की गणना कैसे की जाती है?',
      'कानूनी कार्य घंटे क्या हैं?',
      'मुझे कितनी छुट्टी मिलती है?',
      'मलेशिया में न्यूनतम वेतन कितना है?',
      'क्या मेरा नियोक्ता मेरा पासपोर्ट रख सकता है?'
    ],
    bn: [
      'ওভারটাইম কিভাবে গণনা করা হয়?',
      'আইনি কাজের সময় কি?',
      'আমি কত ছুটি পাব?',
      'মালেশিয়ায় ন্যূনতম মজুরি কত?',
      'আমার নিয়োগকর্তা কি আমার পাসপোর্ট রাখতে পারে?'
    ]
  }

  res.json({
    questions: starterQuestions[language] || starterQuestions.en
  })
})

// GET /api/chatbot/health
// Health check endpoint
router.get('/health', (req: Request, res: Response) => {
  res.json({
    ok: true,
    service: 'chatbot',
    timestamp: new Date().toISOString()
  })
})

export default router
