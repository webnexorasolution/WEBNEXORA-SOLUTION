import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  Zap,
  Sparkles,
  ShieldCheck,
  Star,
  Layers,
  Code2,
  ShoppingBag,
  Activity,
  Compass,
  Target,
} from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        {/* HERO INTRO COPY */}
        <div className="hero-copy" data-aos>
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Website Development &amp; Digital Strategy
          </div>

          <h1>
            We Build Fast, High-Converting Websites That{' '}
            <span className="hero-highlight">Scale Your Business.</span>
          </h1>

          <p className="hero-lead">
            Webnexora Solution delivers custom web applications, bespoke e-commerce platforms,
            and conversion-focused digital experiences engineered with speed, precision, and aesthetics.
          </p>

          <div className="hero-actions">
            <a
              className="btn btn-primary"
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener"
              id="hero-cta-primary"
            >
              Get a Free Consultation <ArrowUpRight size={16} />
            </a>
            <Link className="btn btn-outline" to="/portfolio" id="hero-cta-portfolio">
              Explore Our Work <ArrowRight size={16} />
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

        {/* HERO BENTO SHOWCASE (Styled in the exact theme) */}
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
              {/* Stage 1: Completed */}
              <div className="milestone-stage-row stage-completed">
                <div className="milestone-row-top">
                  <div className="milestone-label-group">
                    <span className="milestone-step-badge done">
                      <Check size={11} strokeWidth={3} />
                    </span>
                    <span className="milestone-name">UI/UX & Design Architecture</span>
                  </div>
                  <span className="milestone-pct done">100%</span>
                </div>
                <div className="milestone-bar-track">
                  <div className="milestone-bar-fill done" style={{ width: '100%' }} />
                </div>
              </div>

              {/* Stage 2: Active Production */}
              <div className="milestone-stage-row stage-active">
                <div className="milestone-row-top">
                  <div className="milestone-label-group">
                    <span className="milestone-step-badge active">
                      <span className="badge-pulse-inner" />
                    </span>
                    <span className="milestone-name">Full-Stack & Headless Dev</span>
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

              {/* Stage 3: Queued for Launch */}
              <div className="milestone-stage-row stage-queued">
                <div className="milestone-row-top">
                  <div className="milestone-label-group">
                    <span className="milestone-step-badge queued">03</span>
                    <span className="milestone-name">Core Web Vitals & Launch QA</span>
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

          {/* Bento Card 3: LIGHTHOUSE / PERFORMANCE SCORE */}
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

          {/* Bento Card 4: AGENCY VERIFIED TRACK RECORD */}
          <div className="bento-card hero-card-metrics">
            <div className="bento-card-top">
              <span className="bento-pill-muted">Client Outcomes</span>
              <span className="star-rating-pill">
                5.0 <Star size={12} fill="#121212" color="#121212" />
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
