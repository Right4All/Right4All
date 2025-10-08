import { Routes, Route } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import LanguageSelection from '@/pages/LanguageSelection'
import Home from '@/pages/Home'
import InsightsStories from '@/pages/InsightsStories'
import RightsGuide from '@/pages/RightsGuide'
import Quiz from '@/pages/Quiz'
import Support from '@/pages/Support'
import { useLanguageSync } from '@/hooks/useLanguageSync'
import { ChatWidget } from '@/components/Chatbot'

export default function App() {
  useLanguageSync()

  return (
    <div className="min-h-screen">
      {/* Global Chatbot Widget */}
      <ChatWidget />

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
      </Routes>
    </div>
  )
}
