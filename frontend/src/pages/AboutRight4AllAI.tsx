import { FadeIn } from '@/components/ui/Motion'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

export default function AboutRight4AllAI() {
  const { t } = useTranslation()
  const [showChatbot, setShowChatbot] = useState(false)

  const openChatbot = () => {
    // Find the floating chat button and click it
    const chatButton = document.querySelector('button[aria-label="Open chat"]') as HTMLElement
    if (chatButton) {
      chatButton.click()
    } else {
      // Fallback: try to find any button that might open the chat
      const buttons = document.querySelectorAll('button')
      const chatButtons = Array.from(buttons).filter(btn => 
        btn.textContent?.includes('chat') || 
        btn.textContent?.includes('Chat') ||
        btn.getAttribute('aria-label')?.includes('chat') ||
        btn.getAttribute('aria-label')?.includes('Chat')
      )
      if (chatButtons.length > 0) {
        chatButtons[0].click()
      } else {
        // Last resort: show a message
        alert('Please click the chat button in the bottom right corner to start chatting.')
      }
    }
  }

  return (
    <div className="container-max px-4">
      {/* Hero Section */}
      <section className="hero py-16 lg:py-24 text-center">
        <FadeIn>
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-5xl mb-6"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              🤖
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              Right4All <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Assistant</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
              Empowering migrant workers through multilingual AI, verified legal data, and safe, empathetic guidance.
            </p>
            <div className="flex justify-center">
              <button 
                onClick={openChatbot}
                className="relative btn-primary text-center"
              >
                Start Chatting
              </button>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* System Architecture Section */}
      <section className="py-16">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">System Architecture</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Built with cutting-edge AI technology to deliver accurate, safe, and multilingual support
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1: Hybrid RAG System */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-white mb-4">Hybrid RAG System</h3>
              <p className="text-white/70 mb-6">
                Combines vector similarity search with keyword fallback, using DeepSeek API with PostgreSQL vector embeddings and comprehensive keyword matching for reliable responses.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">DeepSeek API</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Vector Search</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Keyword Fallback</span>
              </div>
            </div>

            {/* Card 2: Database Integration */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
              <div className="text-3xl mb-4">🗄️</div>
              <h3 className="text-xl font-bold text-white mb-4">Database Integration</h3>
              <p className="text-white/70 mb-6">
                Connected to PostgreSQL with tables for rights guides, employment laws, FAQs, migration statistics, and conversation analytics. Uses stored procedures for vector similarity search.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">PostgreSQL</span>
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">Vector DB</span>
                <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">Stored Procedures</span>
              </div>
            </div>

            {/* Card 3: Language & Safety */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="text-xl font-bold text-white mb-4">Language & Safety</h3>
              <p className="text-white/70 mb-6">
                Supports 5 languages with strict language enforcement and comprehensive keyword filtering. Rejects off-topic questions and maintains safety boundaries for migrant worker topics only.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">5 Languages</span>
                <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">Safety Filter</span>
                <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm">Topic Guard</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Performance Benchmark Section */}
      <section className="py-16">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Performance Benchmark</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Independent testing validates the Right4All Assistant's accuracy, safety, and empathy
            </p>
          </div>

          {/* Highlight Box */}
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-3xl p-8 border border-green-500/30 max-w-4xl mx-auto mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-3xl">✅</div>
              <h3 className="text-2xl font-bold text-white">Perfect Performance</h3>
            </div>
            <p className="text-white/80 text-lg">
              Tested across 35 labour rights questions — evaluated for factual correctness, tone, safety, and cultural sensitivity.
              Results confirm 100% accuracy in verified data delivery and flawless multilingual communication.
            </p>
          </div>

          {/* Benchmark Table */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/10 max-w-4xl mx-auto">
            <h4 className="text-xl font-bold text-white mb-6 text-center">Test Results Summary</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl text-green-400 mb-2">35/35</div>
                <div className="text-white font-semibold">Factual Accuracy</div>
                <div className="text-white/60 text-sm">100% Correct</div>
              </div>
              <div className="text-center">
                <div className="text-3xl text-green-400 mb-2">10/10</div>
                <div className="text-white font-semibold">Safety Tests</div>
                <div className="text-white/60 text-sm">100% Pass Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl text-green-400 mb-2">5/5</div>
                <div className="text-white font-semibold">Languages</div>
                <div className="text-white/60 text-sm">Full Support</div>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl">
                <span className="text-white">Minimum wage calculation</span>
                <span className="text-green-400">✅ Wage Rights</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl">
                <span className="text-white">Overtime payment rules</span>
                <span className="text-green-400">✅ Legal Compliance</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl">
                <span className="text-white">Passport confiscation</span>
                <span className="text-green-400">✅ Safety Boundary</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl">
                <span className="text-white">Sick leave entitlement</span>
                <span className="text-green-400">✅ Employment Rights</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl">
                <span className="text-white">Accommodation standards</span>
                <span className="text-green-400">✅ Living Conditions</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl">
                <span className="text-white">Working hours limits</span>
                <span className="text-green-400">✅ Working Conditions</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl">
                <span className="text-white">NGO support access</span>
                <span className="text-green-400">✅ Support Organizations</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Key Strengths & Safety Features Section */}
      <section className="py-16">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Key Strengths */}
            <div>
              <h3 className="text-2xl font-black text-white mb-6">Key Strengths</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="text-green-400 text-xl mt-1">✅</div>
                  <div>
                    <div className="text-white font-semibold">Hybrid RAG system with vector search</div>
                    <div className="text-white/70 text-sm">Combines vector similarity search with keyword fallback for reliable responses</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-green-400 text-xl mt-1">✅</div>
                  <div>
                    <div className="text-white font-semibold">Verified database integration</div>
                    <div className="text-white/70 text-sm">Connected to PostgreSQL with rights guides, employment laws, and migration statistics</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-green-400 text-xl mt-1">✅</div>
                  <div>
                    <div className="text-white font-semibold">Strict language enforcement</div>
                    <div className="text-white/70 text-sm">Maintains language consistency across all 5 supported languages</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-green-400 text-xl mt-1">✅</div>
                  <div>
                    <div className="text-white font-semibold">Comprehensive keyword filtering</div>
                    <div className="text-white/70 text-sm">1000+ keywords across 5 languages ensure topic relevance</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-green-400 text-xl mt-1">✅</div>
                  <div>
                    <div className="text-white font-semibold">Wage calculation capabilities</div>
                    <div className="text-white/70 text-sm">Built-in wage and overtime calculation with step-by-step breakdown</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Safety Features */}
            <div>
              <h3 className="text-2xl font-black text-white mb-6">Safety Features</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="text-blue-400 text-xl mt-1">🛡️</div>
                  <div>
                    <div className="text-white font-semibold">Topic boundary enforcement</div>
                    <div className="text-white/70 text-sm">Rejects questions outside migrant worker rights and labour issues</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-blue-400 text-xl mt-1">🛡️</div>
                  <div>
                    <div className="text-white font-semibold">Database-backed responses</div>
                    <div className="text-white/70 text-sm">Uses verified data from rights guides, laws, and migration statistics</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-blue-400 text-xl mt-1">🛡️</div>
                  <div>
                    <div className="text-white font-semibold">Fallback protection</div>
                    <div className="text-white/70 text-sm">Graceful fallback to keyword search when vector search fails</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-blue-400 text-xl mt-1">🛡️</div>
                  <div>
                    <div className="text-white font-semibold">Conversation analytics</div>
                    <div className="text-white/70 text-sm">Anonymous conversation logging for performance monitoring</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-blue-400 text-xl mt-1">🛡️</div>
                  <div>
                    <div className="text-white font-semibold">Source transparency</div>
                    <div className="text-white/70 text-sm">Provides citations and source types for all responses</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* What the Assistant Can Help With */}
      <section className="py-16">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">What the Assistant Can Help With</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Comprehensive support for migrant workers across all essential areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
              <div className="text-2xl mb-4">💰</div>
              <h3 className="text-lg font-bold text-white mb-3">Wage & Salary Questions</h3>
              <p className="text-white/70 text-sm">
                Minimum wage calculations, overtime pay rules, salary deductions, and wage slip verification.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
              <div className="text-2xl mb-4">⏰</div>
              <h3 className="text-lg font-bold text-white mb-3">Working Hours & Leave</h3>
              <p className="text-white/70 text-sm">
                Daily working hours, annual leave entitlement, sick leave rights, and public holiday rules.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
              <div className="text-2xl mb-4">📄</div>
              <h3 className="text-lg font-bold text-white mb-3">Documents & Legal Rights</h3>
              <p className="text-white/70 text-sm">
                Passport issues, work permits, employment contracts, and legal rights protection.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
              <div className="text-2xl mb-4">🏠</div>
              <h3 className="text-lg font-bold text-white mb-3">Accommodation & Living</h3>
              <p className="text-white/70 text-sm">
                Housing standards, accommodation charges, living conditions, and basic amenities.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
              <div className="text-2xl mb-4">🤝</div>
              <h3 className="text-lg font-bold text-white mb-3">Support & NGOs</h3>
              <p className="text-white/70 text-sm">
                Finding NGOs, filing complaints, Labour Department contacts, and support organizations.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
              <div className="text-2xl mb-4">🌐</div>
              <h3 className="text-lg font-bold text-white mb-3">Multilingual Support</h3>
              <p className="text-white/70 text-sm">
                Full support in English, Bahasa Malaysia, Hindi, Nepali, and Bengali with cultural context.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Footer with SDG */}
      <footer className="py-12 mt-16 border-t border-white/10">
        <FadeIn>
          <div className="max-w-6xl mx-auto text-center">
            {/* SDG Section */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-2xl border border-white/20">
                <motion.span
                  className="text-3xl"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  🌍
                </motion.span>
                <div className="text-left">
                  <h3 className="text-lg font-bold text-white">Supporting Sustainable Development Goals</h3>
                  <p className="text-white/70 text-sm max-w-md">
                    Right4All Assistant contributes to SDG 10: Reduced Inequalities by providing equal access to legal information for all migrant workers.
                  </p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full">
                  <span className="text-lg">🎯</span>
                  <span className="text-white text-sm font-medium">SDG 10</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </footer>
    </div>
  )
}
