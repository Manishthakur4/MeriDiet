import { ShieldCheck, MessageCircle, Check } from 'lucide-react'

const NAV = [
  { n: 1, title: 'Basic Details',       sub: 'Tell us about yourself' },
  { n: 2, title: 'Your Goals',          sub: 'What do you want to achieve?' },
  { n: 3, title: 'Lifestyle',           sub: 'Your daily habits' },
  { n: 4, title: 'Food Preferences',    sub: 'What do you eat & prefer?' },
  { n: 5, title: 'Health & Medical',    sub: 'Your health matters' },
  { n: 6, title: 'Budget & Convenience',sub: 'What works for you?' },
  { n: 7, title: 'Contact Details',     sub: "Let's stay in touch" },
]

export default function Sidebar({ currentStep }) {
  return (
    <aside className="sidebar">
      {currentStep === 1 ? (
        <div className="promo">
          <h2>Your Personalized<span>Journey Starts Here</span></h2>
          <div className="divider"></div>
          <p>Answer a few simple questions and our experts will create a diet plan just for you.</p>
          <div className="promo-image">🥗</div>
        </div>
      ) : (
        <div className="info-box">
          <ShieldCheck size={16} className="icon" />
          <div>Your information is safe with us. We never share your data with anyone.</div>
        </div>
      )}

      <nav className="nav">
        {NAV.map((item) => {
          const isActive = item.n === currentStep
          const isDone = item.n < currentStep
          return (
            <div key={item.n} className={`nav-item ${isActive ? 'active' : ''} ${isDone ? 'done' : ''}`}>
              <span className="nav-number">
                {isDone ? <Check size={14} /> : item.n}
              </span>
              <div>
                <div className="nav-title">{item.title}</div>
                <div className="nav-sub">{item.sub}</div>
              </div>
            </div>
          )
        })}
      </nav>

      {currentStep === 1 ? (
        <div className="info-box">
          <ShieldCheck size={16} className="icon" />
          <div>Your information is safe with us. We never share your data with anyone.</div>
        </div>
      ) : (
        <div className="help-box">
          <span className="wa"><MessageCircle size={16} /></span>
          <div>
            <strong>Need Help?</strong>
            Chat with our team on <span className="wa-link">WhatsApp</span>
          </div>
        </div>
      )}
    </aside>
  )
}
