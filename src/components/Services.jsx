import { services } from '../data/services'

export default function Services({ onSelect }) {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Services</p>
          <h2>Our Services</h2>
        </div>
        <div className="card-grid">
          {services.map((service) => (
            <article className="card" key={service.slug}>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <button className="btn btn-secondary" onClick={() => onSelect(service.slug)}>
                View Details
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
