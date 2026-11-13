import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Building2, 
  Target, 
  Eye, 
  Award, 
  Users2, 
  Lightbulb, 
  Layers, 
  Briefcase, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  GraduationCap, 
  ShieldCheck, 
  Globe2,
  Sparkles,
  Compass
} from 'lucide-react'

import { 
  aboutMilestones, 
  coreValues, 
  pedagogyPillars, 
  facultyMembers, 
  aboutStats 
} from '../../data/aboutData'
import './About.css'

export default function About() {
  const renderValueIcon = (icon) => {
    switch (icon) {
      case 'Layers': return <Layers size={24} className="val-icon" />
      case 'Users2': return <Users2 size={24} className="val-icon" />
      case 'Briefcase': return <Briefcase size={24} className="val-icon" />
      case 'Lightbulb': return <Lightbulb size={24} className="val-icon" />
      default: return <Award size={24} className="val-icon" />
    }
  }

  return (
    <div className="about-page">
      {/* 1. HERO SECTION */}
      <section className="about-hero">
        <div className="container about-hero-container">
          <div className="about-hero-content">
            <span className="badge badge-gold">
              <Building2 size={14} />
              Heritage & Academic Vision
            </span>
            <h1 className="about-hero-title">
              About <span className="title-accent">Ascencia Malta</span>
            </h1>
            <p className="about-hero-lead">
              A boutique European business school in Floriana, Malta — bridging traditional French academic prestige from the <strong>Collège de Paris</strong> with the dynamic, multicultural Mediterranean economy.
            </p>
            <div className="about-hero-pills">
              <span className="hero-pill"><ShieldCheck size={14} /> MFHEA Licensed 2021-008</span>
              <span className="hero-pill"><GraduationCap size={14} /> MQF Levels 5–8 Accredited</span>
              <span className="hero-pill"><Globe2 size={14} /> 50+ Global Nationalities</span>
              <span className="hero-pill"><MapPin size={14} /> Floriana Campus, Malta</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BANNER */}
      <section className="about-stats-banner">
        <div className="container">
          <div className="about-stats-grid">
            {aboutStats.map((st, i) => (
              <div className="about-stat-item" key={i}>
                <div className="about-stat-val">{st.value}</div>
                <div className="about-stat-label">{st.label}</div>
                <div className="about-stat-sub">{st.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR STORY & COLLÈGE DE PARIS HERITAGE */}
      <section className="section about-story-section">
        <div className="container">
          <div className="story-grid">
            {/* Story Text */}
            <div className="story-content">
              <span className="badge badge-primary">Institutional Heritage</span>
              <h2 className="section-title" style={{ textAlign: 'left', marginTop: '0.75rem' }}>
                French Academic Roots, Mediterranean Horizon
              </h2>
              <p className="story-paragraph">
                <strong>Ascencia Malta</strong> was founded with a singular conviction: higher education must be both academically rigorous and directly attuned to global corporate realities. As an integral member of the <strong>Collège de Paris</strong> network, our institution inherits decades of pedagogical excellence developed across France.
              </p>
              <p className="story-paragraph">
                Headquartered at <strong>23, Vincenzo Dimech Street in Floriana</strong>, our campus sits right outside the UNESCO World Heritage gates of Valletta. Malta’s status as an English-speaking European Union member provides our international students with the perfect launchpad for cross-border careers.
              </p>

              <div className="story-points">
                <div className="story-point-item">
                  <CheckCircle2 size={18} className="story-check-icon" />
                  <div>
                    <strong>Licensed & Accredited by MFHEA:</strong> Every qualification is fully recognized within the European Higher Education Area (EHEA) and Bologna process.
                  </div>
                </div>
                <div className="story-point-item">
                  <CheckCircle2 size={18} className="story-check-icon" />
                  <div>
                    <strong>Collège de Paris Alliance:</strong> Access to a network of 15+ world-class colleges, global exchange pathways, and shared academic resources.
                  </div>
                </div>
                <div className="story-point-item">
                  <CheckCircle2 size={18} className="story-check-icon" />
                  <div>
                    <strong>Industry Integration:</strong> Direct proximity to Malta’s thriving financial services, iGaming, maritime, and international tech ecosystems.
                  </div>
                </div>
              </div>
            </div>

            {/* Milestones Card */}
            <div className="milestones-card">
              <div className="milestones-header">
                <Compass size={22} className="milestone-compass" />
                <h3>Key Milestones & Identity</h3>
              </div>
              <div className="milestones-timeline">
                {aboutMilestones.map((m, idx) => (
                  <div className="milestone-row" key={idx}>
                    <div className="milestone-badge">{m.year}</div>
                    <div className="milestone-detail">
                      <h4>{m.title}</h4>
                      <p>{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MISSION & VISION */}
      <section className="section mission-vision-section">
        <div className="container">
          <div className="mission-vision-grid">
            {/* Mission */}
            <div className="mv-card mission-card">
              <div className="mv-icon-box">
                <Target size={30} />
              </div>
              <span className="mv-tag">Guiding Purpose</span>
              <h3 className="mv-title">Our Mission</h3>
              <p className="mv-text">
                To empower an international community of students with transformative, practical business education that fosters academic excellence, critical inquiry, entrepreneurial courage, and socially responsible leadership in an interconnected world.
              </p>
              <ul className="mv-list">
                <li><CheckCircle2 size={16} /> Accessible, high-caliber European education</li>
                <li><CheckCircle2 size={16} /> Real-world case studies and industry problem solving</li>
                <li><CheckCircle2 size={16} /> Cultivating ethical and sustainable business practices</li>
              </ul>
            </div>

            {/* Vision */}
            <div className="mv-card vision-card">
              <div className="mv-icon-box">
                <Eye size={30} />
              </div>
              <span className="mv-tag">Strategic Direction</span>
              <h3 className="mv-title">Our Vision</h3>
              <p className="mv-text">
                To be the foremost Mediterranean hub for applied European business education, recognized globally for educational diversity, pedagogical innovation, and our graduates' rapid career mobility into executive leadership.
              </p>
              <ul className="mv-list">
                <li><CheckCircle2 size={16} /> Fostering cross-cultural innovation in Malta</li>
                <li><CheckCircle2 size={16} /> Expanding doctoral and executive research frontiers</li>
                <li><CheckCircle2 size={16} /> Bridging academia with European corporate enterprise</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CORE VALUES - ROOTED IN DIVERSITY */}
      <section className="section values-section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-primary">Institutional Pillars</span>
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              At Ascencia Malta, our commitment to educational excellence is anchored in four dimensions of diversity.
            </p>
          </div>

          <div className="values-grid">
            {coreValues.map((val, idx) => (
              <div className="value-card" key={idx}>
                <div className="val-icon-wrap">
                  {renderValueIcon(val.icon)}
                </div>
                <span className="val-sub">{val.subtitle}</span>
                <h3 className="val-title">{val.title}</h3>
                <p className="val-desc">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PARTICIPATIVE & INNOVATIVE PEDAGOGY */}
      <section className="section pedagogy-section">
        <div className="container">
          <div className="pedagogy-header">
            <span className="badge badge-gold">Teaching Philosophy</span>
            <h2 className="section-title">A Participative & Innovative Pedagogy</h2>
            <p className="section-subtitle">
              We discard rote memorization in favor of dynamic learning methodologies that reflect how modern executive boards operate.
            </p>
          </div>

          <div className="pedagogy-grid">
            {pedagogyPillars.map((p, i) => (
              <div className="pedagogy-card" key={i}>
                <div className="pedagogy-num">{p.number}</div>
                <h3 className="pedagogy-title">{p.title}</h3>
                <p className="pedagogy-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DISTINGUISHED FACULTY & LEADERSHIP */}
      <section className="section faculty-section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-primary">Academic Mentors</span>
            <h2 className="section-title">Our Distinguished Lecturers</h2>
            <p className="section-subtitle">
              Learn directly from experienced European educators, published researchers, and active corporate advisors.
            </p>
          </div>

          <div className="faculty-grid">
            {facultyMembers.map((member, idx) => (
              <div className="faculty-card" key={idx}>
                <div className="faculty-img-wrapper">
                  <img src={member.image} alt={member.name} className="faculty-img" />
                  <div className="faculty-specialty-pill">{member.specialty}</div>
                </div>
                <div className="faculty-body">
                  <h3 className="faculty-name">{member.name}</h3>
                  <span className="faculty-role">{member.role}</span>
                  <p className="faculty-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CAMPUS IN FLORIANA */}
      <section className="section campus-info-section">
        <div className="container">
          <div className="campus-info-card">
            <div className="campus-info-content">
              <span className="badge badge-gold">Mediterranean Campus</span>
              <h2 className="campus-info-title">Life & Study at the Floriana Campus</h2>
              <p className="campus-info-text">
                Located at <strong>23, Vincenzo Dimech Street, Floriana FRN 1502, Malta</strong>, our campus combines timeless architectural charm with modern academic infrastructure. Floriana sits immediately outside the fortified walls of Valletta, offering peaceful green gardens, historic seaside bastions, and immediate access to national transport hubs.
              </p>
              
              <div className="campus-highlights-row">
                <div className="c-high-item">
                  <strong>Safe & English-Speaking</strong>
                  <span>Malta is one of Europe's safest countries with English as an official language.</span>
                </div>
                <div className="c-high-item">
                  <strong>Central Location</strong>
                  <span>5-minute walk to Valletta bus terminus connecting every corner of the island.</span>
                </div>
                <div className="c-high-item">
                  <strong>300 Sunny Days</strong>
                  <span>A healthy Mediterranean lifestyle that keeps students energized year-round.</span>
                </div>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <Link to="/contact" className="btn btn-primary">
                  <span>Contact Our Floriana Campus</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CLOSING CALL TO ACTION */}
      <section className="about-cta-section">
        <div className="container">
          <div className="about-cta-box">
            <h2>Ready to Begin Your Studies with Ascencia Malta?</h2>
            <p>
              Explore our accredited degrees ranging from Undergraduate diplomas to the executive Doctorate of Business Administration.
            </p>
            <div className="about-cta-actions">
              <Link to="/#programmes" className="btn btn-primary">
                <span>View Academic Programmes</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn-outline-white">
                <span>Get in Touch with Admissions</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
