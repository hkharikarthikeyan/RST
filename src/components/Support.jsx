const supportedGroups = [
  'Undergraduate Students',
  'Postgraduate Students',
  'PhD Scholars',
  'Research Professionals',
  'Academic Institutions'
]

const trustReasons = [
  'Experienced Research Experts',
  'High Quality Documentation',
  'Confidential Support',
  'On-Time Delivery',
  'Affordable Pricing',
  'Personalized Guidance'
]

export default function Support() {
  return (
    <section className="section">
      <div className="container support-grid">
        <div>
          <p className="eyebrow">Who We Help</p>
          <h2>We Support</h2>
          <ul className="feature-list">
            {supportedGroups.map((group, idx) => (
              <li key={idx}>{group}</li>
            ))}
          </ul>
        </div>
        <div className="card trust-card">
          <p className="eyebrow">Why Clients Trust Us</p>
          <ul>
            {trustReasons.map((reason, idx) => (
              <li key={idx}>{reason}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
