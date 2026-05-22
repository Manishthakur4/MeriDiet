import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function NavButtons({ onBack, onNext, nextLabel = 'Next Step', isLast = false, showBack = true }) {
  return (
    <div className="actions">
      {showBack ? (
        <button className="btn btn-back" onClick={onBack}>
          <ArrowLeft size={16} /> Back
        </button>
      ) : <span />}
      <button className="btn btn-primary" onClick={onNext}>
        {nextLabel} <ArrowRight size={16} />
      </button>
    </div>
  )
}
