import { useState } from 'react'

export default function ContactPage({ onBack }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Thank you! Your message has been submitted.')
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section className="section contact-page-section">
      <div className="container">
        <button className="btn btn-secondary back-btn" onClick={onBack}>
          ← Back to Home
        </button>

        <div className="section-header">
          <p className="eyebrow">Contact</p>
          <h2>Get in Touch</h2>
          <p>If you have a research requirement, send us a message and we will respond shortly.</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
          </label>

          <label>
            Email
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your email" required />
          </label>

          <label>
            Phone Number
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Your phone number" required />
          </label>

          <label>
            Message
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your message" rows="5" required />
          </label>

          <button className="btn btn-primary" type="submit">
            Send Message
          </button>
        </form>

        <div className="contact-details">
          <p>Prefer to contact us directly? Reach out via phone or email.</p>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:info.idea2research@gmail.com">info.idea2research@gmail.com</a>
          </p>
          <p>
            <strong>Phone:</strong>{' '}
            <a href="tel:+919363857986">+91 93638 57986</a>
          </p>
        </div>
      </div>
    </section>
  )
}
