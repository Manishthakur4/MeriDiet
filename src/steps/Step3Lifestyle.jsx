import { Activity, Moon, Droplet, Briefcase, Dumbbell, Footprints, Info, ChevronDown, Lightbulb } from 'lucide-react'

export default function Step3Lifestyle({ data, update }) {
  const stepRanges = ['< 2,000', '2,000 – 5,000', '5,000 – 8,000', '8,000 – 12,000', '> 12,000']

  return (
    <>
      <div className="section-header">
        <span className="icon-bubble"><Activity size={28} /></span>
        <div>
          <h2>Tell us about your lifestyle</h2>
          <p>This helps us understand your routine and create a plan that fits your life.</p>
        </div>
      </div>

      <div className="row cols-3" style={{ marginBottom: 14 }}>
        <div className="opt-card">
          <div className="top"><Info size={14} className="ico" /><h3>Activity Level</h3></div>
          <div className="desc">How active are you on a daily basis?</div>
          <div className="input-wrap select-wrap">
            <Activity size={14} className="ico" />
            <select className="select" value={data.activity} onChange={(e) => update({ activity: e.target.value })}>
              <option>Moderately Active</option>
              <option>Sedentary</option>
              <option>Lightly Active</option>
              <option>Very Active</option>
            </select>
            <ChevronDown size={16} className="chev" />
          </div>
        </div>

        <div className="opt-card">
          <div className="top"><Info size={14} className="ico" /><h3>Sleep Duration</h3></div>
          <div className="desc">How many hours do you sleep daily?</div>
          <div className="input-wrap select-wrap">
            <Moon size={14} className="ico" />
            <select className="select" value={data.sleep} onChange={(e) => update({ sleep: e.target.value })}>
              <option>6 – 7 hours</option>
              <option>{'< 5 hours'}</option>
              <option>5 – 6 hours</option>
              <option>7 – 8 hours</option>
              <option>{'> 8 hours'}</option>
            </select>
            <ChevronDown size={16} className="chev" />
          </div>
        </div>

        <div className="opt-card">
          <div className="top"><Info size={14} className="ico" /><h3>Water Intake</h3></div>
          <div className="desc">How much water do you drink daily?</div>
          <div className="input-wrap select-wrap">
            <Droplet size={14} className="ico" />
            <select className="select" value={data.water} onChange={(e) => update({ water: e.target.value })}>
              <option>2 – 3 liters</option>
              <option>{'< 1 liter'}</option>
              <option>1 – 2 liters</option>
              <option>{'> 3 liters'}</option>
            </select>
            <ChevronDown size={16} className="chev" />
          </div>
        </div>
      </div>

      <div className="row cols-3" style={{ marginBottom: 14 }}>
        <div className="opt-card">
          <h3>Work Type</h3>
          <div className="desc">What type of work do you do?</div>
          <div className="work-pills">
            {['Desk Job','Standing Job','Physical Job'].map((w) => (
              <div
                key={w}
                className={`work-pill ${data.workType === w ? 'active' : ''}`}
                onClick={() => update({ workType: w })}
              >
                <Briefcase size={16} className="ico" />
                {w}
              </div>
            ))}
          </div>
        </div>

        <div className="opt-card">
          <h3>Workout Frequency</h3>
          <div className="desc">How often do you workout?</div>
          <div className="input-wrap select-wrap">
            <Dumbbell size={14} className="ico" />
            <select className="select" value={data.workoutFreq} onChange={(e) => update({ workoutFreq: e.target.value })}>
              <option>2 – 3 times per week</option>
              <option>Never</option>
              <option>1 time per week</option>
              <option>4 – 5 times per week</option>
              <option>Daily</option>
            </select>
            <ChevronDown size={16} className="chev" />
          </div>
        </div>

        <div className="opt-card">
          <h3>Workout Type <span style={{ color: '#9aa9a1', fontSize: 12, fontWeight: 500 }}>(Optional)</span></h3>
          <div className="desc">What type of workouts do you prefer?</div>
          <div className="input-wrap select-wrap">
            <Dumbbell size={14} className="ico" />
            <select className="select" value={data.workoutType} onChange={(e) => update({ workoutType: e.target.value })}>
              <option>Gym / Strength Training</option>
              <option>Cardio</option>
              <option>Yoga</option>
              <option>Sports</option>
              <option>Home Workouts</option>
            </select>
            <ChevronDown size={16} className="chev" />
          </div>
        </div>
      </div>

      <div className="opt-card" style={{ marginBottom: 14 }}>
        <div className="top"><Footprints size={14} className="ico" /><h3>Daily Step Count <span style={{ color: '#9aa9a1', fontSize: 12, fontWeight: 500 }}>(Optional)</span></h3></div>
        <div className="desc">On average, how many steps do you take daily?</div>
        <div className="range-pills">
          {stepRanges.map((r) => (
            <div key={r} className={`range-pill ${data.steps === r ? 'active' : ''}`} onClick={() => update({ steps: r })}>{r}</div>
          ))}
        </div>
      </div>
    </>
  )
}
