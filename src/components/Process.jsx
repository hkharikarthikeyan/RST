const processSteps = [
  {
    title: '1. Requirement Discussion',
    description: 'Share your research requirement.'
  },
  {
    title: '2. Expert Consultation',
    description: 'We understand your objectives and suggest the best approach.'
  },
  {
    title: '3. Development & Documentation',
    description: 'Research implementation and documentation.'
  },
  {
    title: '4. Review & Delivery',
    description: 'Quality review before final delivery.'
  }
]

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Process</p>
          <h2>Our Process</h2>
        </div>
        <div className="process-grid">
          {processSteps.map((step, idx) => (
            <div className="process-item" key={idx}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
