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
          <h2>Architected for Conversion, Built for Scale</h2>
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

        {/* METRICS ROW (Clean White Bento Capsules) */}
        <div className="why-metrics-bar" data-aos>
          <div className="why-metric-item">
            <span className="wm-num">150+</span>
            <span className="wm-lbl">Deployments Live</span>
          </div>

          <div className="why-metric-item">
            <span className="wm-num">98%</span>
            <span className="wm-lbl">Client Retention</span>
          </div>

          <div className="why-metric-item">
            <span className="wm-num" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
              5.0 <Star size={17} fill="#121212" color="#121212" />
            </span>
            <span className="wm-lbl">5-Star Client Rating</span>
          </div>

          <div className="why-metric-item">
            <span className="wm-num">24/7</span>
            <span className="wm-lbl">Dedicated Engineering</span>
          </div>

          <Link className="btn btn-primary why-cta" to="/about" id="why-cta-btn">
            Explore Agency DNA <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
