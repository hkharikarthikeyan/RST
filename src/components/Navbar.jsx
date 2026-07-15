import { useState } from 'react'
import { services } from '../data/services'

export default function Navbar({ onNavigate }) {
  const [open, setOpen] = useState(false)

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

          <div className="dropdown">
            <button className="nav-link-button" onClick={() => setOpen((prev) => !prev)}>
              Services <i className="fa-solid fa-chevron-down"></i>
            </button>

            {open && (
              <div className="dropdown-menu">
                {services.map((service) => (
                  <button
                    key={service.slug}
                    className="dropdown-item"
                    onClick={() => {
                      onNavigate(service.slug)
                      setOpen(false)
                    }}
                  >
                    {service.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}
