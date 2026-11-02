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
            {/* RIGHT ILLUSTRATION - ANIMATED 2D AGENCY LAUNCH ENGINE */}
            <div className="cta-banner-right">
              <div className="cta-art-wrapper">
                <svg
                  width="340"
                  height="230"
                  viewBox="0 0 340 230"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cta-art-svg cta-launch-engine"
                  aria-label="Interactive digital agency launch engine"
                >
                  <defs>
                    <radialGradient id="ctaCoreRadial" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#D4FF85" stopOpacity="0.8" />
                      <stop offset="60%" stopColor="#B9FF66" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#B9FF66" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="ctaFlameGrad" cx="50%" cy="0%" r="100%">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="60%" stopColor="#B9FF66" />
                      <stop offset="100%" stopColor="#8CE62A" />
                    </radialGradient>
                  </defs>

                  {/* Pulsing Ambient Radar Waves */}
                  <circle cx="170" cy="115" r="72" className="cta-radar-ring cta-radar-1" />
                  <circle cx="170" cy="115" r="96" className="cta-radar-ring cta-radar-2" />

                  {/* Outer Counter-Rotating Orbit Rings */}
                  <g className="cta-orbit-cw">
                    <ellipse
                      cx="170"
                      cy="115"
                      rx="145"
                      ry="65"
                      stroke="#191A23"
                      strokeWidth="2"
                      strokeDasharray="8 8"
                      transform="rotate(-12 170 115)"
                    />
                    <circle cx="45" cy="90" r="4.5" fill="#191A23" />
                    <circle cx="295" cy="140" r="4.5" fill="#B9FF66" stroke="#191A23" strokeWidth="1.5" />
                  </g>

                  <g className="cta-orbit-ccw">
                    <ellipse
                      cx="170"
                      cy="115"
                      rx="118"
                      ry="48"
                      stroke="#B9FF66"
                      strokeWidth="2.5"
                      strokeDasharray="5 7"
                      transform="rotate(8 170 115)"
                    />
                    <circle cx="270" cy="98" r="4" fill="#191A23" />
                    <circle cx="70" cy="132" r="4" fill="#B9FF66" stroke="#191A23" strokeWidth="1.5" />
                  </g>

                  {/* Central Power Reactor Hub (Floating) */}
                  <g className="cta-reactor-chassis">
                    {/* Solid Drop Shadow */}
                    <rect x="135" y="80" width="76" height="76" rx="20" fill="#191A23" />
                    {/* Main Chassis Box */}
                    <rect x="131" y="76" width="76" height="76" rx="20" fill="#FFFFFF" stroke="#191A23" strokeWidth="3" />

                    {/* Outer Ring & Pulse Core */}
                    <circle cx="169" cy="114" r="26" fill="#191A23" />
                    <circle cx="169" cy="114" r="38" fill="url(#ctaCoreRadial)" className="cta-core-pulse-radial" />
                    <circle cx="169" cy="114" r="16" fill="#B9FF66" className="cta-core-glow-sphere" stroke="#191A23" strokeWidth="2" />

                    {/* Central Power Bolt / Spark */}
                    <path
                      d="M170 102 L163 113 H170 L167 125 L177 112 H171 Z"
                      fill="#191A23"
                      stroke="#191A23"
                      strokeWidth="1"
                      strokeLinejoin="round"
                    />

                    {/* Corner Fasteners */}
                    <circle cx="143" cy="88" r="2.5" fill="#191A23" />
                    <circle cx="195" cy="88" r="2.5" fill="#191A23" />
                    <circle cx="143" cy="140" r="2.5" fill="#191A23" />
                    <circle cx="195" cy="140" r="2.5" fill="#191A23" />
                  </g>

                  {/* Orbiting Satellite 1: Symmetrical Aerodynamic Spacecraft (Top-Right) */}
                  <g className="cta-sat-rocket">
                    <g transform="translate(262, 54) rotate(35)">
                      {/* Shadow */}
                      <g transform="translate(3, 3)">
                        <polygon points="-12,12 -28,26 -12,22" fill="#000000" />
                        <polygon points="12,12 28,26 12,22" fill="#000000" />
                        <path d="M0 -34 C-8 -20 -12 -4 -12 18 H12 C12 -4 8 -20 0 -34 Z" fill="#000000" />
                        <polygon points="-8,20 8,20 0,44" fill="#000000" />
                      </g>

                      {/* Symmetrical Delta Wings */}
                      <polygon points="-12,12 -28,26 -12,22" fill="#B9FF66" stroke="#191A23" strokeWidth="2.2" strokeLinejoin="round" />
                      <polygon points="12,12 28,26 12,22" fill="#B9FF66" stroke="#191A23" strokeWidth="2.2" strokeLinejoin="round" />

                      {/* Straight Aerodynamic Fuselage */}
                      <path d="M0 -34 C-8 -20 -12 -4 -12 18 H12 C12 -4 8 -20 0 -34 Z" fill="#FFFFFF" stroke="#191A23" strokeWidth="2.6" strokeLinejoin="round" />

                      {/* Symmetrical Nosecone Tip */}
                      <path d="M0 -34 C-4 -26 -7 -18 -7 -12 H7 C7 -18 4 -26 0 -34 Z" fill="#B9FF66" stroke="#191A23" strokeWidth="1.8" />

                      {/* Circular Porthole */}
                      <circle cx="0" cy="-2" r="6" fill="#191A23" />
                      <circle cx="0" cy="-2" r="3.5" fill="#B9FF66" />

                      {/* Thruster Base */}
                      <rect x="-6" y="18" width="12" height="4" rx="1.5" fill="#191A23" />

                      {/* Animated Chevron Flame Plume */}
                      <polygon points="-8,22 8,22 0,46" fill="#B9FF66" stroke="#191A23" strokeWidth="1.8" strokeLinejoin="round" className="cta-rocket-flame" />
                      <polygon points="-4,22 4,22 0,36" fill="#FFFFFF" />
                      <circle cx="-7" cy="32" r="1.8" fill="#B9FF66" />
                      <circle cx="7" cy="32" r="1.8" fill="#B9FF66" />
                    </g>
                  </g>

                  {/* Orbiting Satellite 2: Floating Code Capsule (Bottom-Left) */}
                  <g className="cta-sat-code">
                    <rect x="36" y="146" width="68" height="28" rx="8" fill="#191A23" />
                    <rect x="33" y="143" width="68" height="28" rx="8" fill="#B9FF66" stroke="#191A23" strokeWidth="2.2" />
                    {/* Code Brackets < / > */}
                    <path d="M48 152 L43 157 L48 162" stroke="#191A23" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="56" y1="165" x2="64" y2="149" stroke="#191A23" strokeWidth="2.4" strokeLinecap="round" />
                    <path d="M72 152 L77 157 L72 162" stroke="#191A23" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="88" cy="157" r="3" fill="#191A23" />
                  </g>

                  {/* Orbiting Satellite 3: Target Conversion Beacon (Top-Left) */}
                  <g className="cta-sat-beacon">
                    <circle cx="58" cy="56" r="20" fill="#191A23" />
                    <circle cx="55" cy="53" r="20" fill="#FFFFFF" stroke="#191A23" strokeWidth="2.2" />
                    <circle cx="55" cy="53" r="13" fill="#191A23" />
                    <circle cx="55" cy="53" r="6" fill="#B9FF66" stroke="#191A23" strokeWidth="1.2" className="cta-beacon-blinker" />
                  </g>

                  {/* Twinkling Positivus Sparkles */}
                  <g className="cta-sparkle-1">
                    <path
                      d="M298 160 C298 168 292 172 284 172 C292 172 298 176 298 184 C298 176 304 172 312 172 C304 172 298 168 298 160 Z"
                      fill="#B9FF66"
                      stroke="#191A23"
                      strokeWidth="1.2"
                    />
                  </g>

                  <g className="cta-sparkle-2">
                    <path
                      d="M84 22 C84 27 80 30 74 30 C80 30 84 33 84 38 C84 33 88 30 94 30 C88 30 84 27 84 22 Z"
                      fill="#B9FF66"
                      stroke="#191A23"
                      strokeWidth="1"
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
