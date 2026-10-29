import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Mail, ArrowUpRight, Lock, Sparkles, ShieldCheck } from 'lucide-react';
import siteConfig from '../config/site';
import './Footer.css';

const year = new Date().getFullYear();

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Agency', path: '/about' },
  { label: 'Our Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Our Process', path: '/process' },
  { label: 'Get in Touch', path: '/contact' },
];

const serviceLinks = [
  { label: 'Website Development', path: '/services' },
  { label: 'E-Commerce Solutions', path: '/services' },
  { label: 'WordPress Development', path: '/services' },
  { label: 'UI/UX Design Systems', path: '/services' },
  { label: 'SEO & Performance Tuning', path: '/services' },
  { label: 'Digital Growth Marketing', path: '/services' },
];

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      {/* ELEVATED CTA BAR */}
      <div className="footer-cta-bar">
        <div className="footer-container">
          <div className="footer-cta-inner glass-card">
            <div>
              <h3>Ready to Build Your Next Digital Project?</h3>
              <p>Discuss your goals with our engineering team and receive a comprehensive roadmap.</p>
            </div>
            <Link
              className="btn btn-primary footer-btn"
              to="/contact"
              id="footer-cta-btn"
            >
              Get a Website Quote <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="footer-main">
        <div className="footer-container footer-grid">
          {/* BRAND COLUMN */}
          <div className="footer-brand">
            <Link className="footer-logo-wrap" to="/">
              <span className="footer-logo-icon">
                <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
                  <rect width="32" height="32" rx="10" fill="#121212" />
                  <path
                    d="M8 11L12 21L16 13L20 21L24 11"
                    stroke="#EEFD44"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="footer-logo-text">
                Webnexora <span className="footer-logo-badge">Solution</span>
              </span>
            </Link>

            <div className="footer-eng-chip">
              <span className="eng-dot" /> Full-Cycle Web Engineering &amp; Growth Studio
            </div>

            <p className="footer-desc">
              Engineering <strong className="text-highlight">high-converting corporate web architectures</strong>,
              scalable headless web applications, and bespoke digital flagship experiences with zero technical debt.
            </p>

            {/* ONE-LINED TAGLINE PILL */}
            <div className="footer-tagline-wrap">
              <div className="footer-tagline">
                <Sparkles size={11} className="tagline-sparkle" />
                <span>{siteConfig.tagline}</span>
              </div>
            </div>

            {/* Socials */}
            <div className="footer-socials">
              <a className="social-link" href={siteConfig.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24"><path d="M13.4 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.5 1.6-1.5h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.2v3.2H10V21z"/></svg>
              </a>
              <a className="social-link" href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24"><path d="M7.2 2h9.6A5.2 5.2 0 0 1 22 7.2v9.6a5.2 5.2 0 0 1-5.2 5.2H7.2A5.2 5.2 0 0 1 2 16.8V7.2A5.2 5.2 0 0 1 7.2 2zm0 2A3.2 3.2 0 0 0 4 7.2v9.6A3.2 3.2 0 0 0 7.2 20h9.6a3.2 3.2 0 0 0 3.2-3.2V7.2A3.2 3.2 0 0 0 16.8 4zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.2-3.5a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z"/></svg>
              </a>
              <a className="social-link" href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24"><path d="M5.2 3a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4zM3.3 9h3.8v12H3.3zM9.5 9h3.6v1.6h.1A4 4 0 0 1 16.8 8.7c4 0 4.7 2.5 4.7 5.8V21h-3.8v-5.8c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V21H9.5z"/></svg>
              </a>
              <a className="social-link" href={siteConfig.socials.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4L15.8 12z"/></svg>
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <nav className="footer-links-grid" aria-label="Footer quick links">
              {quickLinks.map((l) => (
                <Link key={l.path} to={l.path} className="footer-nav-item">
                  <span className="fni-dot" />
                  <span className="fni-label">{l.label}</span>
                  <ArrowUpRight size={13} className="fni-arrow" />
                </Link>
              ))}
            </nav>
          </div>

          {/* SERVICES */}
          <div className="footer-col">
            <h4 className="footer-heading">Services</h4>
            <nav className="footer-links-grid" aria-label="Footer services">
              {serviceLinks.map((s) => (
                <Link key={s.label} to={s.path} className="footer-nav-item">
                  <span className="fni-dot" />
                  <span className="fni-label">{s.label}</span>
                  <ArrowUpRight size={13} className="fni-arrow" />
                </Link>
              ))}
            </nav>
          </div>

          {/* CONTACT INFO (Executive Channel Cards) */}
          <div className="footer-col">
            <h4 className="footer-heading">Get in Touch</h4>
            <div className="footer-contact-list">
              <a className="footer-contact-card" href={`tel:${siteConfig.contact.phoneRaw}`} id="footer-phone">
                <div className="fcc-icon-wrap fcc-icon-dark">
                  <Phone size={15} strokeWidth={2.2} />
                </div>
                <div className="fcc-details">
                  <span className="fcc-val">{siteConfig.contact.phone}</span>
                  <span className="fcc-sub">Direct Client Hotline</span>
                </div>
              </a>

              <a className="footer-contact-card fcc-card-wa" href={siteConfig.getWhatsAppUrl()} target="_blank" rel="noopener" id="footer-wa">
                <div className="fcc-icon-wrap fcc-icon-wa">
                  <MessageCircle size={15} strokeWidth={2.2} />
                </div>
                <div className="fcc-details">
                  <div className="fcc-title-row">
                    <span className="fcc-val">{siteConfig.contact.phone}</span>
                    <span className="fcc-live-pill">
                      <span className="live-pulse-dot" /> Live
                    </span>
                  </div>
                  <span className="fcc-sub">Instant WhatsApp Chat</span>
                </div>
              </a>

              <a className="footer-contact-card" href={`mailto:${siteConfig.contact.email}`} id="footer-email">
                <div className="fcc-icon-wrap fcc-icon-cyan">
                  <Mail size={15} strokeWidth={2.2} />
                </div>
                <div className="fcc-details">
                  <span className="fcc-val">{siteConfig.contact.email}</span>
                  <span className="fcc-sub">Proposal &amp; RFP Desk</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR (Elite Studio Signature Bar) */}
      <div className="footer-bottom">
        <div className="footer-container footer-bottom-inner">
          <div className="footer-copyright-wrap">
            <p className="footer-copyright">© {year} Webnexora Solution. All rights reserved.</p>
            <div className="footer-status-pill">
              <span className="status-ping-dot" />
              <span>All Systems Operational</span>
            </div>
          </div>

          <div className="footer-legal">
            <Link to="/privacy" className="footer-legal-link">Privacy Policy</Link>
            <span className="footer-sep">·</span>
            <Link to="/terms" className="footer-legal-link">Terms of Service</Link>
            <span className="footer-sep">·</span>
            <Link to="/contact" className="footer-legal-link">Support</Link>
            <span className="footer-sep">·</span>
            <Link to="/admin" className="footer-admin-btn" title="Agency Staff Portal" id="footer-admin-link">
              <Lock size={11} strokeWidth={2.4} />
              <span>Admin Console</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
