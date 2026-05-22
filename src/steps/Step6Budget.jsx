import { Wallet, ChefHat, ShoppingBag, Clock, Users, ShoppingCart, ChevronDown, Check } from 'lucide-react'

const BUDGETS = [
  { k: 'u500', l: 'Under ₹500 / month' },
  { k: '5-1k', l: '₹500 – ₹1,000 / month' },
  { k: '1k-2k', l: '₹1,000 – ₹2,000 / month', popular: true },
  { k: '2k-3k', l: '₹2,000 – ₹3,000 / month' },
  { k: 'a3k', l: 'Above ₹3,000 / month' },
]

const MEAL_PREFS = [
  { k: 'home', l: 'Home Cooked', sub: '(Fresh Meals)', icon: '🍲' },
  { k: 'prep', l: 'Meal Prep / Batch Cooking', icon: '🥘' },
  { k: 'ready', l: 'Ready to Eat', sub: '(Healthy Options)', icon: '🥗' },
  { k: 'app', l: 'Food Delivery Apps', icon: '🛵' },
]

const TIME_OPTS = ['Less than 30 minutes', '30 – 60 minutes', '1 – 2 hours', 'More than 2 hours']

const COOK_HELP = [
  { k: 'self', l: 'I cook myself', icon: '👤' },
  { k: 'help', l: 'Someone helps me', icon: '👥' },
  { k: 'ft', l: 'Full-time house help', icon: '🧑‍🍳' },
]

export default function Step6Budget({ data, update }) {
  const togglePref = (k) => {
    const s = new Set(data.mealPlanPrefs || [])
    if (s.has(k)) s.delete(k); else s.add(k)
    update({ mealPlanPrefs: Array.from(s) })
  }

  return (
    <>
      <div className="section-header">
        <span className="icon-bubble" style={{ background: '#fef4e6', color: '#c98a2c' }}>
          <Wallet size={28} />
        </span>
        <div>
          <h2>Let's plan what works for you</h2>
          <p>This helps us create a plan that fits your budget and lifestyle.</p>
        </div>
      </div>

      <div className="row cols-3" style={{ marginBottom: 14 }}>
        <div className="opt-card">
          <h3>What is your budget for this plan?</h3>
          <div className="desc">Choose the range that works best for you.</div>
          <div className="budget-list">
            {BUDGETS.map((b) => (
              <div
                key={b.k}
                className={`budget-item ${data.budget === b.k ? 'selected' : ''}`}
                onClick={() => update({ budget: b.k })}
              >
                <span className="radio-circle"><span className="dot" /></span>
                {b.l}
                {b.popular && <span className="tag-pop">Most Popular</span>}
              </div>
            ))}
          </div>
        </div>

        <div className="opt-card">
          <h3>How do you prefer your meals?</h3>
          <div className="desc">Select all that apply.</div>
          <div className="meal-pref-grid">
            {MEAL_PREFS.map((m) => (
              <div
                key={m.k}
                className={`meal-pref-card ${data.mealPlanPrefs?.includes(m.k) ? 'selected' : ''}`}
                onClick={() => togglePref(m.k)}
              >
                <span className="check">{data.mealPlanPrefs?.includes(m.k) && <Check size={10} />}</span>
                <div className="ico">{m.icon}</div>
                <div className="name">{m.l}{m.sub && <><br /><span style={{ color: '#9aa9a1', fontWeight: 400 }}>{m.sub}</span></>}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="opt-card">
          <h3>How much time can you spend on preparing meals?</h3>
          <div className="desc">Select one option.</div>
          <div className="radio-list">
            {TIME_OPTS.map((t) => (
              <label key={t} className={`radio-row ${data.prepTime === t ? 'selected' : ''}`} onClick={() => update({ prepTime: t })}>
                <span className="radio-circle"><span className="dot" /></span>
                {t}
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="row cols-3" style={{ marginBottom: 14 }}>
        <div className="opt-card">
          <h3>Grocery Shopping Preference</h3>
          <div className="desc">How do you usually shop for groceries?</div>
          <div className="input-wrap select-wrap">
            <ShoppingCart size={14} className="ico" />
            <select className="select" value={data.grocery} onChange={(e) => update({ grocery: e.target.value })}>
              <option>Online (Instamart, BigBasket, etc.)</option>
              <option>Local market</option>
              <option>Supermarket</option>
              <option>Mixed</option>
            </select>
            <ChevronDown size={16} className="chev" />
          </div>
        </div>

        <div className="opt-card">
          <h3>Any cooking support at home?</h3>
          <div className="desc">Select the option that applies.</div>
          <div className="cook-help-grid">
            {COOK_HELP.map((c) => (
              <div
                key={c.k}
                className={`meal-pref-card ${data.cookHelp === c.k ? 'selected' : ''}`}
                onClick={() => update({ cookHelp: c.k })}
              >
                <span className="check">{data.cookHelp === c.k && <Check size={10} />}</span>
                <div className="ico">{c.icon}</div>
                <div className="name">{c.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="opt-card">
          <h3>Any other preferences? <span style={{ color: '#9aa9a1', fontSize: 12, fontWeight: 500 }}>(Optional)</span></h3>
          <div className="desc">Tell us anything else that we should keep in mind while planning your diet.</div>
          <div className="textarea-wrap">
            <textarea
              className="textarea no-ico"
              placeholder="e.g., I travel frequently, eat out on weekends, religious fasting, etc."
              value={data.otherPrefs || ''}
              onChange={(e) => update({ otherPrefs: e.target.value })}
            />
            <span className="note-counter">{(data.otherPrefs || '').length}/250</span>
          </div>
        </div>
      </div>
    </>
  )
}
