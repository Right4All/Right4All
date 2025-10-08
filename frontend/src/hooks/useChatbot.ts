import { useState, useEffect } from 'react'
import { chatbotAPI } from '../services/chatbotAPI'

type Language = 'en' | 'ms' | 'ne' | 'hi' | 'bn'

interface ChatResponse {
  answer: string
  sourceType: 'database' | 'general' | 'off-topic'
  citations: string[]
  responseTime: number
}

export const useChatbot = () => {
  const [language, setLanguage] = useState<Language>('en')
  const [isLoading, setIsLoading] = useState(false)
  const [starterQuestions, setStarterQuestions] = useState<string[]>([])
  const [sessionId] = useState(() => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`)

  // Fetch starter questions when language changes
  useEffect(() => {
    const fetchStarterQuestions = async () => {
      try {
        const questions = await chatbotAPI.getStarterQuestions(language)
        setStarterQuestions(questions)
      } catch (error) {
        console.error('Failed to fetch starter questions:', error)
        setStarterQuestions([])
      }
    }

    fetchStarterQuestions()
  }, [language])

  const sendMessage = async (question: string, lang: Language): Promise<ChatResponse> => {
    setIsLoading(true)
    try {
      const response = await chatbotAPI.sendMessage(question, lang, sessionId)
      return response
    } finally {
      setIsLoading(false)
    }
  }

  const calculateWage = async (monthly: number, otHours: number = 0) => {
    return chatbotAPI.calculateWage(monthly, otHours)
  }

  return {
    language,
    setLanguage,
    isLoading,
    starterQuestions,
    sessionId,
    sendMessage,
    calculateWage
  }
}
