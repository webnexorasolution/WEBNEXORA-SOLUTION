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
          <div className="hero-copy">
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

          {/* RIGHT: FULL-SIZE NEO-BRUTALIST DIGITAL WORKSTATION CONSOLE */}
          <div className="hero-visual">
            <div className="hero-console-stage">
              {/* Background Ambient Planetary Orbits */}
              <div className="console-orbit-bg" aria-hidden="true">
                <svg className="orbit-svg" viewBox="0 0 640 480" fill="none">
                  <ellipse cx="320" cy="240" rx="300" ry="140" stroke="#191A23" strokeWidth="1.5" strokeDasharray="4 6" transform="rotate(-12 320 240)" />
                  <ellipse cx="320" cy="240" rx="260" ry="110" stroke="#B9FF66" strokeWidth="2.5" transform="rotate(-12 320 240)" />
                  <path d="M110 90 C110 98 105 102 97 102 C105 102 110 106 110 114 C110 106 115 102 123 102 C115 102 110 98 110 90 Z" fill="#191A23" />
                  <path d="M540 80 C540 90 533 95 523 95 C533 95 540 100 540 110 C540 100 547 95 557 95 C547 95 540 90 540 80 Z" fill="#B9FF66" stroke="#191A23" strokeWidth="1.5" />
                  <circle cx="580" cy="290" r="5" fill="#191A23" />
                  <circle cx="580" cy="290" r="2.5" fill="#B9FF66" />
                </svg>
              </div>

              {/* Main Neo-Brutalist Digital Console */}
              <div className="hero-digital-console">
                {/* Browser Header Bar */}
                <div className="console-browser-header">
                  <div className="console-traffic-dots">
                    <span className="dot dot-red" />
                    <span className="dot dot-amber" />
                    <span className="dot dot-green" />
                  </div>

                  <div className="console-url-pill">
                    <span className="lock-icon">🔒</span>
                    <span className="url-text">webnexora.com/scale</span>
                    <span className="live-status-dot" title="Edge Production Online" />
                  </div>

                  <div className="console-tag-badge">
                    <span className="tag-pulse" /> PRODUCTION
                  </div>
                </div>

                {/* Console Workspace Content */}
                <div className="console-workspace">
                  {/* Top Bar: Agency Branding & Live Uptime */}
                  <div className="console-brand-row">
                    <div className="console-brand-identity">
                      <img
                        src="/webnexora-round-mark.png"
                        alt="Webnexora Mark"
                        className="console-brand-logo"
                      />
                      <div className="console-brand-meta">
                        <span className="console-brand-title">Webnexora Engine v2.4</span>
                        <span className="console-brand-sub">Modern Web &amp; Mobile Ecosystem</span>
                      </div>
                    </div>
                    <div className="console-uptime-pill">
                      <span className="chk-mini">✓</span> 99.9% Uptime Verified
                    </div>
                  </div>

                  {/* Main Dual Metric Cards Grid */}
                  <div className="console-metrics-grid">
                    {/* Card A: Google Lighthouse Speed Score (99) */}
                    <div className="metric-box speed-metric-box">
                      <div className="metric-box-top">
                        <span className="metric-title">Performance Vitals</span>
                        <span className="metric-badge-lime">Google 99</span>
                      </div>
                      <div className="speed-dial-wrap">
                        <div className="speed-dial-circle">
                          <svg className="speed-dial-svg" viewBox="0 0 84 84">
                            <circle cx="42" cy="42" r="35" stroke="#EAEAEA" strokeWidth="7" fill="none" />
                            <circle
                              cx="42"
                              cy="42"
                              r="35"
                              stroke="#B9FF66"
                              strokeWidth="7"
                              strokeDasharray="220"
                              strokeDashoffset="18"
                              strokeLinecap="round"
                              fill="none"
                            />
                          </svg>
                          <div className="speed-dial-val">
                            <span className="dial-num">99</span>
                            <span className="dial-sub">/ 100</span>
                          </div>
                        </div>
                        <div className="speed-stats-col">
                          <div className="speed-stat-item">
                            <span className="stat-dot" />
                            <span className="stat-label">FCP:</span>
                            <span className="stat-val">0.38s (Fast)</span>
                          </div>
                          <div className="speed-stat-item">
                            <span className="stat-dot" />
                            <span className="stat-label">LCP:</span>
                            <span className="stat-val">0.72s (Ideal)</span>
                          </div>
                          <div className="speed-stat-item">
                            <span className="stat-dot" />
                            <span className="stat-label">CLS:</span>
                            <span className="stat-val">0.00 (Zero Shift)</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card B: Conversion & Pipeline Growth */}
                    <div className="metric-box growth-metric-box">
                      <div className="metric-box-top">
                        <span className="metric-title">Conversion Engine</span>
                        <span className="metric-badge-dark">+184% Lift</span>
                      </div>
                      <div className="growth-chart-wrap">
                        <svg className="growth-chart-svg" viewBox="0 0 200 70" fill="none">
                          <defs>
                            <linearGradient id="growthGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#B9FF66" stopOpacity="0.55" />
                              <stop offset="100%" stopColor="#B9FF66" stopOpacity="0.0" />
                            </linearGradient>
                          </defs>
                          {/* Grid line */}
                          <line x1="0" y1="65" x2="200" y2="65" stroke="#E2E2E2" strokeWidth="1" strokeDasharray="3 3" />
                          {/* Shaded Area */}
                          <path
                            d="M6 58 C38 54, 70 42, 106 32 C142 22, 168 12, 194 6 L194 65 L6 65 Z"
                            fill="url(#growthGrad)"
                          />
                          {/* Baseline line */}
                          <path
                            d="M6 58 C38 54, 70 42, 106 32 C142 22, 168 12, 194 6"
                            stroke="#191A23"
                            strokeWidth="2.8"
                            strokeLinecap="round"
                          />
                          {/* Data Nodes */}
                          <circle cx="6" cy="58" r="3" fill="#191A23" />
                          <circle cx="106" cy="32" r="3.5" fill="#191A23" />
                          <circle cx="194" cy="6" r="4.5" fill="#B9FF66" stroke="#191A23" strokeWidth="2" />
                        </svg>
                        <div className="growth-stats-row">
                          <span className="growth-sub-label">Avg. Inquiries</span>
                          <span className="growth-metric-val">28 Qualified / Wk</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Console Strip: Live Code & Frameworks */}
                  <div className="console-code-footer">
                    <div className="console-code-snippet">
                      <span className="code-kw">const</span> <span className="code-var">project</span> = <span className="code-fn">await</span> <span className="code-obj">Webnexora</span>.<span className="code-fn">scale</span>({'{'} <span className="code-key">speed</span>: <span className="code-str">'99'</span>, <span className="code-key">mobile</span>: <span className="code-bool">true</span> {'}'});
                    </div>
                    <div className="console-stack-chips">
                      <span className="stack-pill">React 19</span>
                      <span className="stack-pill">Next.js</span>
                      <span className="stack-pill highlight">Capacitor</span>
                      <span className="stack-pill">Edge CDN</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4 FLOATING NEO-BRUTALIST SATELLITE BADGES */}
              {/* Badge 1: Top Right - Mobile Apps */}
              <div className="console-satellite-badge sat-badge-tr">
                <span className="sat-icon-wrap">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#191A23" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <line x1="12" y1="18" x2="12.01" y2="18" />
                  </svg>
                </span>
                <span className="sat-text">iOS &amp; Android Apps</span>
              </div>

              {/* Badge 2: Top Left - Speed */}
              <div className="console-satellite-badge sat-badge-tl">
                <span className="sat-icon-circle-lime">⚡</span>
                <span className="sat-text">Sub-Second Load</span>
              </div>

              {/* Badge 3: Bottom Right - Growth Lift */}
              <div className="console-satellite-badge sat-badge-br">
                <span className="sat-arrow-dark">↗</span>
                <span className="sat-text">+184% Growth Lift</span>
              </div>

              {/* Badge 4: Bottom Left - Fixed Price */}
              <div className="console-satellite-badge sat-badge-bl">
                <span className="sat-chk-dark">✓</span>
                <span className="sat-text">100% Fixed-Price</span>
              </div>
            </div>
          </div>
        </div>

        {/* LOGO MARQUEE / TECH STACK ROW (Clean Single Line Marquee on Mobile, Static Row on Desktop) */}
        <div className="hero-logos-bar" data-aos>
          <div className="client-logos-track">
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

            {/* DUPLICATE ROW FOR SEAMLESS INFINITE ONE-LINER MARQUEE ON MOBILE */}
            <div className="client-logos-row client-logos-row-dup" aria-hidden="true">
              <div className="client-logo-item" title="React.js">
                <svg className="tech-logo-svg" viewBox="0 0 28 28" fill="none">
                  <ellipse cx="14" cy="14" rx="12" ry="4.8" stroke="#191A23" strokeWidth="1.8" transform="rotate(30 14 14)" />
                  <ellipse cx="14" cy="14" rx="12" ry="4.8" stroke="#191A23" strokeWidth="1.8" transform="rotate(90 14 14)" />
                  <ellipse cx="14" cy="14" rx="12" ry="4.8" stroke="#191A23" strokeWidth="1.8" transform="rotate(150 14 14)" />
                  <circle cx="14" cy="14" r="2.2" fill="#191A23" />
                </svg>
                <span className="tech-logo-name">React</span>
              </div>

              <div className="client-logo-item" title="Next.js">
                <svg className="tech-logo-svg" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="13" fill="#191A23" />
                  <path d="M10 9 V19 M10 9 L18.5 19 M18 9 V15" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="tech-logo-name">Next.js</span>
              </div>

              <div className="client-logo-item" title="Shopify">
                <svg className="tech-logo-svg" viewBox="0 0 28 28" fill="none">
                  <path d="M7 11 L14 7 L21 11 L19 23 L9 23 Z" fill="#191A23" />
                  <path d="M12 7 C12 5.5 12.8 4 14 4 C15.2 4 16 5.5 16 7" stroke="#191A23" strokeWidth="1.6" fill="none" />
                  <path d="M15.5 12.5 C15.5 11.5 14.5 11 13.8 11.3 C13 11.6 12.5 12.2 12.8 13.2 C13.2 14.5 15.6 14.8 15.6 16.5 C15.6 18 14.2 18.8 13 18.4 C12 18 11.5 17 11.5 17" stroke="#B9FF66" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span className="tech-logo-name">Shopify</span>
              </div>

              <div className="client-logo-item" title="Capacitor (Cross-Platform Mobile Apps)">
                <svg className="tech-logo-svg" viewBox="0 0 28 28" fill="none">
                  <rect x="2" y="2" width="24" height="24" rx="7" fill="#191A23" />
                  <path d="M9 8 L19 8 M9 20 L19 20 M14 8 L14 11.5 M14 16.5 L14 20 M8 11.5 L20 11.5 M8 16.5 L20 16.5" stroke="#B9FF66" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
                <span className="tech-logo-name">Capacitor</span>
              </div>

              <div className="client-logo-item" title="Vite">
                <svg className="tech-logo-svg" viewBox="0 0 28 28" fill="none">
                  <polygon points="4,7 24,4 17,25 11,25" fill="#191A23" />
                  <polygon points="12,10 18,9 14,20" fill="#B9FF66" />
                </svg>
                <span className="tech-logo-name">Vite</span>
              </div>

              <div className="client-logo-item" title="Google Lighthouse 99">
                <svg className="tech-logo-svg" viewBox="0 0 28 28" fill="none">
                  <rect x="2" y="3" width="24" height="22" rx="7" fill="#191A23" />
                  <text x="6" y="19" fontFamily="'Space Grotesk', sans-serif" fontSize="13" fontWeight="800" fill="#B9FF66">99</text>
                </svg>
                <span className="tech-logo-name">Lighthouse</span>
              </div>
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
