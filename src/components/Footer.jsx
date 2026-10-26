import './Footer.css';

const year = new Date().getFullYear();

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#why-us' },
  { label: 'Our Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

const serviceLinks = [
  'Website Development',
  'E-Commerce Websites',
  'WordPress Development',
  'UI/UX Design',
  'SEO Services',
  'Digital Marketing',
];

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      {/* CTA BAR */}
      <div className="footer-cta-bar">
        <div className="footer-container">
          <div className="footer-cta-inner glass-card">
            <div>
              <h3>Ready to Build Your Website?</h3>
              <p>Tell us your idea and let's discuss the right solution for your business.</p>
            </div>
            <a
              className="btn btn-primary"
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener"
              id="footer-cta-btn"
            >
              Get a Website Quote ↗
            </a>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="footer-main">
        <div className="footer-container footer-grid">
          {/* BRAND */}
          <div className="footer-brand">
            {/* Logo mark */}
            <div className="footer-logo-wrap">
              <svg width="36" height="36" viewBox="0 0 32 32" fill="none">
                <defs>
                  <linearGradient id="flg" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#5b21f5"/>
                    <stop offset="1" stopColor="#a855f7"/>
                  </linearGradient>
                </defs>
                <rect width="32" height="32" rx="9" fill="url(#flg)"/>
                <path d="M7 10l4 12 5-8 5 8 4-12" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="footer-logo-text">Web<span>nexora</span> <span className="logo-badge">Solution</span></span>
            </div>
            <p className="footer-desc">
              Website development and digital solutions for businesses that want a
              professional, impactful and useful online presence.
            </p>
            <div className="footer-tagline">Your Vision + Our Expertise = Digital Success</div>

            {/* Socials */}
            <div className="footer-socials">
              <a className="social-link" href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" id="social-fb">
                <svg viewBox="0 0 24 24"><path d="M13.4 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.5 1.6-1.5h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.2v3.2H10V21z"/></svg>
              </a>
              <a className="social-link" href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" id="social-ig">
                <svg viewBox="0 0 24 24"><path d="M7.2 2h9.6A5.2 5.2 0 0 1 22 7.2v9.6a5.2 5.2 0 0 1-5.2 5.2H7.2A5.2 5.2 0 0 1 2 16.8V7.2A5.2 5.2 0 0 1 7.2 2zm0 2A3.2 3.2 0 0 0 4 7.2v9.6A3.2 3.2 0 0 0 7.2 20h9.6a3.2 3.2 0 0 0 3.2-3.2V7.2A3.2 3.2 0 0 0 16.8 4zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.2-3.5a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z"/></svg>
              </a>
              <a className="social-link" href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" id="social-li">
                <svg viewBox="0 0 24 24"><path d="M5.2 3a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4zM3.3 9h3.8v12H3.3zM9.5 9h3.6v1.6h.1A4 4 0 0 1 16.8 8.7c4 0 4.7 2.5 4.7 5.8V21h-3.8v-5.8c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V21H9.5z"/></svg>
              </a>
              <a className="social-link" href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" id="social-yt">
                <svg viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4L15.8 12z"/></svg>
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <nav className="footer-links" aria-label="Footer quick links">
              {quickLinks.map(l => (
                <a key={l.href} href={l.href}>
                  <span className="link-arrow">›</span>{l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="footer-heading">Our Services</h4>
            <nav className="footer-links" aria-label="Footer services">
              {serviceLinks.map(s => (
                <a key={s} href="#services">
                  <span className="link-arrow">›</span>{s}
                </a>
              ))}
            </nav>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="footer-heading">Get in Touch</h4>
            <div className="footer-contact-list">
              <a className="footer-contact" href="tel:+91XXXXXXXXXX" id="footer-phone">
                <span className="fc-icon">☎</span>
                <span>+91 XXXXX XXXXX<small>Call our team</small></span>
              </a>
              <a className="footer-contact" href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener" id="footer-wa">
                <span className="fc-icon">✆</span>
                <span>+91 XXXXX XXXXX<small>WhatsApp enquiries</small></span>
              </a>
              <div className="footer-contact">
                <span className="fc-icon">✉</span>
                <span>hello@webnexora.com<small>Send a project enquiry</small></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <div className="footer-container footer-bottom-inner">
          <p className="footer-copy">© {year} Webnexora Solution. All Rights Reserved.</p>
          <nav className="footer-legal" aria-label="Legal links">
            <a href="#home">Privacy Policy</a>
            <a href="#home">Terms &amp; Conditions</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
