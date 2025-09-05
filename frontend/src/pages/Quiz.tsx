import { useState } from 'react'
import QuizCategorySelection from '@/components/Quiz/QuizCategorySelection'
import QuizInterface from '@/components/Quiz/QuizInterface'
import quizDataRaw from '@/data/quizData.json'
import { useAppStore } from '@/store/appStore'

type ViewMode = 'category' | 'quiz'

interface Language {
  code: string;
  name: string;
}

interface Topic {
  id: number;
  name: string;
  questions: any[];
}

// Type for the new multilingual quiz data format
interface QuizTopic {
  topic_name: Record<string, string>;
  questions: any[];
}

type QuizDataArray = QuizTopic[];

// Transform multilingual question to expected format
const transformQuestion = (questionData: any, index: number, languageCode: string) => {
  const options = questionData.options.map((opt: any) => ({
    letter: opt.option_order,
    text: opt.option_text[languageCode] || opt.option_text['en'],
    correct: opt.is_correct
  }));

  return {
    id: index + 1,
    legalId: null,
    type: questionData.question_type || 'multiple_choice',
    question: questionData.question_text[languageCode] || questionData.question_text['en'],
    options,
    correctAnswer: questionData.right_answer,
    explanations: questionData.options.map((opt: any) => ({
      option: opt.option_order,
      text: opt.option_explanation_text[languageCode] || opt.option_explanation_text['en']
    }))
  };
};

export default function Quiz() {
  const globalLanguage = useAppStore(state => state.language)
  const [viewMode, setViewMode] = useState<ViewMode>('category')
  const [selectedTopic, setSelectedTopic] = useState<number | null>(null)

  // Cast the imported data to the correct type
  const quizData = quizDataRaw as QuizDataArray
  
  // Get available languages from the multilingual quiz data
  const languages: Language[] = [
    { code: 'en', name: 'English' },
    { code: 'ms', name: 'Bahasa Malaysia' },
    { code: 'ne', name: 'नेपाली' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'bn', name: 'বাংলা' }
  ]

  // Use global language, defaulting to 'en' if not supported
  const selectedLanguage = languages.find(lang => lang.code === globalLanguage)?.code || 'en'

  const handleTopicSelect = (topicId: number) => {
    setSelectedTopic(topicId)
    setViewMode('quiz')
  }

  const handleBackToCategories = () => {
    setViewMode('category')
    setSelectedTopic(null)
  }

  const handleRestartQuiz = () => {
    setViewMode('category')
    setSelectedTopic(null)
  }

  // Get current language name
  const currentLanguageName = languages.find(lang => lang.code === selectedLanguage)?.name || ''

  // Transform quiz data to topics for selected language
  const topics: Topic[] = quizData.map((topicData, index) => ({
    id: index + 1,
    name: topicData.topic_name[selectedLanguage] || topicData.topic_name['en'] || 'Unknown Topic',
    questions: topicData.questions.map((q: any, qIndex: number) => 
      transformQuestion(q, qIndex, selectedLanguage)
    )
  }))
  
  const allTopics = topics
  
  // Get selected topic
  const currentTopic = topics.find(topic => topic.id === selectedTopic) || null
  const isAllTopics = false

  if (viewMode === 'category') {
    return (
      <QuizCategorySelection
        topics={topics}
        selectedLanguage={selectedLanguage}
        languageName={currentLanguageName}
        onTopicSelect={handleTopicSelect}
        onBack={undefined} // No back button needed since we start at category view
      />
    )
  }

  if (viewMode === 'quiz') {
    return (
      <QuizInterface
        topic={currentTopic}
        allTopics={topics}
        isAllTopics={isAllTopics}
        languageName={currentLanguageName}
        onBack={handleBackToCategories}
        onRestart={handleRestartQuiz}
      />
    )
  }

  return null
}
