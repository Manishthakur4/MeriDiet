import { ShieldCheck, Leaf, Target, Headphones, Sprout } from 'lucide-react'

export default function FeatureStrip() {
  return (
    <>
      <div className="feature-strip">
        <div className="feature">
          <span className="ico-bg"><ShieldCheck size={18} /></span>
          <div><strong>Expert Designed</strong><span className="sub">Plans by Nutrition Experts</span></div>
        </div>
        <div className="feature">
          <span className="ico-bg"><Leaf size={18} /></span>
          <div><strong>100% Personalized</strong><span className="sub">Tailored for your body, goals & lifestyle</span></div>
        </div>
        <div className="feature">
          <span className="ico-bg"><Target size={18} /></span>
          <div><strong>Real Results</strong><span className="sub">Proven approach for real transformation</span></div>
        </div>
        <div className="feature">
          <span className="ico-bg"><Headphones size={18} /></span>
          <div><strong>Ongoing Support</strong><span className="sub">We're with you at every step</span></div>
        </div>
      </div>
      <div className="foot-note">
        <span>Takes only 5-7 minutes</span>
        <span className="sep"></span>
        <span>7 Simple Steps</span>
        <span className="sep"></span>
        <span>Lifetime of Benefits</span>
      </div>
    </>
  )
}
