import { Routes, Route } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import LanguageSelection from '@/pages/LanguageSelection'
import Home from '@/pages/Home'
import InsightsStories from '@/pages/InsightsStories'
import RightsGuide from '@/pages/RightsGuide'
import Quiz from '@/pages/Quiz'
import Support from '@/pages/Support'
import { useLanguageSync } from '@/hooks/useLanguageSync'

export default function App() {
  useLanguageSync()

  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<LanguageSelection />} />
        <Route path="/home" element={
          <>
            <Navbar />
            <main className="pt-20 md:pt-28 pb-16 min-h-screen">
              <Home />
            </main>
          </>
        } />
        <Route path="/insights" element={
          <>
            <Navbar />
            <main className="pt-20 md:pt-28 pb-16 min-h-screen">
              <InsightsStories />
            </main>
          </>
        } />
        <Route path="/rights" element={
          <>
            <Navbar />
            <main className="pt-20 md:pt-28 pb-16 min-h-screen">
              <RightsGuide />
            </main>
          </>
        } />
        <Route path="/quiz" element={
          <>
            <Navbar />
            <main className="pt-20 md:pt-28 pb-16 min-h-screen">
              <Quiz />
            </main>
          </>
        } />
        <Route path="/tools" element={
          <>
            <Navbar />
            <main className="pt-20 md:pt-28 pb-16 min-h-screen">
              <Support />
            </main>
          </>
        } />
        <Route path="/community" element={
          <>
            <Navbar />
            <main className="pt-20 md:pt-28 pb-16 min-h-screen">
              <Support />
            </main>
          </>
        } />
        <Route path="/support" element={
          <>
            <Navbar />
            <main className="pt-20 md:pt-28 pb-16 min-h-screen">
              <Support />
            </main>
          </>
        } />
        <Route path="/chatbot" element={
          <>
            <Navbar />
            <main className="pt-20 md:pt-28 pb-16 min-h-screen">
              <div className="container-max px-4 py-16 text-center">
                <h1 className="text-4xl font-bold text-white mb-4">🤖 AI Chatbot</h1>
                <p className="text-white/70">Coming soon! Our AI assistant will help you with questions about work, rights, and life in Malaysia.</p>
              </div>
            </main>
          </>
        } />
      </Routes>
    </div>
  )
}
