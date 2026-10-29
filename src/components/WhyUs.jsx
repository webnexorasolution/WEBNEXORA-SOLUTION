import { Link } from 'react-router-dom';
import {
  Layout,
  Zap,
  Target,
  ShieldCheck,
  Star,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Cpu,
  Globe,
  Award,
  Activity,
} from 'lucide-react';
import './WhyUs.css';

const benefits = [
  {
    icon: <Layout size={22} color="#121212" strokeWidth={2.2} />,
    title: 'Responsive & Adaptive',
    tag: 'Screen Fluid',
    desc: 'Engineered across all screen sizes, from mobile phones to high-resolution ultrawide desktop monitors.',
  },
  {
    icon: <Zap size={22} color="#121212" strokeWidth={2.2} />,
    title: 'Sub-Second Speeds',
    tag: 'Core Web Vitals',
    desc: 'Optimized assets, minimal bundle footprint, and edge delivery guarantee instant loads and superior Google ranking.',
  },
  {
    icon: <Target size={22} color="#121212" strokeWidth={2.2} />,
    title: 'Conversion-First UX',
    tag: 'High Intent',
    desc: 'Semantic structure and frictionless user funnels scientifically designed to turn casual visitors into high-value leads.',
  },
  {
    icon: <ShieldCheck size={22} color="#121212" strokeWidth={2.2} />,
    title: 'Transparent Sprints',
    tag: 'Zero Surprises',
    desc: 'Real-time roadmap visibility, strict timeline commitments, and weekly staging updates with no hidden fees.',
  },
];

export default function WhyUs() {
  return (
    <section className="section why-section" id="why-us">
      <div className="container">
        <div className="section-head" data-aos>
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            The Webnexora Advantage
          </div>
          <h2>
            Architected for Conversion,{' '}
            <span className="title-gradient-accent">Built for Scale</span>
          </h2>
          <p>
            We eliminate digital friction so your business captures more leads, converts more customers,
            and maintains an unshakeable competitive edge.
          </p>
        </div>

        {/* BENTO BENEFIT GRID */}
        <div className="why-bento-grid">
          {benefits.map((b, i) => (
            <article
              key={b.title}
              className="why-card bento-card"
              data-aos
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="why-card-top">
                <div className="why-icon-box">{b.icon}</div>
                <span className="why-pill-tag">{b.tag}</span>
              </div>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </article>
          ))}

          {/* SIGNATURE ELECTRIC LIME SPOTLIGHT CARD (Embodying reference UI) */}
          <article className="why-card why-card-spotlight" data-aos>
            <div className="spotlight-badge">
              <Sparkles size={14} color="#121212" />
              <span>Conversion Engine</span>
            </div>
            <div className="spotlight-stat">
              <span className="spotlight-num">+184%</span>
              <span className="spotlight-label">Average Inbound Growth</span>
            </div>
            <p className="spotlight-desc">
              Clients switching to Webnexora modern architecture report doubled inquiry volume within 60 days of deployment.
            </p>
            <div className="spotlight-chips">
              <span className="spotlight-chip"><TrendingUp size={12} /> High Intent Funnels</span>
              <span className="spotlight-chip"><Cpu size={12} /> 99/100 Lighthouse</span>
            </div>
          </article>
        </div>

        {/* EXECUTIVE TRUST COMMAND DECK */}
        <div className="why-metrics-bar executive-trust-bar" data-aos>
          {/* Subtle luminous ambient glow */}
          <div className="trust-bar-ambient-glow" />

          {/* Stat 1: Deployments */}
          <div className="trust-metric-cell">
            <div className="tm-icon-wrap lime-glow">
              <Globe size={18} strokeWidth={2.2} />
            </div>
            <div className="tm-content">
              <div className="tm-val-row">
                <span className="tm-val">150+</span>
                <span className="tm-badge tm-badge-lime">Global</span>
              </div>
              <span className="tm-title">Deployments Live</span>
            </div>
          </div>

          <div className="tm-divider" />

          {/* Stat 2: Retention */}
          <div className="trust-metric-cell">
            <div className="tm-icon-wrap emerald-glow">
              <ShieldCheck size={18} strokeWidth={2.2} />
            </div>
            <div className="tm-content">
              <div className="tm-val-row">
                <span className="tm-val">98%</span>
                <span className="tm-badge tm-badge-green">Recurring</span>
              </div>
              <span className="tm-title">Client Retention</span>
            </div>
          </div>

          <div className="tm-divider" />

          {/* Stat 3: 5-Star Rating */}
          <div className="trust-metric-cell">
            <div className="tm-icon-wrap amber-glow">
              <Award size={18} strokeWidth={2.2} />
            </div>
            <div className="tm-content">
              <div className="tm-val-row">
                <span className="tm-val">5.0</span>
                <div className="tm-stars">
                  <Star size={12} fill="#F59E0B" color="#F59E0B" />
                  <Star size={12} fill="#F59E0B" color="#F59E0B" />
                  <Star size={12} fill="#F59E0B" color="#F59E0B" />
                  <Star size={12} fill="#F59E0B" color="#F59E0B" />
                  <Star size={12} fill="#F59E0B" color="#F59E0B" />
                </div>
              </div>
              <span className="tm-title">5-Star Verified</span>
            </div>
          </div>

          <div className="tm-divider" />

          {/* Stat 4: 24/7 Engineering */}
          <div className="trust-metric-cell">
            <div className="tm-icon-wrap cyan-glow">
              <Activity size={18} strokeWidth={2.2} />
              <span className="tm-live-ping" />
            </div>
            <div className="tm-content">
              <div className="tm-val-row">
                <span className="tm-val">24/7</span>
                <span className="tm-badge tm-badge-cyan">Active</span>
              </div>
              <span className="tm-title">Dedicated Support</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="tm-cta-wrap">
            <Link className="tm-cta-btn" to="/about" id="why-cta-btn">
              <span>Explore Agency DNA</span>
              <span className="tm-cta-arrow-pill">
                <ArrowRight size={14} strokeWidth={2.6} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
