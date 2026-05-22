import { HeartPulse, Activity, Droplet, AlertCircle, Pill, Check } from 'lucide-react'

const CONDITIONS = [
  { k: 'diabetes', l: 'Diabetes' },
  { k: 'thyroid', l: 'Thyroid' },
  { k: 'pcos', l: 'PCOS / PCOD' },
  { k: 'bp', l: 'High BP' },
  { k: 'chol', l: 'Cholesterol' },
  { k: 'heart', l: 'Heart Condition' },
  { k: 'none', l: 'None' },
  { k: 'other', l: 'Other' },
]

const ALLERGIES = [
  { k: 'gluten', l: 'Gluten' },
  { k: 'dairy', l: 'Dairy / Lactose' },
  { k: 'nuts', l: 'Nuts' },
  { k: 'soy', l: 'Soy' },
  { k: 'eggs', l: 'Eggs' },
  { k: 'none', l: 'None' },
  { k: 'other', l: 'Other' },
]

export default function Step5HealthMedical({ data, update }) {
  const toggleSet = (field, key) => {
    const s = new Set(data[field] || [])
    if (s.has(key)) s.delete(key); else s.add(key)
    update({ [field]: Array.from(s) })
  }
  return (
    <>
      <div className="section-header">
        <span className="icon-bubble"><HeartPulse size={28} /></span>
        <div>
          <h2>Tell us about your health</h2>
          <p>This helps us create a safe and effective plan tailored just for you.</p>
        </div>
      </div>

      <div className="row cols-2" style={{ marginBottom: 14 }}>
        <div className="opt-card">
          <h3>Do you have any medical conditions?</h3>
          <div className="desc">(Select all that apply)</div>
          <div className="cond-grid">
            {CONDITIONS.map((c) => (
              <div
                key={c.k}
                className={`cond-card ${data.conditions?.includes(c.k) ? 'selected' : ''}`}
                onClick={() => toggleSet('conditions', c.k)}
              >
                {c.k === 'diabetes' && <Droplet size={14} className="ico" />}
                {c.k === 'thyroid' && <Activity size={14} className="ico" />}
                {c.k === 'pcos' && <Activity size={14} className="ico" />}
                {c.k === 'bp' && <Activity size={14} className="ico" />}
                {c.k === 'chol' && <Droplet size={14} className="ico" />}
                {c.k === 'heart' && <HeartPulse size={14} className="ico" />}
                {c.k === 'none' && <Check size={14} className="ico" />}
                {c.k === 'other' && <Pill size={14} className="ico" />}
                {c.l}
                {c.k === 'other' && data.conditions?.includes('other') && (
                  <input
                    className="inline-input"
                    placeholder="Please specify"
                    onClick={(e) => e.stopPropagation()}
                    value={data.otherCondition || ''}
                    onChange={(e) => update({ otherCondition: e.target.value })}
                  />
                )}
                <span className="tick"><Check size={10} /></span>
              </div>
            ))}
          </div>
        </div>

        <div className="opt-card">
          <h3>Are you currently on any medication?</h3>
          <div className="radio-inline" style={{ marginTop: 8 }}>
            {['Yes, regularly', 'Yes, occasionally', 'No'].map((opt) => (
              <label key={opt} className={`radio-row ${data.onMedication === opt ? 'selected' : ''}`} onClick={() => update({ onMedication: opt })}>
                <span className="radio-circle"><span className="dot" /></span>
                {opt}
              </label>
            ))}
          </div>
          <div className="field" style={{ marginTop: 14 }}>
            <label>Please list your medications <span style={{ color: '#9aa9a1', fontWeight: 500 }}>(optional)</span></label>
            <input
              className="input no-ico"
              placeholder="e.g., Metformin, Thyroxine, Vitamin D"
              value={data.medications || ''}
              onChange={(e) => update({ medications: e.target.value })}
            />
          </div>
        </div>
      </div>

      <div className="row cols-3" style={{ marginBottom: 14 }}>
        <div className="opt-card">
          <h3>Any food allergies or intolerances?</h3>
          <div className="desc">(Select all that apply)</div>
          <div className="check-list">
            {ALLERGIES.map((a) => (
              <div
                key={a.k}
                className={`check-pill ${data.foodAllergies?.includes(a.k) ? 'selected' : ''}`}
                onClick={() => toggleSet('foodAllergies', a.k)}
              >
                <span className="box">{data.foodAllergies?.includes(a.k) && <Check size={10} />}</span>
                {a.l}
                {a.k === 'other' && data.foodAllergies?.includes('other') && (
                  <input
                    className="inline-input"
                    placeholder="Please specify"
                    onClick={(e) => e.stopPropagation()}
                    value={data.otherAllergy || ''}
                    onChange={(e) => update({ otherAllergy: e.target.value })}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="opt-card">
          <h3>Digestive Health</h3>
          <div className="desc">How would you describe your digestion?</div>
          <div className="radio-list">
            {['Excellent', 'Good', 'Average', 'Poor'].map((opt) => (
              <label key={opt} className={`radio-row ${data.digestion === opt ? 'selected' : ''}`} onClick={() => update({ digestion: opt })}>
                <span className="radio-circle"><span className="dot" /></span>
                {opt}
              </label>
            ))}
          </div>
        </div>

        <div className="opt-card">
          <h3>Do you smoke or consume alcohol?</h3>
          <div className="radio-list" style={{ marginTop: 4 }}>
            {['Neither', 'Smoke', 'Consume Alcohol', 'Both'].map((opt) => (
              <label key={opt} className={`radio-row ${data.smokeAlcohol === opt ? 'selected' : ''}`} onClick={() => update({ smokeAlcohol: opt })}>
                <span className="radio-circle"><span className="dot" /></span>
                {opt}
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="opt-card" style={{ marginBottom: 14 }}>
        <h3>Anything else we should know?</h3>
        <div className="desc">Share any other health information that might be important for your plan (optional)</div>
        <div className="textarea-wrap">
          <textarea
            className="textarea no-ico"
            placeholder="e.g., recent surgery, pregnancy, breastfeeding, etc."
            value={data.healthNotes || ''}
            onChange={(e) => update({ healthNotes: e.target.value })}
          />
          <span className="note-counter">{(data.healthNotes || '').length}/250</span>
        </div>
      </div>
    </>
  )
}
