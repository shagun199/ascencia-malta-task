import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Award, ExternalLink, ShieldCheck } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand Info */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-logo">
              <img src="/assets/logo.svg" alt="Ascencia Malta" className="footer-logo-img" />
            </Link>
            <p className="footer-description">
              Ascencia Malta is a leading European business school in Floriana, Malta. Part of the Collège de Paris network, offering MFHEA-accredited programs from MQF Level 5 to 8.
            </p>
            <div className="footer-badge">
              <ShieldCheck size={18} className="badge-icon" />
              <span>MFHEA License No: 2021-008</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-title">Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/">Home Page</Link></li>
              <li><Link to="/ascencia-malta">Ascencia Malta (About)</Link></li>
              <li><Link to="/contact">Contact & Location</Link></li>
              <li><a href="https://www.ascenciamalta.edu.mt" target="_blank" rel="noreferrer">Official Portal <ExternalLink size={12} /></a></li>
            </ul>
          </div>

          {/* Col 3: Academic Programs */}
          <div className="footer-col">
            <h4 className="footer-title">Programmes</h4>
            <ul className="footer-links">
              <li><Link to="/">Doctorate of Business (DBA)</Link></li>
              <li><Link to="/">Master of Business Admin (MBA)</Link></li>
              <li><Link to="/">MSc Master’s Degrees</Link></li>
              <li><Link to="/">Bachelor Honours Degrees</Link></li>
              <li><Link to="/">Postgraduate & Diplomas</Link></li>
            </ul>
          </div>

          {/* Col 4: Campus Contact */}
          <div className="footer-col">
            <h4 className="footer-title">Malta Campus</h4>
            <ul className="footer-contact-list">
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>23 Vincenzo Dimech Street, Floriana, FRN 1502, Malta</span>
              </li>
              <li>
                <Phone size={18} className="contact-icon" />
                <a href="tel:+35679650480">+356 7965 0480</a>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <a href="mailto:info@ascenciamalta.mt">info@ascenciamalta.mt</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Ascencia Malta Business School. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/contact">Privacy Policy</Link>
            <span>•</span>
            <Link to="/contact">Terms of Service</Link>
            <span>•</span>
            <Link to="/contact">IQA Quality Assurance</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
