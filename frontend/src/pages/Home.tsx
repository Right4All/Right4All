import { Link } from 'react-router-dom'
import HeroScene from '@/components/Three/HeroScene'
import { FadeIn } from '@/components/ui/Motion'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

function Stat({ label, value, suffix = '+' }: { label: string, value: number, suffix?: string }) {
  const mv = useMotionValue(0)
  const rounded = useTransform(mv, (latest) => Math.round(latest))
  const formatted = useTransform(rounded, (n) => n.toLocaleString())

  useEffect(() => {
    const controls = animate(mv, value, { duration: 1.6, ease: 'easeOut' })
    return () => controls.stop()
  }, [value])

  return (
    <div className="p-3 md:p-4 rounded-2xl bg-white/5 border border-white/10">
      <div className="text-xl md:text-3xl font-extrabold tabular-nums">
        <motion.span>{formatted}</motion.span>
        <span className="text-rose-400">{suffix}</span>
      </div>
      <div className="text-white/70 text-xs md:text-sm leading-tight">{label}</div>
    </div>
  )
}

export default function Home() {
  const { t } = useTranslation()

  return (
    <>
      <section className="container-max grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center min-h-[calc(100vh-140px)] py-4 lg:py-8 px-4 lg:px-0">
        <div className="space-y-6">
          <FadeIn>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/15 font-semibold shadow">
              👋 <span className="ml-2">{t('home.welcome')}</span>
            </div>
          </FadeIn>
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-black leading-[1.05] tracking-tight">
              {t('home.empowering')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-400">{t('home.migrantWorkers')}</span><br/>
              {t('home.withDataTools')}
            </h1>
          </FadeIn>
          <FadeIn>
            <p className="text-base md:text-lg text-white/80">
              {t('home.description')}
            </p>
          </FadeIn>
          <FadeIn>
            <div className="flex gap-3">
              <Link className="relative btn-primary" to="/rights">{t('home.rightsGuide')}</Link>
              <Link className="btn-outline" to="/insights">{t('home.labourMarket')}</Link>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-lg">
              <Stat label={t('home.stats.arrivals')} value={3} suffix=" Million+" />
              <Stat label={t('home.stats.undocumented')} value={2.2} suffix=" Million+" />
              <Stat label={t('home.stats.documented')} value={15.27} suffix="%" />
            </div>
          </FadeIn>
        </div>
        <FadeIn>
          <HeroScene />
        </FadeIn>
      </section>

      {/* SDG 10 Section */}
      <section className="container-max py-16 px-4 lg:px-0">
        <FadeIn>
          <div className="max-w-6xl mx-auto">
            <div className="relative bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-pink-500/30 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full"></div>
                <div className="absolute top-12 right-8 w-6 h-6 bg-white/70 rounded-full"></div>
                <div className="absolute bottom-8 left-12 w-4 h-4 bg-white/50 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/30 rounded-full"></div>
              </div>

              <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
                {/* SDG Logo - Takes up 2 columns */}
                <div className="lg:col-span-2 flex justify-center lg:justify-center">
                  <div className="relative w-full max-w-sm">
                    <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl blur opacity-30"></div>
                    <img 
                      src="/images/sdg-10.png" 
                      alt="SDG 10 - Reduced Inequalities" 
                      className="relative w-full h-auto max-w-full object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>

                {/* Text Content - Takes up 3 columns */}
                <div className="lg:col-span-3 text-center lg:text-left space-y-8">
                  <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                    {t('home.sdg.title')}
                  </h2>
                  <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                    {t('home.sdg.description')}
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    <span className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-full text-base shadow-lg">
                      SDG 10
                    </span>
                    <span className="px-6 py-3 bg-white/10 text-white font-bold rounded-full text-base border border-white/20 backdrop-blur-sm">
                      Reduced Inequalities
                    </span>
                  </div>
                  
                  {/* Additional decorative element */}
                  <div className="hidden lg:block">
                    <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Vision & Mission Section */}
      <section className="container-max py-16 px-4 lg:px-0">
        <FadeIn>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Vision */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/10 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-30"></div>
                      <div className="relative w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-xl">
                        <span className="text-2xl">🔭</span>
                      </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                      {t('home.vision.title')}
                    </h2>
                  </div>
                  <p className="text-base md:text-lg text-white/80 leading-relaxed">
                    {t('home.vision.content')}
                  </p>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full"></div>
                </div>
              </div>

              {/* Mission */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 to-pink-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/10 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="absolute -inset-2 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full blur opacity-30"></div>
                      <div className="relative w-14 h-14 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center shadow-xl">
                        <span className="text-2xl">🎯</span>
                      </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                      {t('home.mission.title')}
                    </h2>
                  </div>
                  <p className="text-base md:text-lg text-white/80 leading-relaxed">
                    {t('home.mission.content')}
                  </p>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-rose-500/10 to-pink-500/10 rounded-full blur"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-r from-rose-500/5 to-pink-500/5 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10 py-8 mt-16">
        <div className="container-max px-4 lg:px-0">
          <FadeIn>
            <div className="text-center space-y-6">
              {/* Disclaimer */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/10 max-w-3xl mx-auto">
                <h3 className="text-lg font-bold text-white mb-3">
                  {t('home.footer.disclaimer.title')}
                </h3>
                <p className="text-sm md:text-base text-white/70 leading-relaxed">
                  {t('home.footer.disclaimer.content')}
                </p>
              </div>

              {/* Copyright */}
              <p className="text-sm md:text-base text-white/70 leading-relaxed">
                {t('home.footer.copyright')}
              </p>
            </div>
          </FadeIn>
        </div>
      </footer>
    </>
  )
}
