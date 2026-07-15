import { services } from '../data/services'

export default function ServicePage({ slug, onBack }) {
  const service = services.find((item) => item.slug === slug)

  if (!service) {
    return null
  }

  return (
    <section className="section service-detail-section">
      <div className="container">
        <button className="btn btn-secondary back-btn" onClick={onBack}>
          ← Back to Home
        </button>

        <div className="service-card">
          <div className="service-card-header">
            <p className="eyebrow">IDEA2Research Services</p>
            <h2>{service.title}</h2>
            <p className="service-subtitle">{service.subtitle}</p>
          </div>

          <p className="service-summary">{service.summary}</p>

          <div className="service-grid">
            <div>
              <h3>Key Highlights</h3>
              <ul className="feature-list service-list">
                {service.highlights.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="service-info-card">
              <h3>How We Help</h3>
              <p>{service.details}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
