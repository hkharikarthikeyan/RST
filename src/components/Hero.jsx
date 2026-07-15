export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="eyebrow">Research & Academic Solutions</p>
          <h1>Turn Your Research Ideas Into High-Quality Academic Work</h1>
          <p className="hero-text">
            We provide professional research guidance and technical support for students,
            scholars, researchers, and academic professionals. From selecting a research
            topic to preparing the final documentation, we help you achieve quality
            research outcomes with confidence.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              Get Research Support
            </a>
            <a className="btn btn-secondary" href="#services">
              Explore Services
            </a>
          </div>
          <ul className="feature-list">
            <li>Research Guidance</li>
            <li>Paper Writing Support</li>
            <li>Project Development</li>
            <li>Thesis Assistance</li>
          </ul>
        </div>
        <div className="hero-card">
          <h3>Why Students Choose Us</h3>
          <ul>
            <li>Structured guidance from topic selection to final delivery</li>
            <li>Expert support for UG, PG, and PhD projects</li>
            <li>Quality documentation aligned with academic standards</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
