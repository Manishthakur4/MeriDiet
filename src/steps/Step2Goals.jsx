import { Target, Dumbbell, Flame, Activity, Sparkles, Droplet, Heart, Leaf, Check, Lightbulb } from 'lucide-react'

const GOALS = [
  { key: 'weightLoss',   icon: Weight, label: 'Weight Loss',         sub: 'Lose weight & feel lighter' },
  { key: 'fatLoss',      icon: Flame,  label: 'Fat Loss',            sub: 'Reduce body fat & improve shape' },
  { key: 'muscleGain',   icon: Dumbbell, label: 'Muscle Gain',       sub: 'Build muscle & get stronger' },
  { key: 'pcos',         icon: Sparkles, label: 'PCOS Support',      sub: 'Manage PCOS symptoms naturally' },
  { key: 'diabetes',     icon: Droplet,  label: 'Diabetes Management', sub: 'Control blood sugar & improve health' },
  { key: 'thyroid',      icon: Activity, label: 'Thyroid Support',   sub: 'Support thyroid health & balance' },
  { key: 'healthy',      icon: Leaf,     label: 'Healthy Lifestyle', sub: 'Maintain overall health & wellness' },
]

function Weight(props) {
  return (
    <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 6h12l-1 14H7L6 6z"/><path d="M9 6V4a3 3 0 0 1 6 0v2"/>
    </svg>
  )
}

export default function Step2Goals({ data, update }) {
  const toggle = (key) => {
    const set = new Set(data.goals || [])
    if (set.has(key)) set.delete(key); else set.add(key)
    update({ goals: Array.from(set) })
  }

  return (
    <>
      <div className="section-header">
        <span className="icon-bubble"><Target size={28} /></span>
        <div>
          <h2>What are your health & fitness goals?</h2>
          <p>Select all that apply. This helps us create the perfect plan for you.</p>
        </div>
      </div>

      <div className="goals-grid" style={{ marginBottom: 18 }}>
        {GOALS.map((g) => {
          const Icon = g.icon
          const isSelected = data.goals?.includes(g.key)
          return (
            <div key={g.key} className={`goal-card ${isSelected ? 'selected' : ''}`} onClick={() => toggle(g.key)}>
              <span className="radio">{isSelected && <Check size={12} />}</span>
              <div className="icon-bubble"><Icon size={22} /></div>
              <div className="title">{g.label}</div>
              <div className="sub">{g.sub}</div>
            </div>
          )
        })}
      </div>

      <div className="tip-bar">
        <Lightbulb size={18} className="ico" />
        <div>
          <strong>Not sure?</strong>
          You can select multiple goals. Our experts will customize your plan accordingly.
        </div>
      </div>
    </>
  )
}
