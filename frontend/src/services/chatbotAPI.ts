import { apiClient } from '../api/client'

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

class ChatbotAPI {
  private baseUrl = '/api/chatbot'

  async sendMessage(
    question: string,
    language: string,
    sessionId?: string
  ): Promise<ChatResponse> {
    const response = await apiClient.post(`${this.baseUrl}/chat`, {
      question,
      language,
      sessionId
    })
    return response.data
  }

  async calculateWage(monthly: number, otHours: number): Promise<WageCalculation> {
    const response = await apiClient.post(`${this.baseUrl}/wage/check`, {
      monthly,
      otHours
    })
    return response.data
  }

  async getStarterQuestions(language: string): Promise<string[]> {
    const response = await apiClient.get(`${this.baseUrl}/starter-questions`, {
      params: { language }
    })
    return response.data.questions
  }

  async healthCheck(): Promise<boolean> {
    try {
      const response = await apiClient.get(`${this.baseUrl}/health`)
      return response.data.ok
    } catch {
      return false
    }
  }
}

export const chatbotAPI = new ChatbotAPI()
