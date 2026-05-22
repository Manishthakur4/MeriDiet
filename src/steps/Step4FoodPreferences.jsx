import { Utensils, ChevronDown, Leaf, Sun, Coffee, Moon, Apple, Check } from 'lucide-react'

const DIET_TYPES = [
  { key: 'veg', label: 'Vegetarian', icon: '🥬' },
  { key: 'nonveg', label: 'Non-Vegetarian', icon: '🍗' },
  { key: 'egg', label: 'Eggetarian', icon: '🥚' },
]

export default function Step4FoodPreferences({ data, update }) {
  return (
    <>
      <div className="section-header">
        <span className="icon-bubble"><Utensils size={28} /></span>
        <div>
          <h2>Tell us about your food preferences</h2>
          <p>This helps us create a diet plan with meals you enjoy and ingredients you prefer.</p>
        </div>
      </div>

      <div className="row cols-3" style={{ marginBottom: 14 }}>
        <div className="opt-card">
          <h3>Diet Type</h3>
          <div className="desc">What type of diet do you follow?</div>
          <div className="diet-grid">
            {DIET_TYPES.map((d) => (
              <div
                key={d.key}
                className={`diet-card ${data.dietType === d.key ? 'selected' : ''}`}
                onClick={() => update({ dietType: d.key })}
              >
                <span className="check"><Check size={12} /></span>
                <div className="ico">{d.icon}</div>
                <div className="name">{d.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="opt-card">
          <h3>Cuisine Preference</h3>
          <div className="desc">Which cuisine do you prefer?</div>
          <div className="input-wrap select-wrap">
            <Leaf size={14} className="ico" />
            <select className="select" value={data.cuisine} onChange={(e) => update({ cuisine: e.target.value })}>
              <option>North Indian</option>
              <option>South Indian</option>
              <option>Continental</option>
              <option>Mediterranean</option>
              <option>Chinese</option>
            </select>
            <ChevronDown size={16} className="chev" />
          </div>
        </div>

        <div className="opt-card">
          <h3>Preferred Meals</h3>
          <div className="desc">Select your preferred meal options</div>
          <div className="pills">
            {[
              { k: 'home', l: 'Home Cooked' },
              { k: 'rest', l: 'Restaurant Food' },
              { k: 'prep', l: 'Meal Prep' },
              { k: 'none', l: 'No Preference' },
            ].map((m) => (
              <div
                key={m.k}
                className={`pill-btn ${data.mealPref?.includes(m.k) ? 'active' : ''}`}
                onClick={() => {
                  const s = new Set(data.mealPref || [])
                  if (s.has(m.k)) s.delete(m.k); else s.add(m.k)
                  update({ mealPref: Array.from(s) })
                }}
              >
                {m.l}
                {data.mealPref?.includes(m.k) && <Check size={14} className="ico" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="row cols-3" style={{ marginBottom: 14 }}>
        <div className="opt-card">
          <h3>Food Allergies / Intolerances</h3>
          <div className="desc">Do you have any allergies?</div>
          <div className="input-wrap select-wrap">
            <Leaf size={14} className="ico" />
            <select className="select" value={data.allergies} onChange={(e) => update({ allergies: e.target.value })}>
              <option>None</option>
              <option>Gluten</option>
              <option>Dairy / Lactose</option>
              <option>Nuts</option>
              <option>Soy</option>
              <option>Eggs</option>
            </select>
            <ChevronDown size={16} className="chev" />
          </div>
        </div>

        <div className="opt-card">
          <h3>Foods You Dislike</h3>
          <div className="desc">Any foods you dislike or want to avoid?</div>
          <input
            className="input no-ico"
            placeholder="e.g., mushrooms, tofu, etc."
            value={data.dislikes}
            onChange={(e) => update({ dislikes: e.target.value })}
          />
        </div>

        <div className="opt-card">
          <h3>Favourite Foods <span style={{ color: '#9aa9a1', fontSize: 12, fontWeight: 500 }}>(Optional)</span></h3>
          <div className="desc">Tell us what you love!</div>
          <input
            className="input no-ico"
            placeholder="e.g., dal, paneer, rajma, oats, fruits, etc."
            value={data.favourites}
            onChange={(e) => update({ favourites: e.target.value })}
          />
        </div>
      </div>

      <div className="opt-card" style={{ marginBottom: 14 }}>
        <h3>Meal Timings</h3>
        <div className="desc">What is your usual meal schedule?</div>
        <div className="meal-times">
          {[
            { key: 'breakfast', label: 'Breakfast', icon: Sun, default: '8:00 AM' },
            { key: 'midmorning', label: 'Mid-morning', icon: Coffee, default: '11:00 AM', opt: true },
            { key: 'lunch', label: 'Lunch', icon: Sun, default: '1:30 PM' },
            { key: 'snack', label: 'Evening Snack', icon: Coffee, default: '5:00 PM', opt: true },
            { key: 'dinner', label: 'Dinner', icon: Moon, default: '8:30 PM' },
          ].map((m) => {
            const Icon = m.icon
            return (
              <div className="field" key={m.key}>
                <label>
                  <Icon size={14} style={{ color: '#5aa15d' }} /> {m.label}
                  {m.opt && <span className="opt">(Optional)</span>}
                </label>
                <div className="input-wrap select-wrap">
                  <select
                    className="select no-ico"
                    value={data.meals?.[m.key] || m.default}
                    onChange={(e) => update({ meals: { ...(data.meals || {}), [m.key]: e.target.value } })}
                  >
                    <option>{m.default}</option>
                    <option>7:00 AM</option><option>7:30 AM</option><option>8:00 AM</option>
                    <option>9:00 AM</option><option>11:00 AM</option><option>1:00 PM</option>
                    <option>1:30 PM</option><option>5:00 PM</option><option>5:30 PM</option>
                    <option>8:00 PM</option><option>8:30 PM</option><option>9:00 PM</option>
                  </select>
                  <ChevronDown size={14} className="chev" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
