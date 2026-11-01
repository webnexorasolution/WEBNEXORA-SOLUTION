import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  Zap,
  Sparkles,
  ShieldCheck,
  Star,
  Activity,
  Code2,
  Target,
} from 'lucide-react';
import siteConfig from '../config/site';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero positivus-hero-wrapper" id="home">
      <div className="container hero-container">
        {/* TOP ROW: 2-COLUMN SPLIT (COPY LEFT, MEGAPHONE ART RIGHT) */}
        <div className="hero-top-grid">
          {/* LEFT: WEBNEXORA REAL COPY IN POSITIVUS TYPOGRAPHY */}
          <div className="hero-copy" data-aos>
            <div className="eyebrow hero-eyebrow">
              <span className="eyebrow-dot" />
              Website Development &amp; Digital Strategy
            </div>

            <h1 className="hero-heading">
              We Build Fast,<br />
              High-Converting Websites<br />
              That <span className="hero-title-badge">Scale Your Business.</span>
            </h1>

            <p className="hero-lead">
              Webnexora Solution delivers custom web applications, bespoke e-commerce platforms,
              and conversion-focused digital experiences engineered with speed, precision, and aesthetics.
            </p>

            <div className="hero-actions">
              <a
                className="btn btn-primary hero-btn-main"
                href={siteConfig.getWhatsAppUrl("Hello Webnexora Solution! I'd like to book a free consultation.")}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-cta-primary"
              >
                Get a Free Consultation <ArrowUpRight size={17} />
              </a>
              <Link className="btn btn-outline hero-btn-secondary" to="/portfolio" id="hero-cta-portfolio">
                Explore Our Work <ArrowRight size={17} />
              </Link>
            </div>

            <div className="hero-proof-bar">
              <div className="proof-chip">
                <span className="chk"><Check size={11} strokeWidth={3} /></span>
                <span>Sub-Second Load Times</span>
              </div>
              <div className="proof-chip">
                <span className="chk"><Check size={11} strokeWidth={3} /></span>
                <span>Core Web Vitals Certified</span>
              </div>
              <div className="proof-chip">
                <span className="chk"><Check size={11} strokeWidth={3} /></span>
                <span>100% Fixed-Price Delivery</span>
              </div>
            </div>
          </div>

          {/* RIGHT: WEBNEXORA DIGITAL ENGINEERING & ORBITAL CORE */}
          <div className="hero-visual" data-aos>
            <div className="hero-art-wrapper">
              <svg
                className="hero-art-svg"
                viewBox="0 0 500 360"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Webnexora Web Engineering &amp; Digital Growth Ecosystem"
              >
                {/* Background Planetary Orbital Rings (Echoing Official Logo) */}
                <ellipse
                  cx="250"
                  cy="180"
                  rx="220"
                  ry="90"
                  stroke="#191A23"
                  strokeWidth="2"
                  transform="rotate(-15 250 180)"
                />
                <ellipse
                  cx="250"
                  cy="180"
                  rx="185"
                  ry="72"
                  stroke="#B9FF66"
                  strokeWidth="3"
                  transform="rotate(-15 250 180)"
                />
                <ellipse
                  cx="250"
                  cy="180"
                  rx="150"
                  ry="56"
                  stroke="#D8D8D8"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  transform="rotate(-15 250 180)"
                />

                {/* Decorative 4-Pointed Stars */}
                <path
                  d="M100 80 C100 88 95 92 87 92 C95 92 100 96 100 104 C100 96 105 92 113 92 C105 92 100 88 100 80 Z"
                  fill="#191A23"
                />
                <path
                  d="M400 65 C400 75 393 80 383 80 C393 80 400 85 400 95 C400 85 407 80 417 80 C407 80 400 75 400 65 Z"
                  fill="#B9FF66"
                  stroke="#191A23"
                  strokeWidth="1.5"
                />
                <path
                  d="M420 255 C420 262 416 266 409 266 C416 266 420 270 420 277 C420 270 424 266 431 266 C424 266 420 262 420 255 Z"
                  fill="#191A23"
                />

                {/* CENTRAL FLOATING 3D DIGITAL APPLICATION BROWSER CONSOLE */}
                <g className="floating-core-console">
                  {/* Isometric Shadow Slab */}
                  <rect
                    x="138"
                    y="76"
                    width="244"
                    height="184"
                    rx="22"
                    fill="#191A23"
                  />
                  {/* Main Console Surface */}
                  <rect
                    x="132"
                    y="70"
                    width="244"
                    height="184"
                    rx="22"
                    fill="#FFFFFF"
                    stroke="#191A23"
                    strokeWidth="2.5"
                  />

                  {/* Browser Window Header */}
                  <line x1="132" y1="108" x2="376" y2="108" stroke="#191A23" strokeWidth="2" />
                  {/* Traffic Light Dots */}
                  <circle cx="154" cy="89" r="4.5" fill="#191A23" />
                  <circle cx="168" cy="89" r="4.5" fill="#191A23" />
                  <circle cx="182" cy="89" r="4.5" fill="#B9FF66" stroke="#191A23" strokeWidth="1" />

                  {/* URL Address Pill */}
                  <rect x="206" y="80" width="154" height="18" rx="9" fill="#F3F3F3" stroke="#191A23" strokeWidth="1" />
                  <text x="222" y="93" fontFamily="'Space Grotesk', sans-serif" fontSize="10" fontWeight="700" fill="#191A23">
                    webnexora.com/scale
                  </text>

                  {/* Center Canvas: Stylized Official Agency Monogram W */}
                  <g transform="translate(204, 122)">
                    {/* Outer Cyan Ring */}
                    <ellipse cx="48" cy="38" rx="44" ry="16" stroke="#00E5FF" strokeWidth="2.4" transform="rotate(-14 48 38)" />
                    {/* W Ribbon Paths */}
                    <path
                      d="M14 18 L34 58 L48 30 L62 58 L82 18"
                      stroke="#191A23"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14 18 L34 58 L48 30 L62 58 L82 18"
                      stroke="#B9FF66"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {/* Sparkle Node */}
                    <circle cx="82" cy="18" r="4" fill="#00E5FF" stroke="#191A23" strokeWidth="1.5" />
                  </g>

                  {/* Mini Code Line Mockups */}
                  <rect x="152" y="124" width="38" height="6" rx="3" fill="#191A23" />
                  <rect x="152" y="136" width="46" height="5" rx="2.5" fill="#B9FF66" stroke="#191A23" strokeWidth="0.8" />
                  <rect x="152" y="147" width="28" height="5" rx="2.5" fill="#D0D0D0" />
                  <rect x="152" y="158" width="34" height="5" rx="2.5" fill="#191A23" />
                  <rect x="152" y="169" width="44" height="5" rx="2.5" fill="#D0D0D0" />

                  {/* Mini Conversion Growth Trend Bar */}
                  <rect x="152" y="202" width="204" height="30" rx="8" fill="#F3F3F3" stroke="#191A23" strokeWidth="1.5" />
                  <path d="M164 221 L184 215 L210 219 L238 211 L264 215 L296 209 L342 212" stroke="#191A23" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="342" cy="212" r="3.5" fill="#B9FF66" stroke="#191A23" strokeWidth="1.2" />
                </g>

                {/* 3 SATELLITE FLOATING BADGES (Neo-Brutalist Agency Signals) */}
                {/* 1. Lightning Performance 99 Badge (Top Left) */}
                <g className="badge-float-1" transform="translate(42, 140)">
                  <rect x="0" y="4" width="112" height="40" rx="12" fill="#191A23" />
                  <rect x="-2" y="2" width="112" height="40" rx="12" fill="#FFFFFF" stroke="#191A23" strokeWidth="2" />
                  <circle cx="18" cy="22" r="9" fill="#B9FF66" stroke="#191A23" strokeWidth="1.2" />
                  <path d="M17 17 L15 22 L19 22 L17 27" stroke="#191A23" strokeWidth="1.6" strokeLinecap="round" />
                  <text x="34" y="26" fontFamily="'Space Grotesk', sans-serif" fontSize="12" fontWeight="700" fill="#191A23">
                    99 Speed
                  </text>
                </g>

                {/* 2. Mobile Apps / Capacitor Badge (Top Right) */}
                <g className="badge-float-2" transform="translate(348, 110)">
                  <rect x="0" y="4" width="130" height="42" rx="12" fill="#191A23" />
                  <rect x="-2" y="2" width="130" height="42" rx="12" fill="#B9FF66" stroke="#191A23" strokeWidth="2" />
                  <text x="14" y="28" fontFamily="'Space Grotesk', sans-serif" fontSize="13" fontWeight="700" fill="#191A23">
                    📱 iOS &amp; Android
                  </text>
                </g>

                {/* 3. Conversion Benchmark +184% (Bottom Right) */}
                <g className="badge-float-3" transform="translate(328, 215)">
                  <rect x="0" y="4" width="144" height="44" rx="12" fill="#191A23" />
                  <rect x="-2" y="2" width="144" height="44" rx="12" fill="#FFFFFF" stroke="#191A23" strokeWidth="2" />
                  <circle cx="19" cy="24" r="9" fill="#191A23" />
                  <text x="15" y="28" fontFamily="'Space Grotesk', sans-serif" fontSize="12" fontWeight="800" fill="#B9FF66">
                    ↗
                  </text>
                  <text x="36" y="28" fontFamily="'Space Grotesk', sans-serif" fontSize="13" fontWeight="700" fill="#191A23">
                    +184% Growth
                  </text>
                </g>

                {/* 4. Planetary Core Satellite Dot */}
                <circle cx="68" cy="240" r="8" fill="#191A23" />
                <circle cx="68" cy="240" r="3.5" fill="#B9FF66" />
              </svg>
            </div>
          </div>
        </div>

        {/* LOGO MARQUEE / TECH STACK ROW (Positivus Clean Monochrome) */}
        {/* LOGO MARQUEE / TECH STACK ROW (Clean Positivus Monochrome Bar) */}
        <div className="hero-logos-bar" data-aos>
          <div className="client-logos-row">
            {/* React */}
            <div className="client-logo-item" title="React.js">
              <svg className="tech-logo-svg" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <ellipse cx="14" cy="14" rx="12" ry="4.8" stroke="#191A23" strokeWidth="1.8" transform="rotate(30 14 14)" />
                <ellipse cx="14" cy="14" rx="12" ry="4.8" stroke="#191A23" strokeWidth="1.8" transform="rotate(90 14 14)" />
                <ellipse cx="14" cy="14" rx="12" ry="4.8" stroke="#191A23" strokeWidth="1.8" transform="rotate(150 14 14)" />
                <circle cx="14" cy="14" r="2.2" fill="#191A23" />
              </svg>
              <span className="tech-logo-name">React</span>
            </div>

            {/* Next.js */}
            <div className="client-logo-item" title="Next.js">
              <svg className="tech-logo-svg" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <circle cx="14" cy="14" r="13" fill="#191A23" />
                <path d="M10 9 V19 M10 9 L18.5 19 M18 9 V15" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="tech-logo-name">Next.js</span>
            </div>

            {/* Shopify */}
            <div className="client-logo-item" title="Shopify">
              <svg className="tech-logo-svg" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <path d="M7 11 L14 7 L21 11 L19 23 L9 23 Z" fill="#191A23" />
                <path d="M12 7 C12 5.5 12.8 4 14 4 C15.2 4 16 5.5 16 7" stroke="#191A23" strokeWidth="1.6" fill="none" />
                <path d="M15.5 12.5 C15.5 11.5 14.5 11 13.8 11.3 C13 11.6 12.5 12.2 12.8 13.2 C13.2 14.5 15.6 14.8 15.6 16.5 C15.6 18 14.2 18.8 13 18.4 C12 18 11.5 17 11.5 17" stroke="#B9FF66" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span className="tech-logo-name">Shopify</span>
            </div>

            {/* Capacitor (Mobile Apps Framework) */}
            <div className="client-logo-item" title="Capacitor (Cross-Platform Mobile Apps)">
              <svg className="tech-logo-svg" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <rect x="2" y="2" width="24" height="24" rx="7" fill="#191A23" />
                <path d="M9 8 L19 8 M9 20 L19 20 M14 8 L14 11.5 M14 16.5 L14 20 M8 11.5 L20 11.5 M8 16.5 L20 16.5" stroke="#B9FF66" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              <span className="tech-logo-name">Capacitor</span>
            </div>

            {/* Vite */}
            <div className="client-logo-item" title="Vite">
              <svg className="tech-logo-svg" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <polygon points="4,7 24,4 17,25 11,25" fill="#191A23" />
                <polygon points="12,10 18,9 14,20" fill="#B9FF66" />
              </svg>
              <span className="tech-logo-name">Vite</span>
            </div>

            {/* Google Lighthouse */}
            <div className="client-logo-item" title="Google Lighthouse 99">
              <svg className="tech-logo-svg" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <rect x="2" y="3" width="24" height="22" rx="7" fill="#191A23" />
                <text x="6" y="19" fontFamily="'Space Grotesk', sans-serif" fontSize="13" fontWeight="800" fill="#B9FF66">99</text>
              </svg>
              <span className="tech-logo-name">Lighthouse</span>
            </div>
          </div>
        </div>

        {/* HERO BENTO SHOWCASE (Styled in the exact Positivus neo-brutalist theme) */}
        <div className="hero-bento-grid" data-aos>
          {/* Bento Card 1: SIGNATURE ELECTRIC LIME HIGHLIGHT CARD */}
          <div className="bento-card hero-card-lime">
            <div className="bento-card-top">
              <span className="bento-pill-dark">
                <Sparkles size={12} /> Conversion Benchmark
              </span>
              <span className="bento-trend-pill">↗ 2.4x</span>
            </div>
            <div className="lime-metric-block">
              <span className="lime-huge-number">+184%</span>
              <span className="lime-metric-label">Average Inbound Growth</span>
            </div>
            <p className="lime-card-desc">
              Clients moving from legacy sites to Webnexora modern architecture report doubled inquiry volume within 60 days.
            </p>
            <div className="lime-tags-row">
              <span className="lime-tag-chip">
                <Target size={13} strokeWidth={2.4} className="chip-icon" /> High-Intent Funnels
              </span>
              <span className="lime-tag-chip">
                <Zap size={13} strokeWidth={2.4} className="chip-icon" /> Zero Digital Friction
              </span>
            </div>
          </div>

          {/* Bento Card 2: PRODUCTION VELOCITY & SPRINT ROADMAP */}
          <div className="bento-card hero-card-sprints">
            <div className="bento-card-top">
              <div className="bento-card-title-group">
                <span className="bento-icon-box roadmap-icon-box">
                  <Activity size={14} strokeWidth={2.4} />
                </span>
                <div className="bento-title-text-wrap">
                  <strong className="bento-heading-text">
                    Sprint <span className="title-highlight">Roadmap.</span>
                  </strong>
                  <span className="bento-title-sub">Live Production Velocity</span>
                </div>
              </div>
              <span className="sprint-status-pill-live">
                <span className="sprint-pulse-beacon" />
                <span>Sprint 02 Active</span>
              </span>
            </div>

            {/* Visual Milestone Stages Stack */}
            <div className="milestone-stages-stack">
              <div className="milestone-stage-row stage-completed">
                <div className="milestone-row-top">
                  <div className="milestone-label-group">
                    <span className="milestone-step-badge done">
                      <Check size={11} strokeWidth={3} />
                    </span>
                    <span className="milestone-name">UI/UX &amp; Design Architecture</span>
                  </div>
                  <span className="milestone-pct done">100%</span>
                </div>
                <div className="milestone-bar-track">
                  <div className="milestone-bar-fill done" style={{ width: '100%' }} />
                </div>
              </div>

              <div className="milestone-stage-row stage-active">
                <div className="milestone-row-top">
                  <div className="milestone-label-group">
                    <span className="milestone-step-badge active">
                      <span className="badge-pulse-inner" />
                    </span>
                    <span className="milestone-name">Full-Stack &amp; Headless Dev</span>
                  </div>
                  <span className="milestone-badge-pill active">
                    <span className="pill-pulse-dot" /> 85% Active
                  </span>
                </div>
                <div className="milestone-bar-track">
                  <div className="milestone-bar-fill active" style={{ width: '85%' }}>
                    <span className="bar-spark-glow" />
                  </div>
                </div>
              </div>

              <div className="milestone-stage-row stage-queued">
                <div className="milestone-row-top">
                  <div className="milestone-label-group">
                    <span className="milestone-step-badge queued">03</span>
                    <span className="milestone-name">Core Web Vitals &amp; Launch QA</span>
                  </div>
                  <span className="milestone-pct queued">Next</span>
                </div>
                <div className="milestone-bar-track">
                  <div className="milestone-bar-fill queued" style={{ width: '0%' }} />
                </div>
              </div>
            </div>

            <div className="delivery-guarantee-strip">
              <div className="guarantee-meta">
                <ShieldCheck size={14} className="guarantee-icon" />
                <span>Avg. Sprint: <strong>14–18 Days</strong></span>
              </div>
              <span className="guarantee-badge">
                <span className="guarantee-dot">●</span> 100% On-Time SLA
              </span>
            </div>
          </div>

          {/* Bento Card 3: LIGHTHOUSE SCORE */}
          <div className="bento-card hero-card-speed">
            <div className="bento-card-top">
              <span className="bento-pill-muted">Performance</span>
              <span className="speed-badge-green">Core Web Vitals</span>
            </div>
            <div className="speed-number-wrap">
              <span className="speed-num">99</span>
              <div className="speed-meta">
                <strong>Google Lighthouse</strong>
                <small>0.48s First Contentful Paint</small>
              </div>
            </div>
            <div className="speed-chips-grid">
              <span className="speed-chip"><Zap size={11} /> Instant CDN</span>
              <span className="speed-chip"><Code2 size={11} /> Clean Code</span>
              <span className="speed-chip"><ShieldCheck size={11} /> Hardened</span>
            </div>
          </div>

          {/* Bento Card 4: CLIENT OUTCOMES */}
          <div className="bento-card hero-card-metrics">
            <div className="bento-card-top">
              <span className="bento-pill-muted">Client Outcomes</span>
              <span className="star-rating-pill">
                5.0 <Star size={12} fill="#191A23" color="#191A23" />
              </span>
            </div>

            <div className="metrics-split-row">
              <div className="m-split-item">
                <span className="m-split-num">150+</span>
                <span className="m-split-lbl">Live Sites</span>
              </div>
              <div className="m-divider" />
              <div className="m-split-item">
                <span className="m-split-num">98%</span>
                <span className="m-split-lbl">Retention</span>
              </div>
              <div className="m-divider" />
              <div className="m-split-item">
                <span className="m-split-num">24/7</span>
                <span className="m-split-lbl">Support</span>
              </div>
            </div>

            <Link className="bento-action-link" to="/portfolio">
              <span>View All 150+ Case Studies</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
