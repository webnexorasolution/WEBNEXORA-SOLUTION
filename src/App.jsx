import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function useAOSObserver() {
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
    // Re-observe after short delay to catch lazy-rendered elements
    const t = setTimeout(observeAll, 300);

    return () => {
      clearTimeout(t);
      observer.disconnect();
    };
  }, []);
}

export default function App() {
  useAOSObserver();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Portfolio />
        <Process />
        <Contact />
      </main>
      <Footer />

      {/* Scroll-to-top button */}
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
      onClick={handleClick}
      aria-label="Scroll to top"
      title="Back to top"
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '24px',
        width: '44px',
        height: '44px',
        borderRadius: '12px',
        background: 'linear-gradient(135deg, #5b21f5, #7c3aff)',
        border: 'none',
        color: '#fff',
        fontSize: '20px',
        cursor: 'pointer',
        zIndex: 999,
        opacity: 0,
        pointerEvents: 'none',
        transition: 'opacity 0.3s, transform 0.2s',
        boxShadow: '0 6px 20px rgba(91,33,245,0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      ↑
    </button>
  );
}
