import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, GraduationCap, Award, Globe, CheckCircle } from 'lucide-react'
import './Home.css'

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Placeholder Section */}
      <section className="home-hero">
        <div className="container hero-container">
          <div className="hero-content">
            <span className="badge badge-primary">
              <GraduationCap size={14} />
              MFHEA Accredited • Malta, Europe
            </span>
            <h1 className="hero-title">
              Excellence in European <span className="highlight-text">Business Education</span>
            </h1>
            <p className="hero-description">
              Welcome to Ascencia Malta, a member of the prestigious Collège de Paris. Empowering international leaders with MQF Level 5 to Level 8 accredited degree programmes.
            </p>
            <div className="hero-actions">
              <Link to="/ascencia-malta" className="btn btn-secondary">
                <span>Explore Ascencia Malta</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn-primary">
                <span>Contact Admissions</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Route Status Banner */}
      <section className="section" style={{ background: '#ffffff', textAlign: 'center' }}>
        <div className="container">
          <div className="status-box">
            <h3>Route 1: <code>/</code> (Home Page)</h3>
            <p>Ready to be expanded with full hero, program explorer, accreditations, and testimonials.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
