import { FadeIn } from '@/components/ui/Motion'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import HeroScene from '@/components/Three/HeroScene'

export default function Home() {
  const { t } = useTranslation()

  return (
    <div className="container-max px-4">
      {/* Hero Section */}
      <section className="hero grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center min-h-[calc(100vh-140px)] py-4 lg:py-8">
        <div className="space-y-6">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              {t('home.empowering')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-400">{t('home.migrantWorkers')}</span>
            </h1>
          </FadeIn>
          <FadeIn>
            <p className="text-lg md:text-xl text-white/80">
              {t('home.withDataTools')}. {t('home.description')}
            </p>
          </FadeIn>
          <FadeIn>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link className="relative btn-primary text-center" to="/support">Get Support</Link>
              <Link className="btn-outline text-center" to="/chatbot">AI Chatbot</Link>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="text-center lg:text-left">
              <p className="text-sm text-white/60 italic">
                Know your rights, stay protected
              </p>
            </div>
          </FadeIn>
        </div>
        <FadeIn>
          <HeroScene />
        </FadeIn>
      </section>




      {/* FAQ Section */}
      <section className="faq-section py-16">
        <FadeIn>
          <div className="faq-header text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4"> Stay Safe, Stay Informed</h2>
            <h3 className="text-xl md:text-2xl font-bold text-rose-400 mb-6">✨ <em>Know your rights, Stay protected</em> ✨</h3>
            <p className="text-white/80 max-w-2xl mx-auto">This FAQ gives simple answers to common worker concerns and explains how to use our website.</p>
          </div>

          <div className="faq-content grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="faq-category bg-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">😟 Migrant Workers' Concerns</h3>

              <div className="space-y-4">
                <Link to="/rights-guide" className="block group">
                  <div className="faq-item bg-white/5 rounded-2xl p-4 border border-transparent hover:border-cyan-400/30 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                    <div className="faq-question font-semibold text-white mb-2">🧠 Want to test your knowledge?</div>
                    <div className="text-sm text-cyan-300 group-hover:text-cyan-200 flex items-center gap-2">
                      <span>Go to Rights Education</span>
                      <span className="text-xs opacity-60">→</span>
                    </div>
                  </div>
                </Link>

                <Link to="/rights-guide" className="block group">
                  <div className="faq-item bg-white/5 rounded-2xl p-4 border border-transparent hover:border-cyan-400/30 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                    <div className="faq-question font-semibold text-white mb-2">📚 Want to learn your rights?</div>
                    <div className="text-sm text-cyan-300 group-hover:text-cyan-200 flex items-center gap-2">
                      <span>Go to Rights Education</span>
                      <span className="text-xs opacity-60">→</span>
                    </div>
                  </div>
                </Link>

                <Link to="/support" className="block group">
                  <div className="faq-item bg-white/5 rounded-2xl p-4 border border-transparent hover:border-cyan-400/30 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                    <div className="faq-question font-semibold text-white mb-2">🆘 Need help or support?</div>
                    <div className="text-sm text-cyan-300 group-hover:text-cyan-200 flex items-center gap-2">
                      <span>Go to Get Support</span>
                      <span className="text-xs opacity-60">→</span>
                    </div>
                  </div>
                </Link>

                <Link to="/insights-stories" className="block group">
                  <div className="faq-item bg-white/5 rounded-2xl p-4 border border-transparent hover:border-cyan-400/30 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                    <div className="faq-question font-semibold text-white mb-2">✨ Want to know survivor stories?</div>
                    <div className="text-sm text-cyan-300 group-hover:text-cyan-200 flex items-center gap-2">
                      <span>Go to Insights & Stories</span>
                      <span className="text-xs opacity-60">→</span>
                    </div>
                  </div>
                </Link>

                <Link to="/insights-stories" className="block group">
                  <div className="faq-item bg-white/5 rounded-2xl p-4 border border-transparent hover:border-cyan-400/30 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                    <div className="faq-question font-semibold text-white mb-2">📊 Want to understand the labor market?</div>
                    <div className="text-sm text-cyan-300 group-hover:text-cyan-200 flex items-center gap-2">
                      <span>Go to Insights & Stories</span>
                      <span className="text-xs opacity-60">→</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="faq-category bg-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">🌐 About This Website</h3>

              <div className="space-y-4">
                <div className="faq-item bg-white/5 rounded-2xl p-4">
                  <div className="faq-question font-semibold text-white mb-2">🧑‍🤝‍🧑 Who is this website for?</div>
                  <div className="faq-answer text-sm text-white/70">
                    Mainly for migrant workers in Malaysia.
                  </div>
                </div>

                <div className="faq-item bg-white/5 rounded-2xl p-4">
                  <div className="faq-question font-semibold text-white mb-2">🆓 Do I need to register or pay?</div>
                  <div className="faq-answer text-sm text-white/70">
                    No. It is free and no login is needed.
                  </div>
                </div>

                <div className="faq-item bg-white/5 rounded-2xl p-4">
                  <div className="faq-question font-semibold text-white mb-2">🔒 Is my information safe?</div>
                  <div className="faq-answer text-sm text-white/70">
                    Yes. We do not collect personal data.
                  </div>
                </div>

                <div className="faq-item bg-white/5 rounded-2xl p-4">
                  <div className="faq-question font-semibold text-white mb-2">🌍 Why only 5 languages?</div>
                  <div className="faq-answer text-sm text-white/70">
                    Because most workers are from Indonesia, Nepal, Bangladesh, and India. More will be added later.
                  </div>
                </div>

                <div className="faq-item disclaimer bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-2xl p-4">
                  <div className="faq-question font-semibold text-white mb-2">⚠️ Does this website give legal advice?</div>
                  <div className="faq-answer text-sm text-white/70">
                    No. This site only gives <strong>general information</strong>. It does not replace government advice or professional legal support. For serious problems, please contact <strong>JTKSM, your embassy, or NGOs in our Support Hub</strong>.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Footer with SDG and Copyright */}
      <footer className="py-12 mt-16 border-t border-white/10">
        <FadeIn>
          <div className="max-w-6xl mx-auto text-center">
            {/* SDG Section - Compact */}
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
                  <h3 className="text-lg font-bold text-white">{t('home.sdg.title')}</h3>
                  <p className="text-white/70 text-sm max-w-md">
                    {t('home.sdg.description')}
                  </p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full">
                  <span className="text-lg">🎯</span>
                  <span className="text-white text-sm font-medium">SDG 10</span>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-white/60 text-sm leading-relaxed">
              Right4All © 2025 | Empowering Migrant Workers in Malaysia | Serving SDG 10: Reduced Inequalities | Protect • Educate • Uplift
            </div>
          </div>
        </FadeIn>
      </footer>

    </div>
  )
}
