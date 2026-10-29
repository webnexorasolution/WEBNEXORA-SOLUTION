import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, TrendingUp } from 'lucide-react';
import './PortfolioPage.css';

const categories = ['All', 'E-Commerce', 'Corporate', 'SaaS & Tech', 'Creative'];

const portfolioProjects = [
  {
    id: 1,
    category: 'E-Commerce',
    title: (
      <>
        OmniRetail Luxury <span className="title-highlight">Storefront.</span>
      </>
    ),
    client: 'OmniBrand Global',
    metric: '+214% Checkout Conversion',
    desc: 'Complete redesign and custom storefront build. Optimized for mobile shoppers with one-click payment flows and instant product search.',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=80',
    tags: ['Custom Storefront', 'Stripe Payments', 'Sub-second Load'],
  },
  {
    id: 2,
    category: 'Corporate',
    title: (
      <>
        Apex Global <span className="title-highlight">Consulting Platform.</span>
      </>
    ),
    client: 'Apex Partners International',
    metric: '+180% Inbound Lead Growth',
    desc: 'High-authority corporate web presence with interactive case study libraries, practice area directories, and strategic executive lead capture.',
    img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=80',
    tags: ['Next.js Architecture', 'Lead Capture Funnels', 'SEO Domination'],
  },
  {
    id: 3,
    category: 'Creative',
    title: (
      <>
        Aura Architectural <span className="title-highlight">Studio.</span>
      </>
    ),
    client: 'Aura Design Group',
    metric: '0.6s Mobile Load Time',
    desc: 'Minimalist editorial digital experience showcasing award-winning architectural portfolios with fluid grid navigation and subtle interactive depth.',
    img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1000&q=80',
    tags: ['Interactive Portfolio', 'Ultra-Minimal UI', 'High-Res CDN'],
  },
  {
    id: 4,
    category: 'SaaS & Tech',
    title: (
      <>
        NovaPay Financial <span className="title-highlight">Analytics.</span>
      </>
    ),
    client: 'NovaPay Solutions',
    metric: '99/100 Core Web Vitals',
    desc: 'Enterprise marketing website and product tour for a next-generation payments API platform, designed to convert developer teams and CFOs.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    tags: ['Developer Docs', 'Live Interactive Demos', 'Enterprise Security'],
  },
  {
    id: 5,
    category: 'E-Commerce',
    title: (
      <>
        Verdant Organic <span className="title-highlight">Botanical Goods.</span>
      </>
    ),
    client: 'Verdant Living Inc.',
    metric: '3.4x Repeat Customer Orders',
    desc: 'Direct-to-consumer e-commerce portal with subscription re-ordering, customer loyalty accounts, and seamless multi-channel inventory sync.',
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80',
    tags: ['Subscription Engine', 'Custom Theme', 'Klaviyo Sync'],
  },
  {
    id: 6,
    category: 'Corporate',
    title: (
      <>
        Zenith Legal &amp; <span className="title-highlight">Advisory Group.</span>
      </>
    ),
    client: 'Zenith Partners LLP',
    metric: '#1 Google Rank on 18 Keywords',
    desc: 'Bespoke website with practice group portals, secure client intake documents, and search engine architecture that dominates local rankings.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    tags: ['Schema Integration', 'Client Intake Portal', 'Speed Hardened'],
  },
];

export default function PortfolioPage() {
  const [activeCat, setActiveCat] = useState('All');

  const filtered = activeCat === 'All'
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === activeCat);

  return (
    <div className="portfolio-page">
      {/* HERO */}
      <section className="portfolio-hero">
        <div className="container">
          <div className="portfolio-hero-content" data-aos>
            <div className="eyebrow">
              <span className="eyebrow-dot" /> Proven Track Record
            </div>
            <h1>
              Case Studies &amp;{' '}
              <span className="title-highlight">Featured Outcomes.</span>
            </h1>
            <p className="portfolio-hero-lead">
              Explore how we have partnered with emerging startups and established enterprises
              to engineer websites that drive revenue, increase prestige, and scale traffic.
            </p>
          </div>
        </div>
      </section>

      {/* FILTER TABS & SHOWCASE */}
      <section className="section portfolio-showcase-section">
        <div className="container">
          {/* CATEGORY TABS */}
          <div className="filter-tabs-bar" data-aos>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`tab-btn${activeCat === cat ? ' active' : ''}`}
                onClick={() => setActiveCat(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* PROJECT GRID */}
          <div className="portfolio-projects-grid">
            {filtered.map((proj, i) => (
              <article
                key={proj.id}
                className="portfolio-item-card glass-card"
                data-aos
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="item-media">
                  <img src={proj.img} alt={proj.client} loading="lazy" />
                  <div className="item-metric-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                    <TrendingUp size={13} strokeWidth={2.5} color="#10b981" /> {proj.metric}
                  </div>
                </div>

                <div className="item-info">
                  <div className="item-meta">
                    <span className="item-cat-badge">{proj.category}</span>
                    <span className="item-client">{proj.client}</span>
                  </div>

                  <h3>{proj.title}</h3>
                  <p>{proj.desc}</p>

                  <div className="item-tags">
                    {proj.tags.map((t) => (
                      <span key={t} className="tag-chip">
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    className="btn btn-outline item-cta-btn"
                    to="/contact"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                  >
                    Discuss a Project Like This <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO BOTTOM CTA */}
      <section className="section portfolio-cta-section">
        <div className="container">
          <div className="portfolio-cta-banner glass-card" data-aos>
            <div className="eyebrow" style={{ margin: '0 auto 16px' }}>
              <span className="eyebrow-dot" /> Let's Collaborate
            </div>
            <h2>
              Have a Vision for <span className="title-highlight">Your Brand?</span>
            </h2>
            <p>Let's engineer a digital experience that puts your business at the forefront of your industry.</p>
            <div className="cta-actions">
              <Link
                className="btn btn-primary"
                to="/contact"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                Start Your Project Today <ArrowUpRight size={16} />
              </Link>
              <Link
                className="btn btn-outline"
                to="/process"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                Explore Our 5-Stage Process <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
