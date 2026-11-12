import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Users, Award, BookOpen, Compass, ArrowRight } from 'lucide-react'
import './About.css'

export default function About() {
  return (
    <div className="about-page">
      {/* Header Banner */}
      <section className="about-hero">
        <div className="container">
          <span className="badge badge-gold">About Our Institution</span>
          <h1 className="about-hero-title">About Ascencia Malta</h1>
          <p className="about-hero-desc">
            A boutique European business school in Floriana, Malta — combining French academic tradition with a vibrant Mediterranean setting.
          </p>
        </div>
      </section>

      {/* Quick Status Box */}
      <section className="section" style={{ background: '#ffffff', textAlign: 'center' }}>
        <div className="container">
          <div className="status-box">
            <h3>Route 2: <code>/ascencia-malta</code> (About Us Page)</h3>
            <p>Ready to be enriched with Ascencia Malta history, mission, core values, numbers, and faculty details.</p>
            <div style={{ marginTop: '1.5rem' }}>
              <Link to="/contact" className="btn btn-primary">
                <span>Go to Contact Page</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
