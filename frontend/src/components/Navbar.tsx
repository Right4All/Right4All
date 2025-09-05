import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useAppStore } from '@/store/appStore'
import { motion } from 'framer-motion'
import shieldPng from '@/assets/shield.png'

const langs = [
  { code: 'en', label: 'English', name: 'English' },
  { code: 'ms', label: 'Bahasa Malaysia', name: 'Bahasa Malaysia' },
  { code: 'ne', label: 'नेपाली', name: 'Nepali' },
  { code: 'hi', label: 'हिंदी', name: 'Hindi' },
  { code: 'bn', label: 'বাংলা', name: 'Bengali' },
]

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const language = useAppStore(s => s.language)
  const setLanguage = useAppStore(s => s.setLanguage)

  const switchLang = (lng: string) => {
    i18n.changeLanguage(lng)
    setLanguage(lng)
  }

  const item = (to: string, label: string) => (
    <NavLink to={to} className="nav-item relative text-white/90 px-3 py-2">
      {({ isActive }) => (
        <span className="relative">
          {label}
          {isActive && (
            <motion.span
              layoutId="nav-underline"
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full"
            />
          )}
        </span>
      )}
    </NavLink>
  )

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: .6, ease: 'easeOut' }}
        className="flex items-center justify-between card px-5 py-3"
      >
        <Link to="/" className="flex items-center gap-3 text-white font-bold">
          <div className="w-9 h-9 rounded-xl bg-white grid place-items-center shadow-[0_10px_30px_-10px_rgba(244,63,94,0.9)] p-1.5">
            <img src={shieldPng} alt="Shield" className="w-full h-full object-contain" />
          </div>
          <span className="tracking-tight">Right4All</span>
        </Link>
        <div className="flex items-center gap-2">
          {item('/', t('nav.home'))}
          {item('/insights', t('nav.insights'))}
          {item('/rights', t('nav.rights'))}
          {item('/quiz', t('nav.quiz'))}
          {item('/tools', t('nav.tools'))}
          {item('/community', t('nav.community'))}
        </div>
        <div className="flex gap-1">
          {langs.map(l => (
            <button 
              key={l.code} 
              onClick={() => switchLang(l.code)}
              title={l.name}
              className={'px-2 py-1 rounded-lg text-xs font-medium transition-all ' + (language===l.code ? 'bg-rose-600 text-white shadow-lg' : 'bg-white/10 text-white/80 border border-white/10 hover:bg-white/20')}>
              {l.label}
            </button>
          ))}
        </div>
      </motion.nav>
    </header>
  )
}
