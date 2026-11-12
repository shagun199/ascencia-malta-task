import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Menu, X, ArrowRight } from 'lucide-react'
import './Navbar.css'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)
  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <header className="site-header">
      {/* Top Utility Bar */}
      <div className="top-bar">
        <div className="container top-bar-container">
          <div className="top-bar-info">
            <a href="tel:+35679650480" className="top-bar-link">
              <Phone size={13} />
              <span>+356 7965 0480</span>
            </a>
            <span className="top-bar-divider">•</span>
            <a href="mailto:info@ascenciamalta.mt" className="top-bar-link">
              <Mail size={13} />
              <span>info@ascenciamalta.mt</span>
            </a>
            <span className="top-bar-divider">•</span>
            <span className="top-bar-text">
              <MapPin size={13} />
              <span>Floriana, Malta</span>
            </span>
          </div>

          <div className="top-bar-accreditation">
            <span className="accreditation-pill">MFHEA Licensed & Accredited</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="main-nav">
        <div className="container nav-container">
          {/* Logo */}
          <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
            <img src="/assets/logo.svg" alt="Ascencia Malta Business School" className="logo-img" />
          </Link>

          {/* Desktop Nav Links */}
          <ul className="nav-links">
            <li>
              <NavLink 
                to="/" 
                end 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/ascencia-malta" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Ascencia Malta
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Right Action */}
          <div className="nav-actions">
            <Link to="/contact" className="btn btn-primary nav-cta">
              <span>Apply Now</span>
              <ArrowRight size={16} />
            </Link>

            {/* Mobile Hamburger Button */}
            <button 
              className="mobile-toggle" 
              onClick={toggleMobileMenu} 
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <ul className="mobile-links">
              <li>
                <NavLink 
                  to="/" 
                  end 
                  onClick={closeMobileMenu}
                  className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/ascencia-malta" 
                  onClick={closeMobileMenu}
                  className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}
                >
                  Ascencia Malta
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  onClick={closeMobileMenu}
                  className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}
                >
                  Contact
                </NavLink>
              </li>
              <li className="mobile-cta-item">
                <Link to="/contact" onClick={closeMobileMenu} className="btn btn-primary" style={{ width: '100%' }}>
                  <span>Apply Now</span>
                  <ArrowRight size={16} />
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
