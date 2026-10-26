import { useState, useRef } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [sent, setSent] = useState(false);
  const ref = useRef(null);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const wa = `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(
      `Hello Webnexora Solution! I'd like to discuss a project.\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\nMessage: ${form.message}`
    )}`;
    window.open(wa, '_blank', 'noopener');
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section className="section contact-section" id="contact" ref={ref}>
      <div className="contact-orb orb" />
      <div className="contact-orb-2 orb" />

      <div className="container contact-grid">
        {/* LEFT: Info */}
        <div className="contact-info" data-aos>
          <div className="eyebrow">Get in Touch</div>
          <h2>Ready to Build Your Website?</h2>
          <p>
            Tell us about your idea. Let's discuss the right digital
            solution for your business — no obligations, just a great conversation.
          </p>

          <div className="contact-details">
            <a className="contact-item" href="tel:+91XXXXXXXXXX" id="contact-phone">
              <div className="ci-icon">☎</div>
              <div>
                <strong>Call Us</strong>
                <span>+91 XXXXX XXXXX</span>
              </div>
            </a>
            <a className="contact-item" href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener" id="contact-whatsapp">
              <div className="ci-icon">✆</div>
              <div>
                <strong>WhatsApp</strong>
                <span>+91 XXXXX XXXXX</span>
              </div>
            </a>
            <div className="contact-item">
              <div className="ci-icon">✉</div>
              <div>
                <strong>Email Us</strong>
                <span>hello@webnexora.com</span>
              </div>
            </div>
          </div>

          {/* Quick action buttons */}
          <div className="contact-actions">
            <a
              className="btn btn-primary"
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener"
              id="contact-wa-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a9.8 9.8 0 0 0-8.4 14.8L2.3 22l5.4-1.4A10 10 0 1 0 12 2zm0 2a7.8 7.8 0 0 1 0 15.6 7.7 7.7 0 0 1-3.8-1l-.4-.2-3.2.8.8-3.1-.3-.5A7.8 7.8 0 0 1 12 4z"/>
              </svg>
              Chat on WhatsApp
            </a>
            <a className="btn btn-outline" href="tel:+91XXXXXXXXXX" id="contact-call-btn">
              Call Now
            </a>
          </div>
        </div>

        {/* RIGHT: Form */}
        <div className="contact-form-wrap glass-card" data-aos>
          {sent ? (
            <div className="form-success">
              <div className="success-icon">🎉</div>
              <h3>Opening WhatsApp!</h3>
              <p>We'll be in touch shortly. Thank you for reaching out!</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <h3>Send a Project Enquiry</h3>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="cf-name">Full Name *</label>
                  <input
                    id="cf-name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cf-email">Email *</label>
                  <input
                    id="cf-email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="cf-phone">Phone</label>
                  <input
                    id="cf-phone"
                    type="tel"
                    name="phone"
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cf-service">Service</label>
                  <select id="cf-service" name="service" value={form.service} onChange={handleChange}>
                    <option value="">Select a service</option>
                    <option>Website Development</option>
                    <option>E-Commerce Website</option>
                    <option>WordPress Development</option>
                    <option>UI/UX Design</option>
                    <option>SEO Services</option>
                    <option>Digital Marketing</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="cf-message">Message *</label>
                <textarea
                  id="cf-message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your project..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button className="btn btn-primary submit-btn" type="submit" id="contact-submit-btn">
                Send Enquiry via WhatsApp ↗
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
