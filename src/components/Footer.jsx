export default function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col footer-brand">
          <a className="brand footer-brand-link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('home') }}>
            <img src="/logo.jpeg" alt="IDEA2Research logo" className="brand-logo" />
            <span>IDEA<span className="gradient-number">2</span><span className="gradient-research">Research</span></span>
          </a>
          <p>Academic research support for students, scholars, and institutions—thesis, projects, and publications.</p>
        </div>

        <div className="footer-col footer-links-col">
          <h3 className="footer-heading">Quick Links</h3>
          <nav className="footer-links" aria-label="Footer navigation">
            <button onClick={() => onNavigate('home')} className="footer-link-button">Home</button>
            <button onClick={() => onNavigate('about')} className="footer-link-button">About</button>
            <button onClick={() => onNavigate('services')} className="footer-link-button">Services</button>
            <button onClick={() => onNavigate('contact')} className="footer-link-button">Contact</button>
          </nav>
        </div>

        <div className="footer-col footer-contact-col">
          <h3 className="footer-heading">Contact</h3>
          <p>
            <strong>Email:</strong> info.idea2research@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> +91 93638 57986
          </p>
          <div className="footer-social">
            <a href="https://www.instagram.com/idea2research/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/idea-2-research-b00479422" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.facebook.com/people/Idea2research/61591671881319/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
