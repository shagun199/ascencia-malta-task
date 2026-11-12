import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main style={{ flex: 1, minHeight: 'calc(100vh - 400px)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ascencia-malta" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Fallback to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
