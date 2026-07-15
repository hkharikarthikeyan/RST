export default function AboutPage({ onBack }) {
  return (
    <section className="section about-page-section">
      <div className="container">
        <button className="btn btn-secondary back-btn" onClick={onBack}>
          ← Back to Home
        </button>

        <div className="about-content">
          <div className="section-header">
            <p className="eyebrow">About Us</p>
            <h2>IDEA2Research</h2>
          </div>

          <div className="about-grid">
            <div>
              <h3>Our Mission</h3>
              <p>
                We help students and researchers simplify the research process by providing
                structured guidance, technical expertise, and quality documentation.
              </p>
            </div>

            <div>
              <h3>Our Expertise</h3>
              <p>
                Whether you are working on an undergraduate project, postgraduate thesis, or
                journal publication, our experienced team ensures your work follows academic
                standards and best practices.
              </p>
            </div>

            <div>
              <h3>Who We Serve</h3>
              <ul className="feature-list">
                <li>Undergraduate Students</li>
                <li>Postgraduate Students</li>
                <li>PhD Scholars</li>
                <li>Research Professionals</li>
                <li>Academic Institutions</li>
              </ul>
            </div>

            <div>
              <h3>Why Choose Us</h3>
              <ul className="feature-list">
                <li>Experienced Research Experts</li>
                <li>High Quality Documentation</li>
                <li>Confidential Support</li>
                <li>On-Time Delivery</li>
                <li>Affordable Pricing</li>
                <li>Personalized Guidance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
