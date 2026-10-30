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

          {/* Bento Card 2: PRODUCTION VELOCITY & SPRINT CARD */}
          <div className="bento-card hero-card-sprints">
            <div className="bento-card-top">
              <div className="bento-card-title-group">
                <span className="bento-icon-box sprint-icon-box">
                  <Layers size={14} strokeWidth={2.2} />
                </span>
                <div className="bento-title-text-wrap">
                  <strong className="bento-heading-text">
                    Live Project <span className="title-highlight">Roadmap.</span>
                  </strong>
                  <span className="bento-title-sub">Active Production Queue</span>
                </div>
              </div>
              <span className="sprint-status-pill-live">
                <span className="sprint-pulse-beacon" />
                <span>3 Active Sprints</span>
              </span>
            </div>

            <div className="sprint-rows-container">
              <div className="sprint-item">
                <div className="sprint-item-main">
                  <div className="sprint-avatar">
                    <ShoppingBag size={14} strokeWidth={2.2} />
                  </div>
                  <div className="sprint-info">
                    <strong>Luxury E-Commerce Flagship</strong>
                    <div className="sprint-tags">
                      <span className="sprint-tech">Shopify Headless</span>
                      <span className="sprint-sep">/</span>
                      <span className="sprint-phase">Launch Phase</span>
                    </div>
                  </div>
                </div>
                <div className="sprint-status-wrap">
                  <span className="sprint-status-badge status-badge-live">
                    <span className="badge-dot" /> Live QA
                  </span>
                </div>
              </div>

              <div className="sprint-item">
                <div className="sprint-item-main">
                  <div className="sprint-avatar">
                    <Activity size={14} strokeWidth={2.2} />
                  </div>
                  <div className="sprint-info">
                    <strong>Fintech SaaS Platform</strong>
                    <div className="sprint-tags">
                      <span className="sprint-tech">Next.js + TS</span>
                      <span className="sprint-sep">/</span>
                      <span className="sprint-phase">Sprint 3</span>
                    </div>
                  </div>
                </div>
                <div className="sprint-status-wrap">
                  <span className="sprint-status-badge status-badge-confirmed">
                    <span className="badge-dot" /> In Progress
                  </span>
                </div>
              </div>

              <div className="sprint-item">
                <div className="sprint-item-main">
                  <div className="sprint-avatar">
                    <Compass size={14} strokeWidth={2.2} />
                  </div>
                  <div className="sprint-info">
                    <strong>Global Advisory Portal</strong>
                    <div className="sprint-tags">
                      <span className="sprint-tech">Design System</span>
                      <span className="sprint-sep">/</span>
                      <span className="sprint-phase">Final Review</span>
                    </div>
                  </div>
                </div>
                <div className="sprint-status-wrap">
                  <span className="sprint-status-badge status-badge-scheduled">
                    <span className="badge-dot" /> Scheduled
                  </span>
                </div>
              </div>
            </div>

            <div className="delivery-guarantee-strip">
              <div className="guarantee-meta">
                <ShieldCheck size={14} className="guarantee-icon" />
                <span>On-Time Milestone SLA</span>
              </div>
              <span className="guarantee-badge">
                <span className="guarantee-dot">●</span> 100% Guaranteed
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
