import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import './Services.css';

const services = [
  {
    id: 'web-dev',
    theme: 'light',
    badgeTheme: 'lime',
    line1: 'Custom website',
    line2: 'development',
    title: 'Website Development',
    badge: 'Custom Code',
    desc: 'Professional business websites with clean layouts, clear messaging, and fully responsive code built for conversions.',
    features: ['Custom HTML/CSS/JS & React', '100% Mobile Responsive', 'Lightning-Fast Load Speeds'],
    illustration: (
      <svg width="200" height="160" viewBox="0 0 200 160" fill="none">
        {/* Code window */}
        <rect x="25" y="25" width="150" height="110" rx="14" fill="#FFFFFF" stroke="#191A23" strokeWidth="2" />
        <line x1="25" y1="52" x2="175" y2="52" stroke="#191A23" strokeWidth="1.5" />
        <circle cx="42" cy="38" r="3.5" fill="#191A23" />
        <circle cx="54" cy="38" r="3.5" fill="#191A23" />
        <circle cx="66" cy="38" r="3.5" fill="#B9FF66" stroke="#191A23" strokeWidth="1" />
        {/* Code symbols */}
        <path d="M65 75 L48 90 L65 105" stroke="#191A23" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M135 75 L152 90 L135 105" stroke="#191A23" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="108" y1="70" x2="92" y2="110" stroke="#B9FF66" strokeWidth="3.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'ecommerce',
    theme: 'dark',
    badgeTheme: 'white',
    line1: 'E-Commerce',
    line2: 'storefronts',
    title: 'E-Commerce Websites',
    badge: 'Storefronts',
    desc: 'Feature-rich online store experiences to showcase your catalog and make shopping frictionless for your customers.',
    features: ['Modern Product Catalogs', 'Secure Payment Gateways', 'Inventory & Order Tracking'],
    illustration: (
      <svg width="200" height="160" viewBox="0 0 200 160" fill="none">
        {/* Shopping Bag & Storefront */}
        <rect x="35" y="30" width="130" height="100" rx="14" fill="#292A32" stroke="#FFFFFF" strokeWidth="2" />
        {/* Shopping bag handle */}
        <path d="M80 60 C80 44 120 44 120 60" stroke="#B9FF66" strokeWidth="3" strokeLinecap="round" fill="none" />
        {/* Shopping Bag Body */}
        <rect x="68" y="60" width="64" height="52" rx="8" fill="#FFFFFF" stroke="#191A23" strokeWidth="2" />
        <circle cx="100" cy="85" r="10" fill="#B9FF66" stroke="#191A23" strokeWidth="1.5" />
        <path d="M96 85 L100 89 L106 82" stroke="#191A23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        {/* Sparkle */}
        <path d="M145 45 C145 50 142 53 137 53 C142 53 145 56 145 61 C145 56 148 53 153 53 C148 53 145 50 145 45 Z" fill="#B9FF66" />
      </svg>
    ),
  },
  {
    id: 'mobile-apps',
    theme: 'dark',
    badgeTheme: 'white',
    line1: 'Mobile app',
    line2: 'development',
    title: 'Mobile App Development',
    badge: 'Capacitor Framework',
    desc: 'High-performance cross-platform mobile apps for iOS and Android engineered with modern web tech and Capacitor framework.',
    features: ['Native iOS & Android Builds', 'Capacitor Plugins & Hardware APIs', 'App Store & Play Store Deployment'],
    illustration: (
      <svg width="200" height="160" viewBox="0 0 200 160" fill="none">
        {/* Mobile Phone Mockup */}
        <rect x="42" y="16" width="68" height="128" rx="16" fill="#191A23" stroke="#FFFFFF" strokeWidth="2.5" />
        {/* Notch / Speaker */}
        <rect x="66" y="22" width="20" height="4" rx="2" fill="#FFFFFF" />
        {/* Screen Area */}
        <rect x="48" y="32" width="56" height="96" rx="8" fill="#292A32" />
        {/* App Content Blocks */}
        <rect x="53" y="38" width="46" height="18" rx="4" fill="#B9FF66" />
        <rect x="53" y="62" width="28" height="4" rx="2" fill="#FFFFFF" />
        <rect x="53" y="70" width="38" height="3" rx="1.5" fill="#888888" />
        <rect x="53" y="78" width="46" height="26" rx="4" fill="#191A23" stroke="#FFFFFF" strokeWidth="1" />
        {/* Home Indicator */}
        <rect x="64" y="120" width="24" height="2" rx="1" fill="#FFFFFF" />
        {/* Floating Capacitor / Native Badge with neo-brutalist shadow */}
        <rect x="92" y="58" width="96" height="28" rx="8" fill="#000000" opacity="0.4" />
        <rect x="90" y="56" width="96" height="28" rx="8" fill="#B9FF66" stroke="#191A23" strokeWidth="1.8" />
        <text
          x="138"
          y="74"
          textAnchor="middle"
          fontFamily="'Space Grotesk', sans-serif"
          fontSize="11"
          fontWeight="800"
          fill="#191A23"
        >
          iOS · Android
        </text>
        {/* Sparkle */}
        <path d="M24 46 C24 51 21 54 16 54 C21 54 24 57 24 62 C24 57 27 54 32 54 C27 54 24 51 24 46 Z" fill="#B9FF66" />
      </svg>
    ),
  },
  {
    id: 'uiux',
    theme: 'light',
    badgeTheme: 'lime',
    line1: 'UI/UX design',
    line2: 'systems',
    title: 'UI/UX Design',
    badge: 'Figma to Code',
    desc: 'Intuitive page structures, design systems, and user journeys that guide visitors straight to conversion.',
    features: ['Wireframes & High-Fi Prototypes', 'Modern Aesthetic Guidelines', 'Conversion-Optimized UX'],
    illustration: (
      <svg width="200" height="160" viewBox="0 0 200 160" fill="none">
        {/* Mobile / Screen card */}
        <rect x="50" y="25" width="100" height="110" rx="16" fill="#FFFFFF" stroke="#191A23" strokeWidth="2" />
        {/* Header */}
        <line x1="50" y1="50" x2="150" y2="50" stroke="#191A23" strokeWidth="1.5" />
        <circle cx="65" cy="38" r="3" fill="#191A23" />
        <circle cx="75" cy="38" r="3" fill="#191A23" />
        {/* Smiley / Avatar component */}
        <rect x="68" y="62" width="64" height="46" rx="10" fill="#F3F3F3" stroke="#191A23" strokeWidth="1.5" />
        <circle cx="85" cy="78" r="3" fill="#191A23" />
        <circle cx="115" cy="78" r="3" fill="#191A23" />
        <path d="M92 90 C96 95 104 95 108 90" stroke="#191A23" strokeWidth="2" strokeLinecap="round" />
        {/* Floating heart badge */}
        <rect x="130" y="28" width="34" height="28" rx="8" fill="#B9FF66" stroke="#191A23" strokeWidth="1.8" />
        <path d="M147 43 L143 39 C141 37 143 35 145 37 C147 35 149 37 147 39 Z" fill="#191A23" />
      </svg>
    ),
  },
  {
    id: 'seo',
    theme: 'light',
    badgeTheme: 'lime',
    line1: 'Search engine',
    line2: 'optimization',
    title: 'SEO & Optimization',
    badge: 'Rank #1',
    desc: 'Search-optimized website foundations, technical speed audits, and keyword strategies to increase organic visibility.',
    features: ['On-Page Meta & Schema', 'Core Web Vitals Tuning', 'Keyword & Competitor Strategy'],
    illustration: (
      <svg width="200" height="160" viewBox="0 0 200 160" fill="none">
        {/* Target concentric rings */}
        <circle cx="100" cy="80" r="48" stroke="#191A23" strokeWidth="1.5" strokeDasharray="4 4" />
        <circle cx="100" cy="80" r="26" fill="#FFFFFF" stroke="#191A23" strokeWidth="2" />
        <circle cx="100" cy="80" r="13" fill="#B9FF66" stroke="#191A23" strokeWidth="2" />
        <circle cx="100" cy="80" r="4.5" fill="#191A23" />
        {/* Magnifying Glass */}
        <circle cx="78" cy="62" r="30" fill="none" stroke="#191A23" strokeWidth="3" />
        <line x1="58" y1="82" x2="38" y2="102" stroke="#191A23" strokeWidth="6" strokeLinecap="round" />
        <line x1="38" y1="102" x2="34" y2="106" stroke="#B9FF66" strokeWidth="6" strokeLinecap="round" />
        {/* Star */}
        <path d="M145 42 C145 48 141 51 135 51 C141 51 145 54 145 60 C145 54 149 51 155 51 C149 51 145 48 145 42 Z" fill="#191A23" />
      </svg>
    ),
  },
  {
    id: 'marketing',
    theme: 'dark',
    badgeTheme: 'white',
    line1: 'Digital growth',
    line2: 'marketing',
    title: 'Digital Marketing',
    badge: 'ROI Focused',
    desc: 'Targeted campaigns and digital marketing roadmaps to help your business reach, engage, and convert ideal audiences.',
    features: ['High-Converting Funnels', 'Social & Search Ad Strategy', 'Analytics & ROI Reporting'],
    illustration: (
      <svg width="200" height="160" viewBox="0 0 200 160" fill="none">
        {/* Outer Shadow Slab */}
        <rect x="33" y="27" width="138" height="110" rx="14" fill="#000000" opacity="0.45" />
        {/* Main Analytics Window Surface */}
        <rect x="30" y="24" width="138" height="110" rx="14" fill="#191A23" stroke="#FFFFFF" strokeWidth="2" />

        {/* Window controls / header bar */}
        <circle cx="44" cy="37" r="3" fill="#FF5F56" />
        <circle cx="53" cy="37" r="3" fill="#FFBD2E" />
        <circle cx="62" cy="37" r="3" fill="#B9FF66" />
        {/* Header line & pill */}
        <rect x="76" y="32" width="60" height="10" rx="5" fill="#292A32" />
        <line x1="30" y1="47" x2="168" y2="47" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.2" />

        {/* Subtle Horizontal gridlines */}
        <line x1="42" y1="72" x2="156" y2="72" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.1" strokeDasharray="2 3" />
        <line x1="42" y1="96" x2="156" y2="96" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.1" strokeDasharray="2 3" />
        <line x1="42" y1="120" x2="156" y2="120" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.28" />

        {/* 4 Ascending Analytics Bars with multi-opacity shades */}
        <rect x="46" y="94" width="16" height="26" rx="3.5" fill="#FFFFFF" fillOpacity="0.32" />
        <rect x="70" y="80" width="16" height="40" rx="3.5" fill="#FFFFFF" fillOpacity="0.52" />
        <rect x="94" y="66" width="16" height="54" rx="3.5" fill="#FFFFFF" fillOpacity="0.78" />
        <rect x="118" y="52" width="18" height="68" rx="3.5" fill="#B9FF66" stroke="#191A23" strokeWidth="1" />

        {/* Smooth upward growth trend line */}
        <path
          d="M44 98 C66 94 90 76 128 44"
          stroke="#B9FF66"
          strokeWidth="3.2"
          strokeLinecap="round"
        />

        {/* Proper Diagonal Arrow Head pointing up-right */}
        <polygon points="134,39 122,43 129,51" fill="#B9FF66" />

        {/* Glowing Indicator Node */}
        <circle cx="128" cy="44" r="3.5" fill="#191A23" stroke="#B9FF66" strokeWidth="2" />

        {/* Floating Growth Badge with Neo-Brutalist Shadow */}
        <rect x="100" y="15" width="60" height="20" rx="6" fill="#000000" opacity="0.4" />
        <rect x="98" y="13" width="60" height="20" rx="6" fill="#B9FF66" stroke="#191A23" strokeWidth="1.4" />
        <text
          x="128"
          y="27"
          textAnchor="middle"
          fontFamily="'Space Grotesk', sans-serif"
          fontSize="10"
          fontWeight="800"
          fill="#191A23"
        >
          +184% ↗
        </text>

        {/* Sparkle */}
        <path d="M164 62 C164 66 161 68 157 68 C161 68 164 70 164 74 C164 70 167 68 171 68 C167 68 164 66 164 62 Z" fill="#B9FF66" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="section services-section positivus-services-section" id="services">
      <div className="container">
        {/* POSITIVUS SECTION HEADER ROW */}
        <div className="section-head section-header-row" data-aos>
          <h2 className="section-title-badge">
            <span className="title-badge">Services</span>
          </h2>
          <p className="section-head-desc">
            At Webnexora Solution, we engineer high-performance web applications,
            bespoke storefronts, and conversion-focused digital strategies to scale your business.
          </p>
        </div>

        {/* 2-COLUMN SERVICE CARDS GRID */}
        <div className="services-cards-grid">
          {services.map((s, i) => {
            const isDark = s.theme === 'dark';
            return (
              <article
                key={s.id}
                className={`service-card ${isDark ? 'card-dark' : 'card-light'}`}
                data-aos
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {/* INFO (TITLE, DESCRIPTION, FEATURES) */}
                <div className="service-card-info">
                  <h3 className="service-card-title">
                    <span className={`svc-title-pill ${s.badgeTheme}`}>
                      {s.line1}
                    </span>
                    <br />
                    <span className={`svc-title-pill ${s.badgeTheme}`}>
                      {s.line2}
                    </span>
                  </h3>
                  <p className="service-card-desc">{s.desc}</p>

                  {/* Feature Bullets */}
                  <ul className="service-features-list">
                    {s.features.map((feat) => (
                      <li key={feat} className="service-feature-item">
                        <span className={`feat-icon-dot ${isDark ? 'feat-lime' : 'feat-dark'}`}>
                          <Check size={12} strokeWidth={3} />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ACTION (CIRCULAR ARROW + LEARN MORE) */}
                <div className="service-card-action">
                  <Link
                    to="/services"
                    className={`service-card-link ${isDark ? 'link-dark' : 'link-light'}`}
                    id={`svc-btn-${s.id}`}
                  >
                    <span className={`service-arrow-circle ${isDark ? 'circle-white' : 'circle-dark'}`}>
                      <ArrowUpRight size={20} strokeWidth={2.4} />
                    </span>
                    <span className="service-link-text">Learn more</span>
                  </Link>
                </div>

                {/* VISUAL (VECTOR ILLUSTRATION) */}
                <div className="service-card-visual">
                  <div className="service-illustration-wrap">
                    {s.illustration}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* BOTTOM CTA BUTTON */}
        <div className="services-bottom-row" data-aos>
          <Link
            className="btn btn-primary"
            to="/services"
            id="all-services-btn"
          >
            View All Services &amp; Packages <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
