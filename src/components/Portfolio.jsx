import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import './Portfolio.css';

const caseStudies = [
  {
    tag: 'E-Commerce',
    title: 'Modern Retail Storefront',
    desc: 'For an enterprise e-commerce brand, we engineered a custom high-speed storefront that generated a +214% increase in checkout conversions and 0.5s load times.',
    link: '/portfolio',
  },
  {
    tag: 'Corporate',
    title: 'Global Tech Consulting Platform',
    desc: 'For an international corporate consultancy, we architected a Next.js platform that resulted in +180% inbound qualified lead growth within 60 days.',
    link: '/portfolio',
  },
  {
    tag: 'Creative Agency',
    title: 'Architecture & Design Studio',
    desc: 'For an architectural studio, we created a striking visual portfolio with editorial layouts resulting in 0.6s mobile load times and 3x client inquiries.',
    link: '/portfolio',
  },
];

export default function Portfolio() {
  return (
    <div className="portfolio-section-wrap" id="portfolio">
      {/* 1. "LET'S MAKE THINGS HAPPEN" CTA BANNER (From Reference UI) */}
      <section className="section cta-banner-section">
        <div className="container">
          <div className="cta-banner-card" data-aos>
            {/* LEFT CONTENT */}
            <div className="cta-banner-left">
              <h3 className="cta-banner-heading">Let's make things happen</h3>
              <p className="cta-banner-text">
                Contact Webnexora today to learn more about how our custom website development
                and digital growth services can help your business grow and succeed online.
              </p>
              <Link
                to="/contact"
                className="btn btn-primary cta-banner-btn"
                id="cta-free-proposal-btn"
              >
                Get your free proposal
              </Link>
            </div>

            {/* RIGHT ILLUSTRATION */}
            <div className="cta-banner-right">
              <div className="cta-art-wrapper">
                <svg
                  width="320"
                  height="220"
                  viewBox="0 0 320 220"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cta-art-svg"
                  aria-label="Let's make things happen illustration"
                >
                  {/* Concentric wireframe rings */}
                  <ellipse
                    cx="160"
                    cy="110"
                    rx="130"
                    ry="46"
                    stroke="#191A23"
                    strokeWidth="1.8"
                    transform="rotate(-10 160 110)"
                  />
                  <ellipse
                    cx="160"
                    cy="110"
                    rx="105"
                    ry="36"
                    stroke="#E0E0E0"
                    strokeWidth="2"
                    strokeDasharray="5 5"
                    transform="rotate(-10 160 110)"
                  />

                  {/* Gray 4-pointed star */}
                  <path
                    d="M230 110 C230 126 218 135 200 135 C218 135 230 144 230 160 C230 144 242 135 260 135 C242 135 230 126 230 110 Z"
                    fill="#E6E6E6"
                  />

                  {/* Black Mascot Sphere with cute white eyes */}
                  <g className="floating-sphere">
                    <circle cx="160" cy="95" r="38" fill="#191A23" />
                    <ellipse cx="151" cy="94" rx="4.8" ry="7.5" fill="#FFFFFF" />
                    <ellipse cx="169" cy="94" rx="4.8" ry="7.5" fill="#FFFFFF" />
                  </g>

                  {/* Vibrant Lime Green 4-Pointed Star */}
                  <g className="floating-star">
                    <path
                      d="M160 140 C160 156 148 165 130 165 C148 165 160 174 160 190 C160 174 172 165 190 165 C172 165 160 156 160 140 Z"
                      fill="#B9FF66"
                      stroke="#191A23"
                      strokeWidth="1.5"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CASE STUDY SECTION (From Reference UI) */}
      <section className="section positivus-casestudy-section">
        <div className="container">
          {/* SECTION HEADER ROW */}
          <div className="section-head section-header-row" data-aos>
            <h2 className="section-title-badge">
              <span className="title-badge">Case study</span>
            </h2>
            <p className="section-head-desc">
              Explore Real-Life Examples of Our Proven Digital Engineering and Growth Success
              through Our Client Case Studies.
            </p>
          </div>

          {/* 3-COLUMN DARK CASE STUDY CONTAINER */}
          <div className="casestudy-dark-card" data-aos>
            <div className="casestudy-columns-grid">
              {caseStudies.map((cs, index) => (
                <div key={cs.title} className="casestudy-col">
                  <div>
                    <span className="casestudy-tag-badge">{cs.tag}</span>
                    <h3 className="casestudy-col-title">{cs.title}</h3>
                    <p className="casestudy-desc">{cs.desc}</p>
                  </div>
                  <Link
                    to={cs.link}
                    className="casestudy-action-link"
                    id={`casestudy-link-${index}`}
                  >
                    <span>Learn more</span>
                    <ArrowUpRight size={20} className="casestudy-arrow-icon" />
                  </Link>
                  {index < caseStudies.length - 1 && (
                    <div className="casestudy-divider" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* VIEW ALL IN FULL PORTFOLIO BUTTON */}
          <div className="portfolio-bottom-row" data-aos>
            <Link
              className="btn btn-primary"
              to="/portfolio"
              id="portfolio-explore-btn"
            >
              View All Projects in Full Portfolio <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
