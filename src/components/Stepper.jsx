import { Check } from 'lucide-react'

const STEPS = [
  'Basic Details', 'Goals', 'Lifestyle', 'Food Preferences', 'Health', 'Convenience', 'Contact',
]

export default function Stepper({ current }) {
  const fillPct = ((current - 1) / (STEPS.length - 1)) * 100
  return (
    <div className="stepper">
      <div className="line"><div className="fill" style={{ width: `${fillPct}%` }} /></div>
      {STEPS.map((label, i) => {
        const n = i + 1
        const state = n < current ? 'done' : n === current ? 'active' : ''
        return (
          <div key={label} className={`step ${state}`}>
            <span className="circle">{n < current ? <Check size={14} /> : n}</span>
            <span className="lbl">{label}</span>
          </div>
        )
      })}
    </div>
  )
}
