import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ProcessPage from './pages/ProcessPage';
import ContactPage from './pages/ContactPage';

import { ArrowUp } from 'lucide-react';
import './App.css';

function useAOSObserver() {
  const location = useLocation();

  useEffect(() => {
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
  }, [location.pathname]);
}

export default function App() {
  useAOSObserver();

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      <ScrollTopBtn />
    </>
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
