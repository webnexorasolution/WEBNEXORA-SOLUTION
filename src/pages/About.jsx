import { Link } from 'react-router-dom';
import {
  Zap,
  Target,
  Handshake,
  ShieldCheck,
  Star,
  X,
  Check,
  ArrowUpRight,
  ArrowRight,
  Clock,
  MessageCircle,
  Code2,
  Sparkles,
  Layers,
} from 'lucide-react';
import './About.css';

const values = [
  {
    Icon: Zap,
    color: '#4f46e5',
    title: 'Engineering Precision',
    desc: 'We write lean, modular, semantic code with zero unnecessary bloat. Every asset is optimized, ensuring sub-second load times and high Core Web Vitals scores.',
  },
  {
    Icon: Target,
    color: '#7c3aff',
    title: 'Conversion-First Design',
    desc: 'Aesthetics must serve business intent. Our UI/UX design systems are purposefully crafted around user journeys, psychology, and measurable lead generation.',
  },
  {
    Icon: Handshake,
    color: '#0284c7',
    title: 'Radical Transparency',
    desc: 'No vague jargon or hidden costs. We provide clear milestone roadmaps, weekly staging previews, and direct access to your lead engineer throughout the project.',
  },
  {
    Icon: ShieldCheck,
    color: '#10b981',
    title: 'Long-Term Reliability',
    desc: 'We build future-proof architectures that scale as your traffic grows. Every project is tested across hundreds of screen sizes and backed by our warranty.',
  },
];

const comparisons = [
  {
    metric: 'Project Timeline',
    category: 'Velocity',
    Icon: Clock,
    traditional: '4–6 months with scope creep and delays',
    webnexora: '2–4 weeks with focused, agile sprint delivery',
    highlight: true,
  },
  {
    metric: 'Performance & Speed',
    category: 'Architecture',
    Icon: Zap,
    traditional: 'Bloated themes scoring < 50 on Google PageSpeed',
    webnexora: 'Clean architecture scoring 95+ Core Web Vitals',
    highlight: true,
  },
  {
    metric: 'Client Communication',
    category: 'Collaboration',
    Icon: MessageCircle,
    traditional: 'Slow ticketing systems & non-technical middlemen',
    webnexora: 'Direct WhatsApp & engineer-level Slack channels',
    highlight: false,
  },
  {
    metric: 'SEO & Technical Setup',
    category: 'Optimization',
    Icon: Layers,
    traditional: 'Treated as an expensive add-on or ignored',
    webnexora: 'Built-in semantic schema, meta tags & sitemap',
    highlight: false,
  },
  {
    metric: 'Codebase Ownership',
    category: 'IP Rights',
    Icon: Code2,
    traditional: 'Proprietary platform lock-in & ongoing license fees',
    webnexora: '100% Client-Owned Git repo & raw design files',
    highlight: true,
  },
  {
    metric: 'Post-Launch Support',
    category: 'Reliability',
    Icon: ShieldCheck,
    traditional: 'High hourly billing even for basic fixes',
    webnexora: '30-Day Hypercare Warranty & Free SLA tuning',
    highlight: false,
  },
];

export default function About() {
  return (
    <div className="about-page">
      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content" data-aos>
            <div className="eyebrow">
              <span className="eyebrow-dot" /> About Webnexora Solution
            </div>
            <h1>
              We Engineer Digital Experiences That{' '}
              <span className="gradient-text">Drive Measurable Growth</span>
            </h1>
            <p className="about-hero-lead">
              Webnexora Solution was founded on a simple conviction: modern businesses deserve
              websites that combine striking modern design with high-performance engineering
              and genuine conversion focus.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION & STORY SECTION */}
      <section className="section about-story-section">
        <div className="container">
          <div className="about-story-grid">
            <div className="story-card glass-card" data-aos>
              <span className="story-badge">Our Origin &amp; Mission</span>
              <h2>Crafting the New Standard for Agency Excellence</h2>
              <p>
                Too many digital agencies build slow, generic websites that look impressive on desktop
                but fail on mobile, rank poorly on search engines, and convert zero visitors into leads.
              </p>
              <p>
                At Webnexora Solution, we blend design sophistication with full-stack technical mastery.
                Whether we are crafting a bespoke corporate platform, a high-converting e-commerce
                storefront, or an intuitive web application, our goal is always clear: to build a digital
                asset that directly increases your revenue and prestige.
              </p>
              <div className="story-signature">
                <strong>Webnexora Solution Leadership</strong>
                <span>Engineering &amp; Strategy Team</span>
              </div>
            </div>

            <div className="story-stats-grid" data-aos>
              <div className="about-stat-tile glass-card">
                <span className="stat-number">150+</span>
                <span className="stat-title">Projects Shipped</span>
                <p className="stat-desc">Delivered on time across technology, retail, consulting, and finance.</p>
              </div>

              <div className="about-stat-tile glass-card">
                <span className="stat-number">98%</span>
                <span className="stat-title">Client Satisfaction</span>
                <p className="stat-desc">Our clients stay with us for long-term growth and digital scaling.</p>
              </div>

              <div className="about-stat-tile glass-card">
                <span className="stat-number">&lt;0.8s</span>
                <span className="stat-title">Avg. Load Speed</span>
                <p className="stat-desc">Blazing fast response times across global CDN endpoints.</p>
              </div>

              <div className="about-stat-tile glass-card">
                <span className="stat-number" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  5.0 <Star size={20} fill="#f59e0b" color="#f59e0b" />
                </span>
                <span className="stat-title">Client Rating</span>
                <p className="stat-desc">Consistently verified 5-star feedback across all deliverables.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="section about-values-section">
        <div className="container">
          <div className="section-head" data-aos>
            <div className="eyebrow">Our Guiding Pillars</div>
            <h2>What Sets Our Work Apart</h2>
            <p>Every line of code we write and every layout we design is governed by four core commitments.</p>
          </div>

          <div className="values-grid">
            {values.map((v, i) => {
              const IconComp = v.Icon;
              return (
                <div
                  key={v.title}
                  className="value-card glass-card"
                  data-aos
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div
                    className="value-icon-box"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      background: '#f8fafc',
                      border: 'var(--stroke)',
                      color: v.color,
                      marginBottom: '18px',
                      boxShadow: '0 2px 6px rgba(160, 175, 200, 0.12)',
                    }}
                  >
                    <IconComp size={24} strokeWidth={2} />
                  </div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* THE DIFFERENCE TABLE */}
      <section className="section about-comparison-section">
        <div className="container">
          <div className="section-head" data-aos>
            <div className="eyebrow">The Webnexora Standard</div>
            <h2>Why Companies Choose Us Over Others</h2>
            <p>A transparent comparison of how we approach digital projects differently.</p>
          </div>

          <div className="comparison-table-wrap glass-card" data-aos>
            <div className="table-top-bar">
              <span className="table-benchmark-tag">
                <span className="benchmark-dot" /> Direct Head-to-Head Agency Benchmark
              </span>
              <span className="table-legend">Audited Standards &amp; Deliverables</span>
            </div>

            <div className="table-header">
              <div className="col-metric">Operational Metric</div>
              <div className="col-trad">Traditional Agencies</div>
              <div className="col-webn">
                <span className="webn-badge-highlight">
                  <Sparkles size={13} color="#EEFD44" /> The Webnexora Standard
                </span>
              </div>
            </div>

            <div className="table-rows">
              {comparisons.map((c) => {
                const RowIcon = c.Icon;
                return (
                  <div
                    key={c.metric}
                    className={`table-row ${c.highlight ? 'row-highlighted' : ''}`}
                  >
                    <div className="cell-metric">
                      <div className="metric-icon-box">
                        <RowIcon size={15} />
                      </div>
                      <div className="metric-text-wrap">
                        <strong>{c.metric}</strong>
                        <span className="metric-category">{c.category}</span>
                      </div>
                    </div>

                    <div className="cell-trad">
                      <span className="badge-trad">
                        <X size={12} strokeWidth={3} />
                      </span>
                      <span className="trad-text">{c.traditional}</span>
                    </div>

                    <div className="cell-webn">
                      <span className="badge-webn">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span className="webn-text">{c.webnexora}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT CTA */}
      <section className="section about-cta-section">
        <div className="container">
          <div className="about-cta-card glass-card" data-aos>
            <h2>Ready to Elevate Your Digital Footprint?</h2>
            <p>Let's discuss your project goals, scope, and timeline during a free strategy session.</p>
            <div className="cta-actions">
              <Link
                className="btn btn-primary"
                to="/contact"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                Schedule a Consultation <ArrowUpRight size={16} />
              </Link>
              <Link
                className="btn btn-outline"
                to="/portfolio"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                Explore Our Work <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
