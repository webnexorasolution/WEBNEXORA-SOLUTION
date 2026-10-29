import { Link } from 'react-router-dom';
import {
  Smartphone,
  Zap,
  ShieldCheck,
  Search,
  MessageSquare,
  Award,
  Check,
  ArrowUpRight,
} from 'lucide-react';
import { CardSplitAccordian } from '@/components/ui/card-split-accordian';
import './ServicesPage.css';

const detailedServices = [
  {
    id: 'web-dev',
    badge: 'Core Specialty',
    title: 'Custom Website Development',
    tagline: 'Lightning-fast, bespoke websites engineered to turn visitors into customers.',
    desc: 'We build tailored digital homes from the ground up without restrictive templates or messy page builder bloat. Built with modern web standards (React, Next.js, and clean semantic code), your site will load instantly and function smoothly across every device.',
    deliverables: [
      'Custom frontend architecture tailored to your brand identity',
      'Fluid responsiveness tested across 20+ mobile and desktop resolutions',
      'Sub-second load times optimized for global Google Core Web Vitals',
      'Clean semantic HTML5 structure search engine bots understand effortlessly',
    ],
    tech: ['React', 'Next.js', 'Vite', 'Modern Vanilla CSS', 'REST APIs'],
  },
  {
    id: 'ecommerce',
    badge: 'High Conversion',
    title: 'E-Commerce Storefronts',
    tagline: 'Frictionless online shopping experiences designed to maximize average order value.',
    desc: 'From custom shopping carts to integrated payment processors and inventory management, we engineer storefronts that eliminate checkout friction and increase sales conversion rates.',
    deliverables: [
      'High-converting product catalog pages and smart filtering systems',
      'Seamless multi-currency payment gateway integrations (Stripe, Razorpay, etc.)',
      'Optimized one-page checkout flows proven to reduce cart abandonment',
      'Automated order confirmation, inventory sync, and client notifications',
    ],
    tech: ['Shopify Custom', 'WooCommerce', 'Headless Storefronts', 'Stripe'],
  },
  {
    id: 'wordpress',
    badge: 'Easy Management',
    title: 'WordPress & Headless CMS',
    tagline: 'User-friendly content management platforms your team can easily update.',
    desc: 'Get the flexibility of WordPress without the security vulnerabilities or sluggish performance. We build lightweight, custom block themes that give your marketing team full editing power while maintaining strict design guardrails.',
    deliverables: [
      'Custom Gutenberg block theme built without bloated third-party page builders',
      'Intuitive admin dashboard customized specifically for your team workflow',
      'Hardened security protection against brute force and automated exploits',
      'Automated daily backup systems and database speed optimization',
    ],
    tech: ['Custom WordPress Themes', 'Gutenberg Blocks', 'PHP 8.3', 'MySQL'],
  },
  {
    id: 'ui-ux',
    badge: 'Design System',
    title: 'UI/UX Design & Prototyping',
    tagline: 'Intuitive user journeys and visual design systems that build immediate trust.',
    desc: 'Before writing code, we map user intent and create interactive Figma prototypes. We define typography scales, color palettes, and component states to ensure an impeccable user experience from the first interaction.',
    deliverables: [
      'Interactive Figma prototypes with realistic click-through flows',
      'Comprehensive design system including typography, spacing, and micro-interactions',
      'Buyer journey wireframes optimized for clarity and reduced cognitive friction',
      'High-resolution asset exports ready for pixel-perfect frontend translation',
    ],
    tech: ['Figma', 'Design Systems', 'Interactive Prototyping', 'User Research'],
  },
  {
    id: 'seo',
    badge: 'Organic Traffic',
    title: 'SEO & Performance Optimization',
    tagline: 'Rank higher on Google and convert searchers into active business inquiries.',
    desc: 'Having a beautiful website is meaningless if customers cannot discover it. We bake technical search engine optimization into every page from day one, ensuring your business ranks for the keywords that matter.',
    deliverables: [
      'Comprehensive on-page schema markup (LocalBusiness, Organization, FAQ)',
      'Google Core Web Vitals speed optimization ensuring 90+ scores',
      'Keyword mapping, meta titles, descriptions, and OpenGraph social preview tags',
      'Automated XML sitemaps, robots.txt directives, and Google Search Console setup',
    ],
    tech: ['Schema.org', 'Lighthouse 100', 'Core Web Vitals', 'Search Console'],
  },
  {
    id: 'growth',
    badge: 'ROI Focused',
    title: 'Digital Marketing & Growth',
    tagline: 'Data-driven marketing campaigns and conversion funnels that scale pipeline.',
    desc: 'We help you distribute your digital presence and capture market share through targeted PPC ads, high-converting landing pages, and analytics funnels that track actual return on ad spend.',
    deliverables: [
      'High-converting standalone landing pages tuned for paid advertising traffic',
      'Full tracking setup with Google Tag Manager, GA4, and conversion events',
      'Ad creative messaging strategies aligned with target customer pain points',
      'Continuous A/B testing and conversion rate optimization (CRO) reviews',
    ],
    tech: ['Google Analytics 4', 'Meta Pixel', 'Google Ads', 'Conversion Funnels'],
  },
];

const includedFeatures = [
  { Icon: Smartphone, color: '#4f46e5', title: '100% Mobile Responsive', desc: 'Tested across iPhones, Androids, tablets, and monitors.' },
  { Icon: Zap, color: '#f59e0b', title: 'Core Web Vitals 95+', desc: 'Guaranteed sub-second loading speeds for optimal SEO.' },
  { Icon: ShieldCheck, color: '#10b981', title: 'SSL & Security Hardened', desc: 'Enterprise encryption and protection against vulnerability.' },
  { Icon: Search, color: '#0284c7', title: 'Search Engine Architecture', desc: 'Structured data, schema, and meta tags built into code.' },
  { Icon: MessageSquare, color: '#7c3aff', title: 'WhatsApp & Lead Integration', desc: 'Direct click-to-chat and instant notification flows.' },
  { Icon: Award, color: '#6366f1', title: '30-Day Free Warranty', desc: 'Post-launch support and bug fixes included at zero extra cost.' },
];

const faqs = [
  {
    q: 'How long does a typical website take to complete?',
    a: 'Most standard business websites are planned, developed, and deployed within 2 to 3 weeks. E-commerce platforms and larger bespoke systems typically take 3 to 5 weeks depending on custom feature requirements.',
  },
  {
    q: 'Will I be able to edit and update text or images myself?',
    a: 'Yes! We configure your website or CMS with clean, easy-to-use editing fields so anyone on your team can update copy, add new blog posts, or change images without touching a line of code.',
  },
  {
    q: 'Do you provide hosting, domain, and email setup?',
    a: 'Yes, we handle complete deployment on high-speed global CDNs (Cloudflare / Vercel) and can assist in setting up professional business email addresses and domain DNS records.',
  },
  {
    q: 'What is required to get started?',
    a: 'We begin with a free 20-minute consultation call or WhatsApp chat to discuss your goals, content requirements, and design preferences. From there, we send a clear proposal and timeline.',
  },
];

export default function ServicesPage() {
  return (
    <div className="services-page">
      {/* HERO */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content" data-aos>
            <div className="eyebrow">
              <span className="eyebrow-dot" /> Comprehensive Digital Services
            </div>
            <h1>
              Engineered for High Speed,{' '}
              <span className="title-highlight">Flawless Design &amp; ROI</span>
            </h1>
            <p className="services-hero-lead">
              From bespoke web applications and high-converting storefronts to technical SEO
              and performance tuning, we deliver digital solutions built to drive measurable revenue.
            </p>
          </div>
        </div>
      </section>

      {/* DETAILED SERVICES LIST */}
      <section className="section services-details-section">
        <div className="container">
          <div className="services-detailed-list">
            {detailedServices.map((svc, i) => (
              <article key={svc.id} className="detailed-service-card glass-card" data-aos>
                <div className="svc-top-meta">
                  <span className="svc-badge-pill">{svc.badge}</span>
                  <span className="svc-index">0{i + 1}</span>
                </div>

                <h2>{svc.title}</h2>
                <p className="svc-tagline">{svc.tagline}</p>
                <p className="svc-full-desc">{svc.desc}</p>

                <div className="svc-deliverables-wrap">
                  <h4>What You Get:</h4>
                  <ul className="deliverables-list">
                    {svc.deliverables.map((item) => (
                      <li key={item}>
                        <span className="chk-icon" style={{ display: 'inline-flex', alignItems: 'center' }}>
                          <Check size={14} strokeWidth={2.5} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="svc-footer-meta">
                  <div className="tech-tags">
                    {svc.tech.map((t) => (
                      <span key={t} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    className="btn btn-primary svc-quote-btn"
                    to="/contact"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                  >
                    Inquire About This Service <ArrowUpRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED IN EVERY PROJECT */}
      <section className="section included-section">
        <div className="container">
          <div className="section-head" data-aos>
            <div className="eyebrow">The Standard Package</div>
            <h2>Included in Every Webnexora Project</h2>
            <p>We believe essential performance, security, and mobile optimizations should never be expensive add-ons.</p>
          </div>

          <div className="included-grid">
            {includedFeatures.map((item, i) => {
              const IconComp = item.Icon;
              return (
                <div
                  key={item.title}
                  className="included-card glass-card"
                  data-aos
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div
                    className="inc-icon-box"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      background: '#f8fafc',
                      border: 'var(--stroke)',
                      color: item.color,
                      marginBottom: '16px',
                      boxShadow: '0 2px 6px rgba(160, 175, 200, 0.12)',
                    }}
                  >
                    <IconComp size={24} strokeWidth={2} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="section faq-section">
        <div className="container">
          <div className="section-head" data-aos>
            <div className="eyebrow">Clear Answers</div>
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about working with Webnexora Solution.</p>
          </div>

          <div className="faq-motion-list" style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '820px', margin: '0 auto' }} data-aos>
            {faqs.map((faq, index) => (
              <CardSplitAccordian
                key={faq.q}
                title={faq.q}
                description={faq.a}
                defaultOpen={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="section services-cta-section">
        <div className="container">
          <div className="services-cta-box glass-card" data-aos>
            <h2>Have a Unique Project in Mind?</h2>
            <p>Let's map out your requirements and deliver a customized, high-converting digital solution.</p>
            <div className="cta-actions">
              <Link
                className="btn btn-primary"
                to="/contact"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                Get a Free Custom Proposal <ArrowUpRight size={16} />
              </Link>
              <a
                className="btn btn-outline"
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener"
              >
                Chat on WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
