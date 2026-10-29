import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import './Navbar.css';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Process', path: '/process' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeDrawer = () => setOpen(false);

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        {/* LOGO */}
        <Link className="nav-logo" to="/" aria-label="Webnexora Solution Home" onClick={closeDrawer}>
          <span className="logo-icon">
            <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="9" fill="#121212" />
              <path
                d="M8 11L12 21L16 13L20 21L24 11"
                stroke="#EEFD44"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="logo-text">
            Webnexora <span className="logo-badge">Solution</span>
          </span>
        </Link>

        {/* DESKTOP NAV LINKS */}
        <nav className="nav-links" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `nav-link${isActive ? ' active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* RIGHT ACTIONS: AVAILABILITY STATUS + CTA */}
        <div className="nav-actions">
          <div className="nav-availability" title="Accepting new client projects">
            <span className="avail-dot" />
            <span className="avail-text">Available for Projects</span>
          </div>

          <Link className="nav-cta" to="/contact" id="nav-cta-btn">
            <span>Get a Free Quote</span>
            <ArrowUpRight size={15} className="cta-arrow" />
          </Link>
        </div>

        {/* MOBILE HAMBURGER TOGGLE */}
        <button
          className={`hamburger${open ? ' open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* MOBILE DRAWER */}
      <div className={`mobile-drawer${open ? ' open' : ''}`}>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={closeDrawer}
            className={({ isActive }) =>
              `mobile-link${isActive ? ' active' : ''}`
            }
          >
            {item.label}
          </NavLink>
        ))}
        <Link
          className="mobile-cta-btn"
          to="/contact"
          onClick={closeDrawer}
        >
          Get a Free Quote <ArrowUpRight size={15} />
        </Link>
      </div>
    </header>
  );
}
