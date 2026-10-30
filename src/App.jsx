import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { captureUTMParams } from './utils/utmTracker';

import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ProcessPage from './pages/ProcessPage';
import ContactPage from './pages/ContactPage';
import AdminDashboard from './pages/AdminDashboard';

import { ArrowUp } from 'lucide-react';
import './App.css';

function useAOSObserver() {
  const location = useLocation();

  useEffect(() => {
    // Automatically capture marketing campaign UTM parameters
    captureUTMParams();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px 60px 0px' }
    );

    const observeAll = () => {
      document.querySelectorAll('[data-aos]').forEach((el) => observer.observe(el));
    };

    observeAll();
    const t = setTimeout(observeAll, 200);

    return () => {
      clearTimeout(t);
      observer.disconnect();
    };
  }, [location.pathname, location.search]);
}

export default function App() {
  useAOSObserver();
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <ScrollProgressBar />
      <ScrollToTop />
      {!isAdmin && <Navbar />}
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </main>
      {!isAdmin && <Footer />}
      {!isAdmin && <ScrollTopBtn />}
      {!isAdmin && <CookieConsent />}
    </>
  );
}

function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="scroll-progress-bar"
      style={{ width: `${progress}%` }}
      aria-hidden="true"
    />
  );
}

function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('webnexora_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (level) => {
    localStorage.setItem('webnexora_cookie_consent', level);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside className="cookie-banner" role="dialog" aria-label="Privacy and cookies consent">
      <div className="cookie-banner-content">
        <div className="cookie-banner-text">
          <div className="cookie-title">
            <span className="cookie-dot" /> Privacy &amp; Cookie Policy
          </div>
          <p>
            We use essential local storage &amp; cookies to protect form submissions from CSRF, prevent spam, and optimize agency performance.
          </p>
        </div>
        <div className="cookie-banner-actions">
          <button
            type="button"
            className="btn-cookie-secondary"
            onClick={() => handleConsent('essential')}
          >
            Essential Only
          </button>
          <button
            type="button"
            className="btn-cookie-primary"
            onClick={() => handleConsent('all')}
          >
            Accept All
          </button>
        </div>
      </div>
    </aside>
  );
}

function ScrollTopBtn() {
  const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    const btn = document.getElementById('scroll-top-btn');
    if (!btn) return;
    const onScroll = () => {
      btn.style.opacity = window.scrollY > 400 ? '1' : '0';
      btn.style.pointerEvents = window.scrollY > 400 ? 'all' : 'none';
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      id="scroll-top-btn"
      className="scroll-top-btn"
      onClick={handleClick}
      aria-label="Scroll to top"
      title="Back to top"
    >
      <ArrowUp size={20} strokeWidth={2.5} />
    </button>
  );
}
