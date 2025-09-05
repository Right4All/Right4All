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
    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
      <div className="text-3xl font-extrabold tabular-nums">
        <motion.span>{formatted}</motion.span>
        <span className="text-rose-400">{suffix}</span>
      </div>
      <div className="text-white/70 text-sm">{label}</div>
    </div>
  )
}

export default function Home() {
  const { t } = useTranslation()

  return (
    <section className="container-max grid lg:grid-cols-2 gap-10 items-center min-h-[calc(100vh-140px)] py-8">
      <div className="space-y-6">
        <FadeIn>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/15 font-semibold shadow">
            👋 <span className="ml-2">{t('home.welcome')}</span>
          </div>
        </FadeIn>
        <FadeIn>
          <h1 className="text-6xl font-black leading-[1.05] tracking-tight">
            {t('home.empowering')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-400">{t('home.migrantWorkers')}</span><br/>
            {t('home.withDataTools')}
          </h1>
        </FadeIn>
        <FadeIn>
          <p className="text-lg text-white/80">
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
          <div className="grid grid-cols-3 gap-3 max-w-lg">
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
  )
}
