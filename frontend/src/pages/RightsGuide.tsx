import AnimatedRightsGuide from '@/components/RightsGuide/AnimatedRightsGuide'
import Quiz from '@/pages/Quiz'
import { FadeIn } from '@/components/ui/Motion'
import { PlayCircle } from 'lucide-react'

export default function RightsGuide() {
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
              Test Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-400">Knowledge</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Take interactive quizzes to test your understanding of workplace rights and labor laws
            </p>
          </div>
        </FadeIn>

        {/* Original Quiz Component */}
        <Quiz />
      </div>
    </div>
  )
}