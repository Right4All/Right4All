import { Routes, Route } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Home from '@/pages/Home'
import Insights from '@/pages/Insights'
import RightsGuide from '@/pages/RightsGuide'
import Quiz from '@/pages/Quiz'
import Tools from '@/pages/Tools'
import Community from '@/pages/Community'
import { useLanguageSync } from '@/hooks/useLanguageSync'

export default function App() {
  useLanguageSync()
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20 md:pt-28 pb-16 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/rights" element={<RightsGuide />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </main>
    </div>
  )
}
