import { useState, useRef } from 'react';
import {
  Phone,
  MessageCircle,
  Mail,
  CheckCircle2,
  ArrowUpRight,
  Globe,
  ShoppingBag,
  Layers,
  Palette,
  Search,
  TrendingUp,
} from 'lucide-react';
import CustomSelect from './ui/CustomSelect';
import siteConfig from '../config/site';
import './Contact.css';

const serviceOptions = [
  { value: 'Website Development', label: 'Website Development', icon: <Globe size={16} /> },
  { value: 'E-Commerce Website', label: 'E-Commerce Website', icon: <ShoppingBag size={16} /> },
  { value: 'WordPress Development', label: 'WordPress Development', icon: <Layers size={16} /> },
  { value: 'UI/UX Design', label: 'UI/UX Design', icon: <Palette size={16} /> },
  { value: 'SEO Services', label: 'SEO Services', icon: <Search size={16} /> },
  { value: 'Digital Marketing', label: 'Digital Marketing', icon: <TrendingUp size={16} /> },
];

import inquiryService from '../services/inquiryService';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [sent, setSent] = useState(false);
  const ref = useRef(null);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    inquiryService.saveInquiry({
      name: form.name,
      email: form.email,
      phone: form.phone,
      service: form.service || 'Website Development',
      message: form.message,
      source: 'Home Contact Section',
    });

    const text = `Hello ${siteConfig.name}! I'd like to discuss a project.\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\nMessage: ${form.message}`;
    const wa = siteConfig.getWhatsAppUrl(text);
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
          <div className="eyebrow">
            <span className="eyebrow-dot" /> Get in Touch
          </div>
          <h2>
            Ready to <span className="title-highlight">Build Your Website?</span>
          </h2>
          <p>
            Tell us about your idea. Let's discuss the right digital
            solution for your business — no obligations, just a great conversation.
          </p>

          <div className="contact-details">
            <a
              className="contact-item"
              href={siteConfig.getWhatsAppUrl()}
              target="_blank"
              rel="noopener"
              id="contact-whatsapp"
            >
              <div className="ci-icon">
                <MessageCircle size={20} strokeWidth={2} />
              </div>
              <div className="ci-content">
                <strong>WhatsApp</strong>
                <span>{siteConfig.contact.phone}</span>
              </div>
              <div className="contact-item-action" aria-label="Open WhatsApp">
                <ArrowUpRight size={16} strokeWidth={2.4} />
              </div>
            </a>

            <a className="contact-item" href={`tel:${siteConfig.contact.phoneRaw}`} id="contact-phone">
              <div className="ci-icon">
                <Phone size={20} strokeWidth={2} />
              </div>
              <div className="ci-content">
                <strong>Phone</strong>
                <span>{siteConfig.contact.phone}</span>
              </div>
              <div className="contact-item-action" aria-label="Call Hotline">
                <ArrowUpRight size={16} strokeWidth={2.4} />
              </div>
            </a>

            <a className="contact-item" href={`mailto:${siteConfig.contact.email}`} id="contact-email">
              <div className="ci-icon">
                <Mail size={20} strokeWidth={2} />
              </div>
              <div className="ci-content">
                <strong>Email</strong>
                <span>{siteConfig.contact.email}</span>
              </div>
              <div className="contact-item-action" aria-label="Send Email">
                <ArrowUpRight size={16} strokeWidth={2.4} />
              </div>
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
                <CustomSelect
                  id="cf-service"
                  name="service"
                  label="Service"
                  value={form.service}
                  onChange={handleChange}
                  options={serviceOptions}
                  placeholder="Select a service"
                  className="form-group"
                />
              </div>

              <div className="form-group form-group-message">
                <label htmlFor="cf-message">Message *</label>
                <textarea
                  id="cf-message"
                  name="message"
                  rows={5}
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
