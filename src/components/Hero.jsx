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
  Smartphone,
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

          {/* RIGHT: BOLD 2D DIGITAL ARCHITECTURE CONSOLE (SIMPLE, 2D NOT 3D, NO GRAPHS) */}
          <div className="hero-visual" data-aos>
            <div className="hero-console-stage">
              {/* Main 2D Neo-Brutalist Window */}
              <div className="hero-console-window">
                {/* 1. Chrome Header Bar */}
                <div className="console-top-bar">
                  <div className="console-dots">
                    <span className="dot dot-red" />
                    <span className="dot dot-amber" />
                    <span className="dot dot-green" />
                  </div>
                  <div className="console-url-capsule">
                    <span className="url-secure-beacon" />
                    <span className="url-text">webnexora.com/build</span>
                  </div>
                  <span className="console-status-badge">
                    <span className="live-dot" /> PRODUCTION READY
                  </span>
                </div>

                {/* 2. Main Console Body */}
                <div className="console-body">
                  {/* Console Header Row */}
                  <div className="console-header-row">
                    <div className="console-brand-meta">
                      <div className="brand-dot-pulse" />
                      <div>
                        <strong className="console-brand-name">Webnexora Engine v2.4</strong>
                        <span className="console-brand-sub">Modern Web &amp; Mobile Ecosystem</span>
                      </div>
                    </div>
                    <span className="console-uptime-pill">
                      <Check size={12} strokeWidth={3} /> 99.9% Uptime Verified
                    </span>
                  </div>

                  {/* 2-Column Vitals & Deliverables Panels (100% Graph-Free) */}
                  <div className="console-panels-grid">
                    {/* Panel 1: Performance Vitals */}
                    <div className="console-sub-panel panel-vitals">
                      <div className="sub-panel-top">
                        <span className="sub-panel-label">CORE WEB VITALS</span>
                        <span className="google-badge">Google 99</span>
                      </div>
                      <div className="vitals-score-row">
                        <div className="vitals-circle-gauge">
                          <span className="gauge-number">99</span>
                          <span className="gauge-denom">/100</span>
                        </div>
                        <div className="vitals-checklist">
                          <div className="vital-item">
                            <span className="vital-dot lime" />
                            <span><strong>0.38s</strong> FCP (Instant)</span>
                          </div>
                          <div className="vital-item">
                            <span className="vital-dot lime" />
                            <span><strong>0.72s</strong> LCP (Ideal)</span>
                          </div>
                          <div className="vital-item">
                            <span className="vital-dot lime" />
                            <span><strong>0.00</strong> CLS (Zero Shift)</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Panel 2: Production Deliverables (Agency Stack, NO GRAPHS) */}
                    <div className="console-sub-panel panel-deliverables">
                      <div className="sub-panel-top">
                        <span className="sub-panel-label">DELIVERY STANDARD</span>
                        <span className="fixed-badge">Fixed-Price</span>
                      </div>
                      <div className="deliverables-checklist">
                        <div className="deliverable-item">
                          <span className="deliv-chk"><Check size={11} strokeWidth={3} /></span>
                          <span>Custom Web App (React 19 &amp; Next.js)</span>
                        </div>
                        <div className="deliverable-item">
                          <span className="deliv-chk"><Check size={11} strokeWidth={3} /></span>
                          <span>Native Mobile Apps (iOS &amp; Android)</span>
                        </div>
                        <div className="deliverable-item">
                          <span className="deliv-chk"><Check size={11} strokeWidth={3} /></span>
                          <span>Technical SEO &amp; Schema Tuned</span>
                        </div>
                      </div>
                      <div className="delivery-sla-row">
                        <span className="sla-dot" />
                        <span>Rapid 10–14 Day Delivery Guarantee</span>
                      </div>
                    </div>
                  </div>

                  {/* Terminal Code Strip */}
                  <div className="console-code-strip">
                    <div className="code-text-line">
                      <span className="code-keyword">const</span>{' '}
                      <span className="code-var">project</span> ={' '}
                      <span className="code-keyword">await</span>{' '}
                      <span className="code-fn">Webnexora</span>.
                      <span className="code-method">launch</span>(&#123;{' '}
                      <span className="code-prop">stack</span>: <span className="code-str">'Next.js'</span>,{' '}
                      <span className="code-prop">speed</span>: <span className="code-str">'99'</span>,{' '}
                      <span className="code-prop">mobile</span>: <span className="code-bool">true</span> &#125;);
                    </div>
                    <div className="code-stack-chips">
                      <span className="stack-pill">React 19</span>
                      <span className="stack-pill">Next.js</span>
                      <span className="stack-pill lime">Capacitor</span>
                      <span className="stack-pill">Edge CDN</span>
                      <span className="stack-pill">TypeScript</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4 PROMINENT 2D SATELLITE FLOATING BADGES */}
              {/* Satellite 1: Top-Left */}
              <div className="satellite-pill pill-top-left">
                <span className="sat-icon-lime"><Zap size={14} /></span>
                <span className="sat-text">Sub-Second Load</span>
              </div>

              {/* Satellite 2: Top-Right */}
              <div className="satellite-pill pill-top-right">
                <span className="sat-icon-dark"><Smartphone size={14} /></span>
                <span className="sat-text">iOS &amp; Android Apps</span>
              </div>

              {/* Satellite 3: Bottom-Left */}
              <div className="satellite-pill pill-bottom-left">
                <span className="sat-icon-check"><Check size={13} strokeWidth={3} /></span>
                <span className="sat-text">100% Fixed-Price</span>
              </div>

              {/* Satellite 4: Bottom-Right */}
              <div className="satellite-pill pill-bottom-right">
                <span className="sat-icon-shield"><ShieldCheck size={13} strokeWidth={2.6} /></span>
                <span className="sat-text">Production Ready</span>
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
