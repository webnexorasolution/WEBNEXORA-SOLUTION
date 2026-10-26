import { useRef } from 'react';
import './Services.css';

const services = [
  {
    icon: '⌘',
    badge: 'Custom Code',
    title: 'Website Development',
    desc: 'Professional business websites with clean layouts, clear content and fully responsive design built for conversions.',
    color: '#5b21f5',
    features: ['Custom HTML/CSS/JS', '100% Mobile Ready', 'High-Speed Performance']
  },
  {
    icon: '🛍',
    badge: 'Storefronts',
    title: 'E-Commerce Websites',
    desc: 'Feature-rich online store experiences to showcase your products and make shopping seamless for customers.',
    color: '#a855f7',
    features: ['Product Catalogs', 'Payment Gateways', 'Inventory Sync']
  },
  {
    icon: 'Ⓦ',
    badge: 'Easy CMS',
    title: 'WordPress Development',
    desc: 'Manageable WordPress websites tailored to your content, goals and day-to-day business needs.',
    color: '#06b6d4',
    features: ['Elementor / Custom', 'Easy Dashboard', 'Security Hardened']
  },
  {
    icon: '✳',
    badge: 'Figma to Code',
    title: 'UI/UX Design',
    desc: 'Intuitive page structure and user-friendly interfaces that guide visitors to exactly what they need.',
    color: '#7c3aff',
    features: ['Wireframes & Prototypes', 'Modern Aesthetics', 'User-Centric Journeys']
  },
  {
    icon: '⌕',
    badge: 'Rank #1',
    title: 'SEO Services',
    desc: 'Search-optimised website foundations and content improvements to boost your visibility and discoverability.',
    color: '#5b21f5',
    features: ['On-Page Optimization', 'Keyword Strategy', 'Speed & Meta Audits']
  },
  {
    icon: '↗',
    badge: 'ROI Focused',
    title: 'Digital Marketing',
    desc: 'Targeted digital campaigns and content strategies to help your brand reach and engage its ideal audience.',
    color: '#a855f7',
    features: ['Social Media Ads', 'Conversion Funnels', 'Brand Awareness']
  },
];

export default function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="srv-orb orb" />
      <div className="container">
        <div className="section-head" data-aos>
          <div className="eyebrow">What We Do</div>
          <h2>Digital Services for Your Business</h2>
          <p>From your first website to your next online campaign, get the key digital services you need — all in one place.</p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <article key={s.title} className="service-card-3d" data-aos style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="card-inner">
                {/* FRONT */}
                <div className="card-face card-front glass-card">
                  <div className="svc-icon-box" style={{ '--icon-color': s.color }}>
                    <div className="svc-icon-glow" style={{ background: `radial-gradient(circle, ${s.color}66 0%, transparent 70%)` }} />
                    <span className="svc-symbol">{s.icon}</span>
                  </div>
                  <div className="svc-badge" style={{ color: s.color, borderColor: `${s.color}44` }}>{s.badge}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <span className="hover-hint">Hover to explore features ↻</span>
                </div>

                {/* BACK */}
                <div className="card-face card-back" style={{ background: `linear-gradient(135deg, ${s.color}22, #0d1020)`, borderColor: `${s.color}44` }}>
                  <div className="back-top">
                    <span className="back-badge" style={{ background: `${s.color}33`, color: s.color }}>{s.title}</span>
                  </div>
                  <ul className="back-features">
                    {s.features.map((feat) => (
                      <li key={feat}>
                        <span className="feat-check" style={{ color: s.color }}>✓</span> {feat}
                      </li>
                    ))}
                  </ul>
                  <a className="btn btn-primary back-cta" href="#contact" style={{ background: `linear-gradient(135deg, ${s.color}, #5b21f5)` }}>
                    Get Started →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="services-bottom" data-aos>
          <a className="btn btn-outline" href="#contact" id="all-services-btn">View All Services →</a>
        </div>
      </div>
    </section>
  );
}
