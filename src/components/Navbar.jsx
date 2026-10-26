import { useState, useEffect } from 'react';
import './Navbar.css';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setOpen(false);
    setActive(href.replace('#', ''));
  };

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <a className="nav-logo" href="#home" aria-label="Webnexora Solution Home">
          <span className="logo-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <defs>
                <linearGradient id="lg1" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#5b21f5"/>
                  <stop offset="1" stopColor="#a855f7"/>
                </linearGradient>
              </defs>
              <rect width="32" height="32" rx="9" fill="url(#lg1)"/>
              <path d="M7 10l4 12 5-8 5 8 4-12" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span className="logo-text">Webnexora <span>Solution</span></span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className={`nav-link${active === l.href.replace('#','') ? ' active' : ''}`}
              onClick={() => handleNav(l.href)}>{l.label}</a>
          ))}
        </nav>

        <a className="nav-cta btn btn-primary" href="https://wa.me/91XXXXXXXXXX"
          target="_blank" rel="noopener" id="nav-cta-btn">
          Get a Free Quote ↗
        </a>

        <button className={`hamburger${open ? ' open' : ''}`} onClick={() => setOpen(!open)}
          aria-label="Toggle menu" aria-expanded={open}>
          <span /><span /><span />
        </button>
      </div>

      <div className={`mobile-drawer${open ? ' open' : ''}`}>
        {links.map(l => (
          <a key={l.href} href={l.href} className="mobile-link" onClick={() => handleNav(l.href)}>{l.label}</a>
        ))}
        <a className="btn btn-primary mobile-cta" href="https://wa.me/91XXXXXXXXXX"
          target="_blank" rel="noopener" onClick={() => setOpen(false)}>
          Get a Free Quote ↗
        </a>
      </div>
    </header>
  );
}
