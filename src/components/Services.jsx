import { Link } from 'react-router-dom';
import {
  Code2,
  ShoppingBag,
  Globe2,
  Palette,
  SearchCheck,
  TrendingUp,
  Check,
  ArrowRight,
} from 'lucide-react';
import './Services.css';

const services = [
  {
    Icon: Code2,
    badge: 'Custom Code',
    title: 'Website Development',
    desc: 'Professional business websites with clean layouts, clear messaging, and fully responsive code built for conversions.',
    color: '#4f46e5',
    features: ['Custom HTML/CSS/JS & React', '100% Mobile Responsive', 'Lightning-Fast Load Speeds'],
  },
  {
    Icon: ShoppingBag,
    badge: 'Storefronts',
    title: 'E-Commerce Websites',
    desc: 'Feature-rich online store experiences to showcase your catalog and make shopping frictionless for your customers.',
    color: '#7c3aff',
    features: ['Modern Product Catalogs', 'Secure Payment Gateways', 'Inventory & Order Tracking'],
  },
  {
    Icon: Globe2,
    badge: 'Easy CMS',
    title: 'WordPress Development',
    desc: 'Customizable, easy-to-manage WordPress solutions tailored to your team, workflow, and long-term business goals.',
    color: '#0284c7',
    features: ['Custom Themes & Blocks', 'Simple Content Dashboard', 'Hardened Security & Backups'],
  },
  {
    Icon: Palette,
    badge: 'Figma to Code',
    title: 'UI/UX Design',
    desc: 'Intuitive page structures, design systems, and user journeys that guide visitors straight to conversion.',
    color: '#6366f1',
    features: ['Wireframes & High-Fi Prototypes', 'Modern Aesthetic Guidelines', 'Conversion-Optimized UX'],
  },
  {
    Icon: SearchCheck,
    badge: 'Rank #1',
    title: 'SEO & Optimization',
    desc: 'Search-optimized website foundations, technical speed audits, and keyword strategies to increase organic visibility.',
    color: '#0ea5e9',
    features: ['On-Page Meta & Schema', 'Core Web Vitals Tuning', 'Keyword & Competitor Strategy'],
  },
  {
    Icon: TrendingUp,
    badge: 'ROI Focused',
    title: 'Digital Marketing',
    desc: 'Targeted campaigns and digital marketing roadmaps to help your business reach, engage, and convert ideal audiences.',
    color: '#8b5cf6',
    features: ['High-Converting Funnels', 'Social & Search Ad Strategy', 'Analytics & ROI Reporting'],
  },
];

export default function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="srv-orb orb" />
      <div className="container">
        <div className="section-head" data-aos>
          <div className="eyebrow">
            <span className="eyebrow-dot" /> Our Core Expertise
          </div>
          <h2>
            Digital Solutions{' '}
            <span className="title-highlight">Engineered for Growth.</span>
          </h2>
          <p>
            From custom high-performance websites to full-funnel digital marketing,
            we provide the core digital capabilities your business needs to succeed.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => {
            const IconComponent = s.Icon;
            return (
              <article
                key={s.title}
                className="service-card glass-card"
                data-aos
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="svc-header">
                  <div className="svc-icon-box" style={{ '--icon-color': s.color }}>
                    <IconComponent size={24} color={s.color} strokeWidth={2} />
                  </div>
                  <span className="svc-badge" style={{ color: s.color }}>
                    {s.badge}
                  </span>
                </div>

                <h3>{s.title}</h3>
                <p className="svc-desc">{s.desc}</p>

                <div className="svc-divider" />

                <ul className="svc-features">
                  {s.features.map((feat) => (
                    <li key={feat}>
                      <span className="feat-check" style={{ color: s.color, display: 'inline-flex', alignItems: 'center' }}>
                        <Check size={14} strokeWidth={2.5} />
                      </span>
                      {feat}
                    </li>
                  ))}
                </ul>

                <Link
                  className="btn btn-outline svc-action-btn"
                  to="/services"
                  id={`svc-btn-${i}`}
                  style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                >
                  Learn More <ArrowRight size={15} />
                </Link>
              </article>
            );
          })}
        </div>

        <div className="services-bottom" data-aos>
          <Link
            className="btn btn-primary"
            to="/services"
            id="all-services-btn"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            View All Services &amp; Packages <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
