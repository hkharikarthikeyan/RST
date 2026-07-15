import { useState } from 'react'

export default function Navbar({ onNavigate }) {
  return (
    <header className="topbar">
      <div className="container nav-wrap">
        <a className="brand" href="#" onClick={(e) => { e.preventDefault(); onNavigate('home') }}>
          <img src="/logo.jpeg" alt="IDEA2Research logo" className="brand-logo" />
          <span>IDEA<span className="gradient-number">2</span><span className="gradient-research">Research</span></span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <button className="nav-link-button" onClick={() => onNavigate('home')}>
            Home
          </button>
          <button className="nav-link-button" onClick={() => onNavigate('about')}>
            About
          </button>
          <button className="nav-link-button" onClick={() => onNavigate('services')}>
            Services
          </button>
          <button className="nav-link-button" onClick={() => onNavigate('contact')}>
            Contact
          </button>
        </nav>
      </div>
    </header>
  )
}
