import { useState } from 'react'
import { MALAYSIA_MIN_WAGE, MAX_HOURS_PER_WEEK, MAX_OVERTIME_PER_MONTH } from '@/constants/law'
import { checkContract } from '@/utils/contractCheck'

type ChatItem = { role: 'user'|'bot', text: string }

export default function Tools() {
  const [chat, setChat] = useState<ChatItem[]>([
    { role: 'bot', text: 'Hello! Ask me about your rights. Try: "salary 1400, hours 60" or "Is passport keeping legal?"' }
  ])
  const [input, setInput] = useState('')
  const [contract, setContract] = useState('')

  const onSend = () => {
    if (!input.trim()) return
    const msg = input.trim()
    setChat(c => [...c, { role:'user', text: msg }])
    setInput('')

    // very small parser for salary/hours
    const salary = Number((/salary\s*(\d+)/i.exec(msg)||[])[1])
    const hours = Number((/hours\s*(\d+)/i.exec(msg)||[])[1])
    let reply: string | null = null
    if (salary || hours) {
      const underpaid = salary && salary < MALAYSIA_MIN_WAGE
      const overworked = hours && hours > MAX_HOURS_PER_WEEK
      reply = `Analysis: ${salary?`salary RM${salary}. `:''}${hours?`hours ${hours}/week. `:''}` +
        `${underpaid?`❌ Salary is below minimum RM${MALAYSIA_MIN_WAGE}. `:''}` +
        `${overworked?`❌ Hours exceed ${MAX_HOURS_PER_WEEK}/week. `:''}` +
        `${!underpaid && !overworked ? '✅ Looks compliant.' : ''}`
    }
    if (/passport/i.test(msg)) {
      reply = (reply?reply+'\n':'') + 'It is illegal for employers to keep worker passports.'
    }
    setChat(c => [...c, { role:'bot', text: reply || "I'm not sure. Try asking about salary/hours or passport." }])
  }

  const findings = checkContract(contract)

  return (
    <section className="container-max min-h-[calc(100vh-140px)] py-8 grid lg:grid-cols-2 gap-8">
      <div className="card p-6">
        <h2 className="text-2xl font-bold mb-2">AI Chatbot + Wage Checker</h2>
        <div className="h-72 overflow-y-auto border rounded-xl p-3 bg-white">
          {chat.map((m, idx) => (
            <div key={idx} className={'my-2 ' + (m.role==='user'?'text-right':'text-left')}>
              <div className={'inline-block px-3 py-2 rounded-2xl ' + (m.role==='user'?'bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-[0_10px_25px_-10px_rgba(244,63,94,0.9)]':'bg-slate-100')}>{m.text}</div>
            </div>
          ))}
        </div>
        <div className="mt-3 flex gap-2">
          <input className="flex-1 border rounded-full px-3 py-2" value={input} onChange={e=>setInput(e.target.value)} placeholder="e.g., salary 1400, hours 60"/>
          <button className="btn-primary" onClick={onSend}>Send</button>
        </div>
        <p className="text-xs text-slate-500 mt-2">Min wage RM{MALAYSIA_MIN_WAGE}, Max hours/week {MAX_HOURS_PER_WEEK}, Max OT/month {MAX_OVERTIME_PER_MONTH}.</p>
      </div>
      <div className="card p-6">
        <h2 className="text-2xl font-bold mb-2">Contract Checker</h2>
        <textarea className="w-full h-52 border rounded-xl p-3" placeholder="Paste your job contract here..." value={contract} onChange={e=>setContract(e.target.value)} />
        <div className="mt-3 space-y-2">
          {findings.length===0 && <div className="text-slate-600 text-sm">No issues detected yet. Add more details.</div>}
          {findings.map((f, idx) => (
            <div key={idx} className={'p-3 rounded-xl border ' + (f.type==='illegal'?'bg-rose-50 border-rose-300':f.type==='missing'?'bg-amber-50 border-amber-300':'bg-slate-50')}>
              <div className="font-semibold capitalize">{f.type}</div>
              <div className="text-sm">{f.message}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
