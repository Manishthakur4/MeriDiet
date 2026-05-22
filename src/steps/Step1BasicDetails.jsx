import { User, Calendar, Ruler, Weight, ShieldCheck, Edit3, ChevronDown } from 'lucide-react'

const BODY_TYPES = [
  { key: 'slim',       label: 'Slim',       icon: '🧍🏻‍♂️', color: '#4a8b4f' },
  { key: 'average',    label: 'Average',    icon: '🧍🏻',   color: '#4a8b4f' },
  { key: 'overweight', label: 'Overweight', icon: '🧍🏽',   color: '#e3a356' },
  { key: 'obese',      label: 'Obese',      icon: '🧍🏼',   color: '#d04747' },
  { key: 'athletic',   label: 'Athletic',   icon: '🏋🏻',   color: '#5a8ad1' },
]

export default function Step1BasicDetails({ data, update }) {
  return (
    <>
      <div className="section-header">
        <span className="icon-bubble"><User size={28} /></span>
        <div>
          <h2>Basic Details</h2>
          <p>Let's start with some basic information about you.</p>
        </div>
        <span className="badge"><ShieldCheck size={14} /> 100% Confidential</span>
      </div>

      <div className="field" style={{ marginBottom: 14 }}>
        <span className="label">Full Name <span className="req">*</span></span>
        <div className="input-wrap">
          <User size={16} className="ico" />
          <input
            className="input"
            placeholder="Enter your full name"
            value={data.fullName}
            onChange={(e) => update({ fullName: e.target.value })}
          />
        </div>
      </div>

      <div className="row cols-3" style={{ marginBottom: 14 }}>
        <div className="field">
          <span className="label">Age <span className="req">*</span></span>
          <div className="input-wrap">
            <Calendar size={16} className="ico" />
            <input
              className="input" type="number" placeholder="Enter your age"
              value={data.age} onChange={(e) => update({ age: e.target.value })}
            />
          </div>
        </div>
        <div className="field">
          <span className="label">Gender <span className="req">*</span></span>
          <div className="input-wrap select-wrap">
            <User size={16} className="ico" />
            <select className="select" value={data.gender} onChange={(e) => update({ gender: e.target.value })}>
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <ChevronDown size={16} className="chev" />
          </div>
        </div>
        <div className="field">
          <span className="label">Date of Birth</span>
          <div className="input-wrap">
            <Calendar size={16} className="ico" />
            <input className="input" placeholder="DD / MM / YYYY"
              value={data.dob} onChange={(e) => update({ dob: e.target.value })} />
          </div>
        </div>
      </div>

      <div className="row cols-2" style={{ marginBottom: 14 }}>
        <div className="field">
          <div className="label">
            <span>Height <span className="req">*</span></span>
            <div className="unit-toggle">
              <button className={data.heightUnit === 'cm' ? 'active' : ''} onClick={() => update({ heightUnit: 'cm' })}>cm</button>
              <button className={data.heightUnit === 'ft/in' ? 'active' : ''} onClick={() => update({ heightUnit: 'ft/in' })}>ft/in</button>
            </div>
          </div>
          <div className="input-wrap">
            <Ruler size={16} className="ico" />
            <input
              className="input"
              placeholder={`Enter your height in ${data.heightUnit}`}
              value={data.height} onChange={(e) => update({ height: e.target.value })}
            />
          </div>
        </div>
        <div className="field">
          <div className="label">
            <span>Weight <span className="req">*</span></span>
            <div className="unit-toggle">
              <button className={data.weightUnit === 'kg' ? 'active' : ''} onClick={() => update({ weightUnit: 'kg' })}>kg</button>
              <button className={data.weightUnit === 'lbs' ? 'active' : ''} onClick={() => update({ weightUnit: 'lbs' })}>lbs</button>
            </div>
          </div>
          <div className="input-wrap">
            <Weight size={16} className="ico" />
            <input
              className="input"
              placeholder={`Enter your weight in ${data.weightUnit}`}
              value={data.weight} onChange={(e) => update({ weight: e.target.value })}
            />
          </div>
        </div>
      </div>

      <div className="field" style={{ marginBottom: 16 }}>
        <span className="label">How would you describe your body type?</span>
        <div className="bodytype-grid">
          {BODY_TYPES.map((t) => (
            <div
              key={t.key}
              className={`bodytype ${data.bodyType === t.key ? 'selected' : ''}`}
              onClick={() => update({ bodyType: t.key })}
            >
              <span className="check">✓</span>
              <div className="figure" style={{ color: t.color }}>
                {/* simple svg silhouette */}
                <svg width="36" height="44" viewBox="0 0 36 44" fill="none">
                  <circle cx="18" cy="7" r="5.5" stroke={t.color} strokeWidth="2"/>
                  {t.key === 'slim' && (
                    <path d="M14 14 Q18 14 22 14 L21 30 L23 42 M13 42 L15 30 L14 14" stroke={t.color} strokeWidth="2" fill="none" strokeLinejoin="round"/>
                  )}
                  {t.key === 'average' && (
                    <path d="M11 14 Q18 14 25 14 L23 30 L24 42 L20 42 L19 32 L17 32 L16 42 L12 42 L13 30 Z" stroke={t.color} strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
                  )}
                  {t.key === 'overweight' && (
                    <path d="M9 16 Q18 12 27 16 L25 30 L26 42 L21 42 L20 32 L16 32 L15 42 L10 42 L11 30 Z" stroke={t.color} strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
                  )}
                  {t.key === 'obese' && (
                    <path d="M7 18 Q18 10 29 18 L26 32 L27 42 L21 42 L20 32 L16 32 L15 42 L9 42 L10 32 Z" stroke={t.color} strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
                  )}
                  {t.key === 'athletic' && (
                    <path d="M8 14 L14 14 L13 22 L23 22 L22 14 L28 14 L26 26 L24 32 L25 42 L20 42 L19 32 L17 32 L16 42 L11 42 L12 32 L10 26 Z" stroke={t.color} strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
                  )}
                </svg>
              </div>
              <div className="name">{t.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="field">
        <span className="label">Any specific other information you'd like to share?</span>
        <div className="textarea-wrap">
          <textarea
            className="textarea no-ico"
            placeholder="E.g. recent weight changes, family history, etc."
            value={data.otherInfo}
            onChange={(e) => update({ otherInfo: e.target.value })}
          />
          <Edit3 size={14} className="note-counter" />
        </div>
      </div>
    </>
  )
}
