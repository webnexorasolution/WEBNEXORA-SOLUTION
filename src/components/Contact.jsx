import { useState, useRef } from 'react';
import { Phone, MessageCircle, Mail, CheckCircle2, ArrowUpRight } from 'lucide-react';
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
            <a
              className="contact-item"
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener"
              id="contact-whatsapp"
            >
              <div className="ci-icon">
                <MessageCircle size={20} strokeWidth={2} />
              </div>
              <div className="ci-content">
                <strong>Instant WhatsApp Chat</strong>
                <span>+91 XXXXX XXXXX · Quick response (9 AM – 9 PM)</span>
              </div>
              <span className="contact-item-tag tag-lime">
                Chat ↗
              </span>
            </a>

            <a className="contact-item" href="tel:+91XXXXXXXXXX" id="contact-phone">
              <div className="ci-icon">
                <Phone size={20} strokeWidth={2} />
              </div>
              <div className="ci-content">
                <strong>Direct Client Hotline</strong>
                <span>+91 XXXXX XXXXX · Talk directly with our tech leads</span>
              </div>
              <span className="contact-item-tag">
                Call ↗
              </span>
            </a>

            <a className="contact-item" href="mailto:hello@webnexora.com" id="contact-email">
              <div className="ci-icon">
                <Mail size={20} strokeWidth={2} />
              </div>
              <div className="ci-content">
                <strong>Email Inquiries & RFP</strong>
                <span>hello@webnexora.com · Send specs & project briefs</span>
              </div>
              <span className="contact-item-tag">
                Email ↗
              </span>
            </a>
          </div>

          {/* Guaranteed SLA & Confidentiality Banner */}
          <div className="contact-sla-badge">
            <span className="sla-dot" />
            <span>Guaranteed initial response within 2 hours · 100% Confidential Consultation</span>
          </div>
        </div>

        {/* RIGHT: Form */}
        <div className="contact-form-wrap glass-card" data-aos>
          {sent ? (
            <div className="form-success">
              <div className="success-icon" style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
                <CheckCircle2 size={44} color="#10b981" strokeWidth={2} />
              </div>
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

              <button className="btn btn-primary submit-btn" type="submit" id="contact-submit-btn" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                Send Enquiry via WhatsApp <ArrowUpRight size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
