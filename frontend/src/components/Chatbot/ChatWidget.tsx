import React, { useState, useEffect, useRef } from 'react'
import { MessageCircle, X, Send, Mic, MicOff, Loader2 } from 'lucide-react'
import { useChatbot } from '../../hooks/useChatbot'

interface Message {
  id: string
  type: 'user' | 'bot'
  content: string
  citations?: string[]
  sourceType?: 'database' | 'general' | 'off-topic'
  timestamp: Date
}

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isListening, setIsListening] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const recognitionRef = useRef<any>(null)

  const {
    sendMessage,
    isLoading,
    language,
    setLanguage,
    starterQuestions,
    sessionId
  } = useChatbot()

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Initialize speech recognition
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition
      recognitionRef.current = new SpeechRecognition()
      recognitionRef.current.continuous = false
      recognitionRef.current.interimResults = false
      recognitionRef.current.lang = 'en-US'

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript
        setInput(transcript)
        setIsListening(false)
      }

      recognitionRef.current.onerror = () => {
        setIsListening(false)
      }

      recognitionRef.current.onend = () => {
        setIsListening(false)
      }
    }
  }, [])

  // Show welcome message on first open
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        id: '1',
        type: 'bot',
        content: getWelcomeMessage(),
        timestamp: new Date()
      }])
    }
  }, [isOpen])

  const getWelcomeMessage = () => {
    const welcomeMessages: Record<string, string> = {
      en: 'Hello! I\'m your Right4All assistant. I can help you with questions about migrant workers\' rights, wages, working hours, and employment laws in Malaysia. How can I help you today?',
      ms: 'Halo! Saya pembantu Right4All anda. Saya boleh membantu anda dengan soalan tentang hak pekerja migran, gaji, waktu kerja, dan undang-undang pekerjaan di Malaysia. Bagaimana saya boleh membantu anda hari ini?',
      ne: 'नमस्ते! म तपाईंको Right4All सहायक हुँ। म तपाईंलाई मलेसियामा प्रवासी कामदारहरूको अधिकार, तलब, काम गर्ने समय, र रोजगार कानून बारे प्रश्नहरूमा मद्दत गर्न सक्छु। आज म तपाईंलाई कसरी मद्दत गर्न सक्छु?',
      hi: 'नमस्ते! मैं आपका Right4All सहायक हूं। मैं मलेशिया में प्रवासी श्रमिकों के अधिकार, वेतन, काम के घंटे और रोजगार कानूनों के बारे में आपके सवालों में मदद कर सकता हूं। आज मैं आपकी कैसे मदद कर सकता हूं?',
      bn: 'হ্যালো! আমি আপনার Right4All সহায়ক। আমি মালেশিয়ায় প্রবাসী শ্রমিকদের অধিকার, মজুরি, কাজের সময় এবং কর্মসংস্থান আইন সম্পর্কে আপনার প্রশ্নগুলিতে সাহায্য করতে পারি। আজ আমি আপনাকে কীভাবে সাহায্য করতে পারি?'
    }
    return welcomeMessages[language] || welcomeMessages.en
  }

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')

    try {
      const response = await sendMessage(input, language)

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: response.answer,
        citations: response.citations,
        sourceType: response.sourceType,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, botMessage])
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    }
  }

  const handleStarterQuestion = async (question: string) => {
    setInput(question)
    setTimeout(() => handleSend(), 100)
  }

  const toggleListening = () => {
    if (language !== 'en') {
      alert('Voice input is only supported in English.')
      return
    }

    if (!recognitionRef.current) {
      alert('Speech recognition is not supported in your browser.')
      return
    }

    if (isListening) {
      recognitionRef.current.stop()
      setIsListening(false)
    } else {
      recognitionRef.current.start()
      setIsListening(true)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 z-50"
          aria-label="Open chat"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-lg shadow-2xl flex flex-col z-50 border border-gray-200">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg">Right4All Assistant</h3>
              <p className="text-xs text-blue-100">Powered by AI</p>
            </div>
            <div className="flex items-center gap-2">
              {/* Language Selector */}
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as any)}
                className="text-sm bg-blue-700 text-white border-none rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <option value="en">EN</option>
                <option value="ms">BM</option>
                <option value="ne">NE</option>
                <option value="hi">HI</option>
                <option value="bn">BN</option>
              </select>

              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-800 shadow-sm border border-gray-200'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>

                  {/* Citations */}
                  {message.citations && message.citations.length > 0 && (
                    <div className="mt-2 pt-2 border-t border-gray-200 text-xs text-gray-600">
                      <span className="font-semibold">Sources: </span>
                      {message.citations.join(', ')}
                    </div>
                  )}

                  {/* Source Type Indicator */}
                  {message.sourceType === 'general' && (
                    <div className="mt-1 text-xs text-gray-500 italic">
                      (General Information)
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Loading indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200">
                  <Loader2 className="animate-spin text-blue-600" size={20} />
                </div>
              </div>
            )}

            {/* Starter Questions */}
            {messages.length === 1 && starterQuestions.length > 0 && (
              <div className="space-y-2">
                <p className="text-xs text-gray-500 text-center">Quick questions:</p>
                {starterQuestions.map((question, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleStarterQuestion(question)}
                    className="w-full text-left text-sm bg-white hover:bg-blue-50 text-gray-700 rounded-lg p-2 border border-gray-200 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-200 bg-white rounded-b-lg">
            <div className="flex items-end gap-2">
              <div className="flex-1 relative">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="w-full resize-none border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={2}
                  disabled={isLoading}
                />
              </div>

              {/* Voice Input Button */}
              <button
                onClick={toggleListening}
                disabled={isLoading}
                className={`p-2 rounded-lg transition-colors ${
                  isListening
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
                aria-label="Voice input"
              >
                {isListening ? <MicOff size={20} /> : <Mic size={20} />}
              </button>

              {/* Send Button */}
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <Send size={20} />
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-2 text-center">
              Press Enter to send • Shift+Enter for new line
            </p>
          </div>
        </div>
      )}
    </>
  )
}
