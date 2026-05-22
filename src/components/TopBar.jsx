import { ShieldCheck, HelpCircle, Phone, Leaf } from 'lucide-react'

export default function TopBar() {
  return (
    <header className="topbar">
      <div className="brand">
        <div className="brand-name">
          MeriDiet <Leaf size={18} color="#5aa15d" />
        </div>
        <span className="brand-tag">Better Choices, Better You!</span>
      </div>
      <div className="top-right">
        <div className="pill">
          <ShieldCheck size={16} className="icon" /> 100% Secure & Confidential
        </div>
        <div className="pill">
          <span>Need Help?</span>
          <span className="whatsapp-icon"><Phone size={12} /></span>
          <strong>+91 98765 43210</strong>
        </div>
      </div>
    </header>
  )
}
