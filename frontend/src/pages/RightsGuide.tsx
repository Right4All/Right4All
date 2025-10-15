import AnimatedRightsGuide from '@/components/RightsGuide/AnimatedRightsGuide'
import Quiz from '@/pages/Quiz'
import { FadeIn } from '@/components/ui/Motion'
import { PlayCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function RightsGuide() {
  const { t } = useTranslation()
  return (
    <div>
      {/* Rights Guide Section */}
      <AnimatedRightsGuide />

      {/* Quiz Section */}
      <div className="container-max px-4 py-16">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6 shadow-2xl">
              <PlayCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              {t('quiz.testYourKnowledge')}
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              {t('quiz.testYourKnowledgeSubtitle')}
            </p>
          </div>
        </FadeIn>

        {/* Original Quiz Component */}
        <Quiz />
      </div>
    </div>
  )
}
