import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import './Navbar.css';

const navItems = [
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
      <div className="container nav-container">
        {/* LOGO */}
        <Link className="nav-logo" to="/" aria-label="Webnexora Solution Home" onClick={closeDrawer}>
          <img
            src="/webnexora-brand-mark.png"
            alt="Webnexora Solution Logo"
            className="nav-brand-logo-img"
          />
          <span className="logo-text">
            Webnexora <span className="logo-text-solution">Solution</span>
          </span>
        </Link>

        {/* RIGHT GROUP: DESKTOP NAV LINKS + CTA */}
        <div className="nav-right-group">
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

          <div className="nav-actions">
            <Link className="nav-cta" to="/contact" id="nav-cta-btn">
              <span>Get a Free Quote</span>
              <ArrowUpRight size={15} className="cta-arrow" />
            </Link>
          </div>
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
        <NavLink
          to="/"
          onClick={closeDrawer}
          className={({ isActive }) =>
            `mobile-link${isActive ? ' active' : ''}`
          }
        >
          Home
        </NavLink>
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
