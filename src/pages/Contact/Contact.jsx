import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react'
import './Contact.css'

export default function Contact() {
  return (
    <div className="contact-page">
      {/* Header Banner */}
      <section className="contact-hero">
        <div className="container">
          <span className="badge badge-primary">Get in Touch</span>
          <h1 className="contact-hero-title">Contact Ascencia Malta</h1>
          <p className="contact-hero-desc">
            We are here to answer your questions regarding admissions, visa requirements, programs, and student life in Floriana.
          </p>
        </div>
      </section>

      {/* Quick Status Box */}
      <section className="section" style={{ background: '#ffffff', textAlign: 'center' }}>
        <div className="container">
          <div className="status-box">
            <h3>Route 3: <code>/contact</code> (Contact Page)</h3>
            <p>Ready to be enriched with interactive inquiry form, validated inputs, Floriana campus map preview, and direct phone/email cards.</p>
            <div style={{ marginTop: '1.5rem' }}>
              <Link to="/" className="btn btn-secondary">
                <span>Return to Home</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
