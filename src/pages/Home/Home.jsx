import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  GraduationCap, 
  ArrowRight, 
  CheckCircle2, 
  BookOpen, 
  Clock, 
  Award, 
  Globe2, 
  Briefcase, 
  Compass, 
  Star, 
  ShieldCheck, 
  Calendar,
  Sparkles,
  MapPin,
  ChevronRight,
  ExternalLink,
  CheckCircle,
  Building2,
  FileCheck2
} from 'lucide-react'

import { 
  keyStats, 
  accreditationLogos, 
  whyChooseAscencia, 
  campusHighlights, 
  testimonials, 
  applicationSteps 
} from '../../data/homeData'
import { programCategories, programs } from '../../data/programsData'
import './Home.css'

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredPrograms = activeCategory === 'all'
    ? programs
    : programs.filter(p => p.category === activeCategory)

  // Map icon names to Lucide icons
  const renderIcon = (name) => {
    switch (name) {
      case 'Award': return <Award size={26} className="feature-icon" />
      case 'Briefcase': return <Briefcase size={26} className="feature-icon" />
      case 'Globe2': return <Globe2 size={26} className="feature-icon" />
      case 'Compass': return <Compass size={26} className="feature-icon" />
      default: return <GraduationCap size={26} className="feature-icon" />
    }
  }

  // Duplicate for seamless infinite marquee loop
  const marqueeLogos = [...accreditationLogos, ...accreditationLogos]

  return (
    <div className="home-page">
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-grid">
            {/* Left Content */}
            <div className="hero-text-block">
              <div className="hero-badge">
                <ShieldCheck size={16} className="badge-icon-shield" />
                <span>MFHEA Licensed & Accredited • Floriana, Malta</span>
              </div>

              <h1 className="hero-main-title">
                European Excellence in <span className="title-gradient">Business Education</span>
              </h1>

              <p className="hero-subtext">
                Welcome to <strong>Ascencia Malta</strong>, an accredited European business school and proud member of the <strong>Collège de Paris</strong> network. We offer internationally recognized qualifications from <strong>MQF Level 5 to Doctorate (DBA Level 8)</strong> taught entirely in English in the heart of the Mediterranean.
              </p>

              {/* Trust bullets */}
              <div className="hero-trust-list">
                <div className="trust-item">
                  <CheckCircle2 size={18} className="trust-icon" />
                  <span>100% English Medium</span>
                </div>
                <div className="trust-item">
                  <CheckCircle2 size={18} className="trust-icon" />
                  <span>Bologna ECTS Credits</span>
                </div>
                <div className="trust-item">
                  <CheckCircle2 size={18} className="trust-icon" />
                  <span>20 hrs/week Student Work Rights</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="hero-cta-group">
                <a href="#programmes" className="btn btn-primary hero-btn">
                  <span>Explore Programmes</span>
                  <ArrowRight size={17} />
                </a>
                <Link to="/contact" className="btn btn-outline-white hero-btn">
                  <span>Apply for Admission</span>
                </Link>
              </div>

              {/* Intake status ticker */}
              <div className="hero-intake-badge">
                <Calendar size={15} />
                <span>Upcoming Intakes: <strong>February & October 2026/2027</strong> — Applications Open</span>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="hero-visual-block">
              <div className="hero-card-wrapper">
                <div className="hero-image-frame">
                  <img 
                    src="/assets/hero-student.png" 
                    alt="Ascencia Malta Business School Students" 
                    className="hero-main-img" 
                  />
                </div>

                {/* Floating Badge 1 - Top Right */}
                <div className="floating-badge badge-top-right">
                  <div className="badge-icon-box gold-box">
                    <Award size={20} />
                  </div>
                  <div>
                    <span className="badge-label">Accreditation</span>
                    <span className="badge-value">MQF Level 8 Terminal</span>
                  </div>
                </div>

                {/* Floating Badge 2 - Bottom Left */}
                <div className="floating-badge badge-bottom-left">
                  <div className="badge-icon-box navy-box">
                    <Globe2 size={20} />
                  </div>
                  <div>
                    <span className="badge-label">Global Community</span>
                    <span className="badge-value">50+ Nationalities</span>
                  </div>
                </div>

                {/* Floating Badge 3 - Bottom Right */}
                <div className="floating-badge badge-bottom-right">
                  <div className="badge-icon-box red-box">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <span className="badge-label">Graduate Outcome</span>
                    <span className="badge-value">94% Placement</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ELEVATED ACCREDITATIONS & GLOBAL PARTNERS SECTION */}
      <section className="accreditations-section">
        <div className="container">
          <div className="accreditations-header">
            <span className="eyebrow-text">Quality Assurance & Global Accreditations</span>
            <h3 className="accreditations-headline">Benchmarked Against European & Global Standards</h3>
            <p className="accreditations-intro">
              Our academic qualifications are rigorously licensed by the Malta Further & Higher Education Authority (MFHEA) and recognized throughout the European Higher Education Area (EHEA).
            </p>
          </div>
        </div>

        {/* Seamless Smooth Marquee Carousel */}
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {marqueeLogos.map((item, idx) => (
              <div className="marquee-logo-card" key={idx} title={item.desc}>
                <img src={item.src} alt={item.name} className="marquee-logo-img" />
                <span className="marquee-logo-caption">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges Bar */}
        <div className="container">
          <div className="accreditation-trust-bar">
            <div className="trust-badge-item">
              <ShieldCheck size={20} className="trust-badge-icon" />
              <div>
                <strong>MFHEA Licensed</strong>
                <span>License No: 2021-008</span>
              </div>
            </div>
            <div className="trust-badge-divider"></div>

            <div className="trust-badge-item">
              <FileCheck2 size={20} className="trust-badge-icon" />
              <div>
                <strong>MQF & EQF Aligned</strong>
                <span>Levels 5 to 8 Recognized</span>
              </div>
            </div>
            <div className="trust-badge-divider"></div>

            <div className="trust-badge-item">
              <Building2 size={20} className="trust-badge-icon" />
              <div>
                <strong>Collège de Paris</strong>
                <span>International University Network</span>
              </div>
            </div>
            <div className="trust-badge-divider"></div>

            <div className="trust-badge-item">
              <Globe2 size={20} className="trust-badge-icon" />
              <div>
                <strong>Bologna Process</strong>
                <span>Transferable ECTS Credits</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. KEY STATS METRICS */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {keyStats.map((stat, idx) => (
              <div className="stat-card" key={idx}>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-detail">{stat.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY ASCENCIA MALTA */}
      <section className="section why-section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-primary">Institutional Advantages</span>
            <h2 className="section-title">Why Choose Ascencia Malta?</h2>
            <p className="section-subtitle">
              Combining French academic heritage from the Collège de Paris with the booming Mediterranean economy of Malta.
            </p>
          </div>

          <div className="why-grid">
            {whyChooseAscencia.map((item, idx) => (
              <div className="why-card" key={idx}>
                <div className="why-card-top">
                  <div className="why-icon-wrap">
                    {renderIcon(item.icon)}
                  </div>
                  <span className="why-badge">{item.badge}</span>
                </div>
                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE ACADEMIC PROGRAMMES EXPLORER */}
      <section className="section programmes-section" id="programmes">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-gold">Official Curriculum</span>
            <h2 className="section-title">Explore Our Academic Degrees</h2>
            <p className="section-subtitle">
              Choose from fully accredited undergraduate, postgraduate, and terminal doctorate qualifications designed for international careers.
            </p>

            {/* Filter Tabs */}
            <div className="category-filters">
              {programCategories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Programmes Grid */}
          <div className="programmes-grid">
            {filteredPrograms.map(prog => (
              <div className="program-card" key={prog.id}>
                {/* Program Card Header with Image */}
                <div className="program-image-wrap">
                  <img src={prog.image} alt={prog.title} className="program-img" />
                  <span className="program-tag">{prog.tag}</span>
                  <span className="program-level-pill">{prog.level}</span>
                </div>

                {/* Program Card Body */}
                <div className="program-card-content">
                  <h3 className="program-title">{prog.title}</h3>
                  <p className="program-desc">{prog.description}</p>

                  {/* Metadata Chips */}
                  <div className="program-meta-chips">
                    <span className="meta-chip">
                      <Clock size={13} />
                      {prog.duration}
                    </span>
                    <span className="meta-chip">
                      <Award size={13} />
                      {prog.credits}
                    </span>
                    <span className="meta-chip">
                      <MapPin size={13} />
                      {prog.mode}
                    </span>
                  </div>

                  {/* Program Highlights */}
                  <div className="program-highlights">
                    {prog.highlights.map((h, i) => (
                      <div className="highlight-item" key={i}>
                        <CheckCircle2 size={14} className="highlight-check" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="program-card-footer">
                    <Link to={`/contact?program=${encodeURIComponent(prog.title)}`} className="btn btn-secondary program-cta">
                      <span>Enquire for {prog.id.toUpperCase()}</span>
                      <ChevronRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FLORIANA CAMPUS & STUDENT LIFE */}
      <section className="section campus-section">
        <div className="container">
          <div className="campus-grid-layout">
            <div className="campus-intro-block">
              <span className="badge badge-primary">Campus in Floriana</span>
              <h2 className="section-title" style={{ textAlign: 'left', marginTop: '1rem' }}>
                Study in Historic Malta, Steps from Valletta
              </h2>
              <p className="campus-lead">
                Ascencia Malta’s campus is located in <strong>Floriana</strong>, an iconic architectural suburb situated immediately outside the fortified walls of Valletta, Malta’s capital city.
              </p>
              <ul className="campus-benefits-list">
                <li>
                  <CheckCircle2 size={18} className="benefit-icon" />
                  <div>
                    <strong>Prime European Hub:</strong> Malta is an English-speaking EU nation known for high safety, 300 days of sunshine, and economic dynamism.
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={18} className="benefit-icon" />
                  <div>
                    <strong>Thriving Corporate Ecosystem:</strong> Malta hosts global headquarters for gaming, maritime finance, blockchain, and tech enterprises.
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={18} className="benefit-icon" />
                  <div>
                    <strong>Collaborative Learning:</strong> Small student-to-lecturer ratios fostering meaningful dialogue, practical teamwork, and individualized academic attention.
                  </div>
                </li>
              </ul>

              <div style={{ marginTop: '2rem' }}>
                <Link to="/ascencia-malta" className="btn btn-outline">
                  <span>Learn More About Ascencia Malta</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Visual Photo Grid */}
            <div className="campus-visual-grid">
              {campusHighlights.map((facility, i) => (
                <div className="campus-card" key={i}>
                  <img src={facility.image} alt={facility.title} className="campus-img" />
                  <div className="campus-card-overlay">
                    <h4>{facility.title}</h4>
                    <p>{facility.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. STUDENT TESTIMONIALS */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-gold">Student Voices</span>
            <h2 className="section-title">What Our Students Say</h2>
            <p className="section-subtitle">
              Hear directly from graduates and current learners across our international cohorts.
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((t, idx) => (
              <div className="testimonial-card" key={idx}>
                <div className="testimonial-stars">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="var(--color-gold)" color="var(--color-gold)" />
                  ))}
                </div>
                <p className="testimonial-quote">"{t.quote}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar-initials">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="author-details">
                    <h4 className="author-name">{t.name}</h4>
                    <span className="author-programme">{t.program}</span>
                    <span className="author-nationality">{t.nationality}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. ADMISSION PROCESS TIMELINE */}
      <section className="section timeline-section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-primary">How to Join Us</span>
            <h2 className="section-title">Simple 4-Step Admissions</h2>
            <p className="section-subtitle">
              Our dedicated international admissions office guides you through every step of enrollment and visa processing.
            </p>
          </div>

          <div className="timeline-grid">
            {applicationSteps.map((step, idx) => (
              <div className="timeline-card" key={idx}>
                <div className="step-number">{step.step}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. HIGH-IMPACT CALL TO ACTION */}
      <section className="home-cta-section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <span className="cta-badge">Admissions Now Open</span>
              <h2 className="cta-title">Begin Your European Academic Journey in Malta</h2>
              <p className="cta-text">
                Join Ascencia Malta to obtain an accredited European qualification that elevates your leadership trajectory. Our admissions advisors are ready to review your profile.
              </p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-primary cta-btn">
                  <span>Apply Online Today</span>
                  <ArrowRight size={17} />
                </Link>
                <Link to="/contact" className="btn btn-outline-white cta-btn">
                  <span>Request Course Brochure</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
