import { services } from '../data/services'

export default function AllServicesPage({ onSelect, onBack }) {
  return (
    <section className="section service-gallery-section">
      <div className="container">
        <button className="btn btn-secondary back-btn" onClick={onBack}>
          ← Back to Home
        </button>

        <div className="section-header">
          <p className="eyebrow">IDEA2Research</p>
          <h2>Our Services</h2>
          <p>Comprehensive research and academic support tailored for your success</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div
              className="service-gallery-card"
              key={service.slug}
              onClick={() => onSelect(service.slug)}
            >
              <div className="service-gallery-icon">
                <i className="fa-solid fa-bookmark"></i>
              </div>
              <h3>{service.title}</h3>
              <p className="service-subtitle-small">{service.subtitle}</p>
              <p className="service-summary-small">{service.summary}</p>
              <button className="btn btn-primary btn-small">
                Explore
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
