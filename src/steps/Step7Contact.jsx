import { Heart, User, Phone, Mail, MapPin, ChevronDown, ShieldCheck, Sparkles, Globe, FileCheck } from 'lucide-react'

export default function Step7Contact({ data, update }) {
  return (
    <>
      <div className="section-header">
        <span className="icon-bubble" style={{ background: '#fde9ec', color: '#d04864' }}>
          <Heart size={28} />
        </span>
        <div>
          <h2>Almost done! Just a few details</h2>
          <p>We'll use this to deliver your personalized diet plan.</p>
        </div>
      </div>

      <div className="row cols-2" style={{ marginBottom: 14 }}>
        <div className="opt-card">
          <h3>Contact Information</h3>
          <div className="desc">How can we reach you?</div>

          <div className="field" style={{ marginBottom: 10 }}>
            <label>Full Name</label>
            <div className="input-wrap">
              <User size={14} className="ico" />
              <input className="input" placeholder="Enter your full name"
                value={data.fullName} onChange={(e) => update({ fullName: e.target.value })} />
            </div>
          </div>

          <div className="field" style={{ marginBottom: 10 }}>
            <label>WhatsApp Number</label>
            <div className="phone-wrap">
              <div className="code">+91 <ChevronDown size={12} /></div>
              <input
                className="ph-input"
                placeholder="Enter your WhatsApp number"
                value={data.whatsapp}
                onChange={(e) => update({ whatsapp: e.target.value })}
              />
            </div>
          </div>

          <div className="field">
            <label>Email Address <span style={{ color: '#9aa9a1', fontWeight: 500 }}>(Optional)</span></label>
            <div className="input-wrap">
              <Mail size={14} className="ico" />
              <input className="input" placeholder="Enter your email address"
                value={data.email} onChange={(e) => update({ email: e.target.value })} />
            </div>
          </div>
        </div>

        <div className="opt-card">
          <h3>Where should we send your plan?</h3>
          <div className="desc">Select your preferred option</div>

          <div className="delivery-grid" style={{ marginBottom: 12 }}>
            <div
              className={`delivery-card ${data.delivery === 'whatsapp' ? 'selected' : ''}`}
              onClick={() => update({ delivery: 'whatsapp' })}
            >
              <span className="radio" />
              <div className="ico-circle">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>
              </div>
              <h4>WhatsApp</h4>
              <p>Get your plan on WhatsApp (instantly)</p>
            </div>

            <div
              className={`delivery-card ${data.delivery === 'email' ? 'selected' : ''}`}
              onClick={() => update({ delivery: 'email' })}
            >
              <span className="radio" />
              <div className="ico-circle"><Mail size={22} /></div>
              <h4>Email</h4>
              <p>Get your plan on Email</p>
            </div>
          </div>

          <div className="privacy-note">
            <Sparkles size={14} style={{ color: '#5aa15d' }} />
            We'll send your plan within 24 hours after you complete this form.
          </div>
        </div>
      </div>

      <div className="row cols-2" style={{ marginBottom: 14 }}>
        <div className="opt-card">
          <h3>Your Location</h3>
          <div className="desc">This helps us suggest meals & ingredients easily available near you.</div>

          <div className="field" style={{ marginBottom: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <MapPin size={14} style={{ color: '#5aa15d' }} />
              <label style={{ flexShrink: 0, width: 60 }}>City</label>
              <div className="input-wrap select-wrap" style={{ flex: 1 }}>
                <select className="select no-ico" value={data.city} onChange={(e) => update({ city: e.target.value })}>
                  <option value="">Select your city</option>
                  <option>Mumbai</option><option>Delhi</option><option>Bangalore</option>
                  <option>Hyderabad</option><option>Pune</option><option>Chennai</option>
                </select>
                <ChevronDown size={14} className="chev" />
              </div>
            </div>
          </div>
          <div className="field">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <MapPin size={14} style={{ color: '#5aa15d' }} />
              <label style={{ flexShrink: 0, width: 60 }}>State</label>
              <div className="input-wrap select-wrap" style={{ flex: 1 }}>
                <select className="select no-ico" value={data.state} onChange={(e) => update({ state: e.target.value })}>
                  <option value="">Select your state</option>
                  <option>Maharashtra</option><option>Delhi</option><option>Karnataka</option>
                  <option>Telangana</option><option>Tamil Nadu</option>
                </select>
                <ChevronDown size={14} className="chev" />
              </div>
            </div>
          </div>
        </div>

        <div className="opt-card">
          <h3>Anything else you want us to know? <span style={{ color: '#9aa9a1', fontSize: 12, fontWeight: 500 }}>(Optional)</span></h3>
          <div className="desc">Share anything important we should keep in mind while creating your plan.</div>
          <div className="textarea-wrap">
            <textarea
              className="textarea no-ico"
              placeholder="e.g., I have irregular eating habits, travel frequently, prefer no onion garlic, etc."
              value={data.notes || ''}
              onChange={(e) => update({ notes: e.target.value })}
              style={{ minHeight: 84 }}
            />
            <span className="note-counter">{(data.notes || '').length}/250</span>
          </div>
        </div>
      </div>

      <div className="privacy-note" style={{ marginBottom: 0 }}>
        <ShieldCheck size={14} style={{ color: '#5aa15d' }} />
        By submitting, you agree to our <a href="#" style={{ color: '#3a7444', fontWeight: 600 }}>Privacy Policy</a> and <a href="#" style={{ color: '#3a7444', fontWeight: 600 }}>Terms & Conditions</a>.
      </div>

      <div className="trust-bar">
        <div className="trust"><Sparkles size={14} className="ico" /> Personalized for You</div>
        <div className="trust"><FileCheck size={14} className="ico" /> Scientifically Backed</div>
        <div className="trust"><ShieldCheck size={14} className="ico" /> 100% Secure</div>
        <div className="trust"><Globe size={14} className="ico" /> Made for Indian Diets & Lifestyles</div>
      </div>
    </>
  )
}
