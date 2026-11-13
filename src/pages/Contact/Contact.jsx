import React, { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink, 
  MessageSquare, 
  ChevronDown, 
  Building2, 
  ShieldCheck, 
  Calendar, 
  Sparkles,
  Plane,
  Bus,
  Car
} from 'lucide-react'

import { contactChannels, departments, faqs } from '../../data/contactData'
import { programs } from '../../data/programsData'
import './Contact.css'

export default function Contact() {
  const [searchParams] = useSearchParams()
  const initialProgram = searchParams.get('program') || ''

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    program: initialProgram,
    intake: 'February 2027',
    message: '',
    agreeTerms: true
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(1)

  // Update program if URL query changes
  useEffect(() => {
    if (initialProgram) {
      setFormData(prev => ({ ...prev, program: initialProgram }))
    }
  }, [initialProgram])

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    // Clear error for field on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }))
    }
  }

  // Validate form
  const validate = () => {
    const newErrors = {}
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name.'
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.'
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 6) {
      newErrors.phone = 'Please provide a valid contact number.'
    }
    if (!formData.program) {
      newErrors.program = 'Please select a programme or inquiry topic.'
    }
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to our privacy policy to proceed.'
    }
    return newErrors
  }

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setIsSubmitting(true)

    // Simulate network submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1200)
  }

  // Reset Form
  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      program: '',
      intake: 'February 2027',
      message: '',
      agreeTerms: true
    })
    setErrors({})
    setIsSubmitted(false)
  }

  const renderChannelIcon = (icon) => {
    switch (icon) {
      case 'MapPin': return <MapPin size={26} className="channel-icon" />
      case 'Phone': return <Phone size={26} className="channel-icon" />
      case 'Mail': return <Mail size={26} className="channel-icon" />
      default: return <MessageSquare size={26} className="channel-icon" />
    }
  }

  return (
    <div className="contact-page">
      {/* 1. HERO BANNER */}
      <section className="contact-hero">
        <div className="container contact-hero-container">
          <div className="contact-hero-content">
            <span className="badge badge-gold">
              <MessageSquare size={14} />
              Admissions & Campus Inquiries
            </span>
            <h1 className="contact-hero-title">
              Contact <span className="title-accent">Ascencia Malta</span>
            </h1>
            <p className="contact-hero-desc">
              Have questions regarding admission requirements, MFHEA-accredited degrees, student visas, or campus visits in Floriana? Our academic advisors are ready to assist you.
            </p>

            <div className="contact-hero-pills">
              <span className="hero-pill"><Clock size={14} /> 24-Hour Admissions Response</span>
              <span className="hero-pill"><MapPin size={14} /> 23 Vincenzo Dimech St, Floriana</span>
              <span className="hero-pill"><ShieldCheck size={14} /> Licensed by MFHEA</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TOP THREE CONTACT CHANNEL CARDS */}
      <section className="channels-section">
        <div className="container">
          <div className="channels-grid">
            {contactChannels.map((ch, idx) => (
              <div className="channel-card" key={idx}>
                <div className="channel-icon-wrap">
                  {renderChannelIcon(ch.icon)}
                </div>
                <div className="channel-info">
                  <span className="channel-category">{ch.title}</span>
                  <h3 className="channel-value">{ch.value}</h3>
                  <p className="channel-detail">{ch.detail}</p>
                </div>
                <a 
                  href={ch.actionLink} 
                  target={ch.actionLink.startsWith('http') ? '_blank' : '_self'} 
                  rel="noreferrer" 
                  className="channel-action-link"
                >
                  <span>{ch.actionText}</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MAIN FORM & CAMPUS GUIDE (2-COLUMN) */}
      <section className="section form-and-map-section">
        <div className="container">
          <div className="form-map-grid">
            {/* Left: Contact / Inquiry Form */}
            <div className="form-column">
              <div className="form-card">
                {!isSubmitted ? (
                  <>
                    <div className="form-header">
                      <span className="eyebrow-text">Online Application & Enquiry</span>
                      <h2 className="form-title">Send Us a Message</h2>
                      <p className="form-subtitle">
                        Complete the form below to receive personalized guidance from our admissions office.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} noValidate className="contact-form">
                      {/* Name & Email Row */}
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="fullName" className="form-label">
                            Full Name <span className="req">*</span>
                          </label>
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="e.g. Alexander Wright"
                            className={`form-input ${errors.fullName ? 'input-error' : ''}`}
                          />
                          {errors.fullName && <span className="error-text">{errors.fullName}</span>}
                        </div>

                        <div className="form-group">
                          <label htmlFor="email" className="form-label">
                            Email Address <span className="req">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="alex@example.com"
                            className={`form-input ${errors.email ? 'input-error' : ''}`}
                          />
                          {errors.email && <span className="error-text">{errors.email}</span>}
                        </div>
                      </div>

                      {/* Phone & Intake Row */}
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="phone" className="form-label">
                            Phone / WhatsApp Number <span className="req">*</span>
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+356 7965 0480"
                            className={`form-input ${errors.phone ? 'input-error' : ''}`}
                          />
                          {errors.phone && <span className="error-text">{errors.phone}</span>}
                        </div>

                        <div className="form-group">
                          <label htmlFor="intake" className="form-label">
                            Intended Intake Term
                          </label>
                          <select
                            id="intake"
                            name="intake"
                            value={formData.intake}
                            onChange={handleChange}
                            className="form-select"
                          >
                            <option value="February 2027">February 2027 Intake</option>
                            <option value="June 2027">June 2027 Intake (Executive)</option>
                            <option value="October 2027">October 2027 Intake</option>
                          </select>
                        </div>
                      </div>

                      {/* Program Select */}
                      <div className="form-group">
                        <label htmlFor="program" className="form-label">
                          Programme of Interest <span className="req">*</span>
                        </label>
                        <select
                          id="program"
                          name="program"
                          value={formData.program}
                          onChange={handleChange}
                          className={`form-select ${errors.program ? 'input-error' : ''}`}
                        >
                          <option value="">-- Choose a Degree Programme --</option>
                          <option value="Doctorate of Business Administration (DBA)">
                            Doctorate of Business Administration (DBA - MQF Level 8)
                          </option>
                          <option value="Master of Business Administration (MBA)">
                            Master of Business Administration (MBA - MQF Level 7)
                          </option>
                          <option value="MSc in International Finance & FinTech">
                            MSc in International Finance & FinTech (MQF Level 7)
                          </option>
                          <option value="Bachelor in Business Administration (BBA Hons)">
                            Bachelor in Business Administration (BBA Hons - MQF Level 6)
                          </option>
                          <option value="Bachelor in Digital Marketing & Communications">
                            Bachelor in Digital Marketing & Communications (MQF Level 6)
                          </option>
                          <option value="ATHE Level 7 Postgraduate Diploma in Strategic Management">
                            ATHE Level 7 Postgraduate Diploma (Pathway to Master)
                          </option>
                          <option value="Diploma in Business & Management (MQF Level 5)">
                            Diploma in Business & Management (MQF Level 5)
                          </option>
                          <option value="General Admission & Visa Inquiry">
                            General Admission & Visa Inquiry
                          </option>
                        </select>
                        {errors.program && <span className="error-text">{errors.program}</span>}
                      </div>

                      {/* Message */}
                      <div className="form-group">
                        <label htmlFor="message" className="form-label">
                          Your Message / Specific Inquiries
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows="4"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your educational background, current qualifications, and any questions regarding admission or visa eligibility..."
                          className="form-textarea"
                        />
                      </div>

                      {/* Terms agreement */}
                      <div className="form-group-checkbox">
                        <input
                          type="checkbox"
                          id="agreeTerms"
                          name="agreeTerms"
                          checked={formData.agreeTerms}
                          onChange={handleChange}
                          className="form-checkbox"
                        />
                        <label htmlFor="agreeTerms" className="checkbox-label">
                          I agree to allow Ascencia Malta to contact me with course information and admissions guidance.
                        </label>
                      </div>
                      {errors.agreeTerms && <span className="error-text">{errors.agreeTerms}</span>}

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn btn-primary submit-btn"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner"></span>
                            <span>Submitting Inquiry...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send size={16} />
                          </>
                        )}
                      </button>
                    </form>
                  </>
                ) : (
                  /* Success Feedback Card */
                  <div className="form-success-card">
                    <div className="success-icon-wrap">
                      <CheckCircle2 size={48} className="success-icon" />
                    </div>
                    <h3 className="success-title">Thank You, {formData.fullName}!</h3>
                    <p className="success-msg">
                      Your inquiry regarding <strong>{formData.program || 'Ascencia Malta Programmes'}</strong> for the <strong>{formData.intake}</strong> has been successfully received.
                    </p>
                    <div className="success-details-box">
                      <div><strong>Confirmation Sent To:</strong> {formData.email}</div>
                      <div><strong>Estimated Response:</strong> Within 24 Hours</div>
                      <div><strong>Campus Office:</strong> Floriana, Malta (+356 7965 0480)</div>
                    </div>
                    <button onClick={handleReset} className="btn btn-outline" style={{ marginTop: '1.5rem' }}>
                      <span>Submit Another Message</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Map & Visiting Guide */}
            <div className="map-column">
              {/* Map Container */}
              <div className="map-card">
                <div className="map-header">
                  <div className="map-header-title">
                    <MapPin size={20} className="map-pin-icon" />
                    <div>
                      <h3>Floriana Campus Location</h3>
                      <span>23, Vincenzo Dimech Street, Floriana, FRN 1502, Malta</span>
                    </div>
                  </div>
                  <a
                    href="https://maps.google.com/?q=23+Vincenzo+Dimech+Street+Floriana+Malta"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline map-directions-btn"
                  >
                    <span>Directions</span>
                    <ExternalLink size={14} />
                  </a>
                </div>

                {/* Interactive Map Iframe Embed */}
                <div className="map-iframe-wrapper">
                  <iframe
                    title="Ascencia Malta Campus Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3233.093370648589!2d14.502809976378457!3d35.89574497251864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130e4526d11756ef%3A0x86b033327663fcf1!2s23%20Triq%20Vincenzo%20Dimech%2C%20Il-Floriana!5e0!3m2!1sen!2smt!4v1715000000000!5m2!1sen!2smt"
                    width="100%"
                    height="280"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              {/* Campus Hours Card */}
              <div className="info-subcard">
                <div className="subcard-header">
                  <Clock size={18} className="subcard-icon" />
                  <h4>Office & Admissions Hours</h4>
                </div>
                <div className="hours-list">
                  <div className="hours-row">
                    <span>Monday – Friday:</span>
                    <strong>08:30 AM – 05:00 PM (CET)</strong>
                  </div>
                  <div className="hours-row">
                    <span>Saturday – Sunday:</span>
                    <span className="closed-pill">Closed (Campus Tours by Appointment)</span>
                  </div>
                </div>
              </div>

              {/* Transit & Commute Info */}
              <div className="info-subcard">
                <div className="subcard-header">
                  <Building2 size={18} className="subcard-icon" />
                  <h4>Getting to Campus in Floriana</h4>
                </div>
                <ul className="transit-list">
                  <li>
                    <Bus size={17} className="transit-icon" />
                    <div>
                      <strong>Valletta Bus Terminus:</strong> 5-minute walk from the main national transit hub serving all Malta routes.
                    </div>
                  </li>
                  <li>
                    <Plane size={17} className="transit-icon" />
                    <div>
                      <strong>Malta Airport (MLA):</strong> Approx. 15 minutes by taxi or direct bus X4 to Floriana.
                    </div>
                  </li>
                  <li>
                    <Car size={17} className="transit-icon" />
                    <div>
                      <strong>Parking:</strong> MCP Multistorey Car Park and street parking along Floriana Granaries.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DEPARTMENT DIRECTORY */}
      <section className="section departments-section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-primary">Direct Inquiries</span>
            <h2 className="section-title">Department Contacts</h2>
            <p className="section-subtitle">
              Reach out directly to the specialized team handling your specific request.
            </p>
          </div>

          <div className="departments-grid">
            {departments.map((dept, i) => (
              <div className="department-card" key={i}>
                <h3 className="dept-name">{dept.role}</h3>
                <p className="dept-desc">{dept.desc}</p>
                <div className="dept-links">
                  <a href={`mailto:${dept.email}`} className="dept-link">
                    <Mail size={14} />
                    <span>{dept.email}</span>
                  </a>
                  <a href={`tel:${dept.phone}`} className="dept-link">
                    <Phone size={14} />
                    <span>{dept.phone}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE FAQS ACCORDION */}
      <section className="section faq-section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-gold">Common Queries</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Find immediate answers to questions on admissions, student visas, and accreditation.
            </p>
          </div>

          <div className="faq-container">
            {faqs.map(faq => {
              const isOpen = openFaq === faq.id
              return (
                <div className={`faq-item ${isOpen ? 'active' : ''}`} key={faq.id}>
                  <button
                    type="button"
                    className="faq-question-btn"
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-text">{faq.question}</span>
                    <ChevronDown size={18} className={`faq-chevron ${isOpen ? 'rotate' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="faq-answer-panel">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 6. CLOSING CTA BANNER */}
      <section className="contact-cta-section">
        <div className="container">
          <div className="contact-cta-card">
            <h2>Ready to Advance Your Global Business Career?</h2>
            <p>
              Join a diverse cohort of leaders at Ascencia Malta. Applications are actively being reviewed for our upcoming intake.
            </p>
            <div className="contact-cta-actions">
              <Link to="/#programmes" className="btn btn-primary">
                <span>Explore Degrees</span>
              </Link>
              <a href="tel:+35679650480" className="btn btn-outline-white">
                <Phone size={16} />
                <span>Call Admissions: +356 7965 0480</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
