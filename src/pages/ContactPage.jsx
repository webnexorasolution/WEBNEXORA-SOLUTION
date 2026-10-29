import { useState } from 'react';
import {
  Phone,
  MessageCircle,
  Mail,
  CheckCircle2,
  ArrowUpRight,
  Clock,
  Globe,
  ShoppingBag,
  Layers,
  Palette,
  Search,
  TrendingUp,
  Coins,
  Wallet,
  Sparkles,
  Rocket,
  Zap,
  Calendar,
  Hourglass,
} from 'lucide-react';
import CustomSelect from '../components/ui/CustomSelect';
import siteConfig from '../config/site';
import inquiryService from '../services/inquiryService';
import './ContactPage.css';

const servicesList = [
  { value: 'Custom Website Development', label: 'Custom Website Development', icon: <Globe size={16} /> },
  { value: 'E-Commerce Storefront', label: 'E-Commerce Storefront', icon: <ShoppingBag size={16} /> },
  { value: 'WordPress CMS Development', label: 'WordPress CMS Development', icon: <Layers size={16} /> },
  { value: 'UI/UX Design & Prototyping', label: 'UI/UX Design & Prototyping', icon: <Palette size={16} /> },
  { value: 'SEO & Performance Optimization', label: 'SEO & Performance Optimization', icon: <Search size={16} /> },
  { value: 'Digital Marketing & Growth', label: 'Digital Marketing & Growth', icon: <TrendingUp size={16} /> },
];

const budgetRanges = [
  { value: '₹25,000 – ₹50,000', label: '₹25,000 – ₹50,000', icon: <Coins size={16} /> },
  { value: '₹50,000 – ₹1,50,000', label: '₹50,000 – ₹1,50,000', icon: <Wallet size={16} /> },
  { value: '₹1,50,000 – ₹3,00,000', label: '₹1,50,000 – ₹3,00,000', icon: <Sparkles size={16} /> },
  { value: '₹3,00,000+', label: '₹3,00,000+', icon: <Rocket size={16} /> },
];

const timelineOptions = [
  { value: 'Urgent (< 2 Weeks)', label: 'Urgent (< 2 Weeks)', icon: <Zap size={16} /> },
  { value: 'Within 1 Month', label: 'Within 1 Month', icon: <Calendar size={16} /> },
  { value: '1 to 2 Months', label: '1 to 2 Months', icon: <Clock size={16} /> },
  { value: 'Flexible / Planning Ahead', label: 'Flexible / Planning Ahead', icon: <Hourglass size={16} /> },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: servicesList[0].value,
    budget: budgetRanges[1].value,
    timeline: timelineOptions[1].value,
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    inquiryService.saveInquiry({
      name: form.name,
      company: form.company,
      email: form.email,
      phone: form.phone,
      service: form.service,
      budget: form.budget,
      timeline: form.timeline,
      message: form.message,
      source: 'Contact Scope Planner',
    });

    const formatted = `*New ${siteConfig.name} Project Inquiry*
• *Name:* ${form.name}
• *Company:* ${form.company || 'N/A'}
• *Email:* ${form.email}
• *Phone:* ${form.phone || 'N/A'}
• *Service:* ${form.service}
• *Budget:* ${form.budget}
• *Timeline:* ${form.timeline}
• *Details:* ${form.message}`;

    const waUrl = siteConfig.getWhatsAppUrl(formatted);
    window.open(waUrl, '_blank', 'noopener');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <div className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content" data-aos>
            <div className="eyebrow">
              <span className="eyebrow-dot" /> Initiate Your Project
            </div>
            <h1>
              Let's Build Something{' '}
              <span className="title-highlight">Exceptional Together.</span>
            </h1>
            <p className="contact-hero-lead">
              Have an upcoming launch or want to redesign your existing website?
              Fill out the inquiry form below or reach out directly for an immediate response.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="section contact-main-section">
        <div className="container contact-page-grid">
          {/* LEFT: DIRECT INFO & GUARANTEES */}
          <div className="contact-info-col" data-aos>
            <div className="contact-info-box bento-card">
              <div className="eyebrow" style={{ marginBottom: '12px' }}>
                <span className="eyebrow-dot" /> Direct Contact
              </div>
              <h2>
                Direct Communication <span className="title-highlight">Channels.</span>
              </h2>
              <p className="info-sub">
                We believe in zero communication friction. Reach our project leads directly
                via WhatsApp, phone, or email.
              </p>

              <div className="direct-channels-list">
                <a
                  className="channel-card"
                  href={siteConfig.getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener"
                  id="cp-wa"
                >
                  <div className="channel-icon">
                    <MessageCircle size={20} strokeWidth={2} />
                  </div>
                  <div className="channel-content">
                    <strong>WhatsApp</strong>
                    <span>{siteConfig.contact.phone}</span>
                  </div>
                  <div className="channel-action-btn" aria-label="Open WhatsApp">
                    <ArrowUpRight size={15} strokeWidth={2.4} />
                  </div>
                </a>

                <a className="channel-card" href={`tel:${siteConfig.contact.phoneRaw}`} id="cp-phone">
                  <div className="channel-icon">
                    <Phone size={20} strokeWidth={2} />
                  </div>
                  <div className="channel-content">
                    <strong>Phone</strong>
                    <span>{siteConfig.contact.phone}</span>
                  </div>
                  <div className="channel-action-btn" aria-label="Call Phone">
                    <ArrowUpRight size={15} strokeWidth={2.4} />
                  </div>
                </a>

                <a className="channel-card" href={`mailto:${siteConfig.contact.email}`} id="cp-email">
                  <div className="channel-icon">
                    <Mail size={20} strokeWidth={2} />
                  </div>
                  <div className="channel-content">
                    <strong>Email</strong>
                    <span>{siteConfig.contact.email}</span>
                  </div>
                  <div className="channel-action-btn" aria-label="Send Email">
                    <ArrowUpRight size={15} strokeWidth={2.4} />
                  </div>
                </a>
              </div>

              <div className="sla-banner">
                <Clock size={15} color="#121212" strokeWidth={2.2} />
                <span>Guaranteed response within 2 business hours.</span>
              </div>
            </div>

            {/* WHAT TO EXPECT CARD */}
            <div className="expect-box bento-card" data-aos>
              <div className="eyebrow" style={{ marginBottom: '12px' }}>
                <span className="eyebrow-dot" /> 3-Step Process
              </div>
              <h3>
                What Happens <span className="title-highlight">Next?</span>
              </h3>
              <div className="expect-steps-list">
                <div className="expect-step-item">
                  <span className="step-badge">01</span>
                  <div className="step-info">
                    <strong>Discovery Review</strong>
                    <p>We analyze your business goals, target audience, and existing assets.</p>
                  </div>
                </div>

                <div className="expect-step-item">
                  <span className="step-badge">02</span>
                  <div className="step-info">
                    <strong>Strategy Session</strong>
                    <p>A focused 20-minute call to align on exact scope, tech stack, and roadmap.</p>
                  </div>
                </div>

                <div className="expect-step-item">
                  <span className="step-badge">03</span>
                  <div className="step-info">
                    <strong>Written Proposal</strong>
                    <p>A formal sprint roadmap, guaranteed fixed pricing, and delivery timeline.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: INTERACTIVE PROJECT SCOPE PLANNER */}
          <div className="contact-form-col" data-aos>
            <div className="planner-card glass-card">
              {submitted ? (
                <div className="form-success-state">
                  <div className="success-icon" style={{ display: 'flex', justifyContent: 'center', marginBottom: '14px' }}>
                    <CheckCircle2 size={48} color="#10b981" strokeWidth={2} />
                  </div>
                  <h2>Inquiry Prepared!</h2>
                  <p>
                    WhatsApp has opened with your project specifications. Our lead engineer
                    will connect with you shortly!
                  </p>
                </div>
              ) : (
                <form className="planner-form" onSubmit={handleSubmit} noValidate>
                  <div className="planner-header">
                    <div className="eyebrow" style={{ marginBottom: '12px' }}>
                      <span className="eyebrow-dot" /> Fast Scope Intake
                    </div>
                    <h3>
                      Project Scope <span className="title-highlight">Planner.</span>
                    </h3>
                    <p>Provide details to receive an exact roadmap and fixed proposal.</p>
                  </div>

                  <div className="form-row-2">
                    <div className="field-group">
                      <label htmlFor="cp-name">Full Name *</label>
                      <input
                        id="cp-name"
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="field-group">
                      <label htmlFor="cp-company">Company / Brand</label>
                      <input
                        id="cp-company"
                        type="text"
                        name="company"
                        placeholder="Acme Corp"
                        value={form.company}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="field-group">
                      <label htmlFor="cp-email">Work Email *</label>
                      <input
                        id="cp-email"
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="field-group">
                      <label htmlFor="cp-phone">Phone / WhatsApp</label>
                      <input
                        id="cp-phone"
                        type="tel"
                        name="phone"
                        placeholder="+91 XXXXX XXXXX"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <CustomSelect
                    id="cp-service"
                    name="service"
                    label="Primary Service Required"
                    value={form.service}
                    onChange={handleChange}
                    options={servicesList}
                    className="field-group"
                  />

                  <div className="form-row-2">
                    <CustomSelect
                      id="cp-budget"
                      name="budget"
                      label="Estimated Budget"
                      value={form.budget}
                      onChange={handleChange}
                      options={budgetRanges}
                      className="field-group"
                    />

                    <CustomSelect
                      id="cp-timeline"
                      name="timeline"
                      label="Desired Timeline"
                      value={form.timeline}
                      onChange={handleChange}
                      options={timelineOptions}
                      className="field-group"
                    />
                  </div>

                  <div className="field-group">
                    <label htmlFor="cp-message">Project Overview &amp; Goals *</label>
                    <textarea
                      id="cp-message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your project, target audience, and key requirements..."
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button
                    className="btn btn-primary submit-scope-btn"
                    type="submit"
                    id="cp-submit-btn"
                    style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                  >
                    Submit Project Inquiry via WhatsApp <ArrowUpRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
