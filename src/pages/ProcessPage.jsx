import { Link } from 'react-router-dom';
import { Clock, MessageSquare, Zap, ShieldCheck, Check, ArrowUpRight, ArrowRight } from 'lucide-react';
import './ProcessPage.css';

const stages = [
  {
    step: '01',
    title: 'Discovery & Strategic Alignment',
    duration: 'Week 1',
    desc: 'We begin with an exhaustive technical and business consultation. We dissect your target audience, existing conversion bottlenecks, competitor landscape, and specific business goals.',
    deliverables: [
      'Comprehensive project scope and milestone timeline document',
      'Technical architecture and tech stack recommendation',
      'Target buyer persona and user journey mapping',
      'Content inventory and required feature specifications',
    ],
  },
  {
    step: '02',
    title: 'Information Architecture & UI/UX Design',
    duration: 'Week 1–2',
    desc: 'Before any code is written, we engineer high-fidelity Figma prototypes. We design intuitive page hierarchies, typography systems, and interaction states that guide visitors to conversion.',
    deliverables: [
      'Interactive click-through Figma prototype',
      'Complete typography scale and tailored Neumorphic design system',
      'Mobile-first responsive wireframes for all core viewports',
      'Executive design review and sign-off round',
    ],
  },
  {
    step: '03',
    title: 'Full-Stack Development & Architecture',
    duration: 'Week 2–3',
    desc: 'Our senior engineers translate approved designs into clean, modular, high-performance code. Built on modern web frameworks without bloated page builders.',
    deliverables: [
      'Custom frontend engineering using modern React and semantic HTML5',
      'Dynamic backend APIs, CMS integration, and database schema setup',
      'Payment gateway, CRM, and automated notification webhook connections',
      'Live staging environment link for real-time progress reviews',
    ],
  },
  {
    step: '04',
    title: 'Quality Assurance, Security & Performance',
    duration: 'Week 3',
    desc: 'Every page undergoes rigorous multi-device testing. We audit Core Web Vitals, cross-browser compatibility, SSL security headers, and accessibility standards.',
    deliverables: [
      'Cross-device testing across modern iOS, Android, macOS, and Windows browsers',
      'Google Lighthouse audit with guaranteed 90+ performance scores',
      'Security review, SSL configuration, and forms validation testing',
      'On-page SEO schema verification and meta tag validation',
    ],
  },
  {
    step: '05',
    title: 'Launch, Training & Dedicated Warranty',
    duration: 'Week 4 & Beyond',
    desc: 'We manage domain DNS propagation, CDN caching, and search console indexing. Following deployment, we train your team and provide 30 days of complimentary support.',
    deliverables: [
      'Seamless production deployment with zero downtime',
      'Domain DNS and Google Search Console indexing configuration',
      'Video walkthrough and admin dashboard training for your team',
      '30-day post-launch warranty covering any questions or adjustments',
    ],
  },
];

const promises = [
  { Icon: Clock, color: '#4f46e5', title: 'On-Time Milestones', desc: 'We respect your launch deadlines. Every stage is delivered within agreed dates.' },
  { Icon: MessageSquare, color: '#7c3aff', title: 'Direct Engineer Access', desc: 'No disconnected account managers. Speak directly to the team building your site.' },
  { Icon: Zap, color: '#f59e0b', title: 'Speed Guarantee', desc: 'If your site scores under 90 on Google PageSpeed, we optimize it at no extra cost.' },
  { Icon: ShieldCheck, color: '#10b981', title: 'Full Code Ownership', desc: 'You own 100% of your source code, assets, and accounts from day one.' },
];

export default function ProcessPage() {
  return (
    <div className="process-page">
      {/* HERO */}
      <section className="process-hero">
        <div className="container">
          <div className="process-hero-content" data-aos>
            <div className="eyebrow">
              <span className="eyebrow-dot" /> The 5-Stage Blueprint
            </div>
            <h1>
              A Rigorous, Transparent Process{' '}
              <span className="gradient-text">Built for Predictable Results</span>
            </h1>
            <p className="process-hero-lead">
              We eliminate guesswork with an agile, 5-stage engineering methodology
              that guarantees exceptional design, technical perfection, and on-time launch.
            </p>
          </div>
        </div>
      </section>

      {/* DETAILED STAGES */}
      <section className="section process-stages-section">
        <div className="container">
          <div className="stages-timeline">
            {stages.map((stg) => (
              <article key={stg.step} className="stage-card glass-card" data-aos>
                <div className="stage-side-meta">
                  <span className="stage-number">{stg.step}</span>
                  <span className="stage-duration-pill">{stg.duration}</span>
                </div>

                <div className="stage-main-content">
                  <h2>{stg.title}</h2>
                  <p className="stage-desc">{stg.desc}</p>

                  <div className="stage-deliverables">
                    <h4>Stage Deliverables:</h4>
                    <ul>
                      {stg.deliverables.map((item) => (
                        <li key={item}>
                          <span className="stg-chk" style={{ display: 'inline-flex', alignItems: 'center' }}>
                            <Check size={14} strokeWidth={2.5} />
                          </span>{' '}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT PROMISES */}
      <section className="section process-promises-section">
        <div className="container">
          <div className="section-head" data-aos>
            <div className="eyebrow">
              <span className="eyebrow-dot" /> Our Commitment
            </div>
            <h2>The Webnexora Client Guarantee</h2>
            <p>Four ironclad standards that protect your investment and ensure an exceptional partnership.</p>
          </div>

          <div className="promises-grid">
            {promises.map((p, i) => {
              const IconComp = p.Icon;
              return (
                <div
                  key={p.title}
                  className="promise-card glass-card"
                  data-aos
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div
                    className="promise-icon-box"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      background: '#f8fafc',
                      border: 'var(--stroke)',
                      color: p.color,
                      marginBottom: '16px',
                      boxShadow: '0 2px 6px rgba(160, 175, 200, 0.12)',
                    }}
                  >
                    <IconComp size={24} strokeWidth={2} />
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS CTA */}
      <section className="section process-cta-section">
        <div className="container">
          <div className="process-cta-banner glass-card" data-aos>
            <h2>Ready to Begin Stage 01?</h2>
            <p>Schedule a preliminary strategy call and receive your project roadmap within 24 hours.</p>
            <div className="cta-actions">
              <Link
                className="btn btn-primary"
                to="/contact"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                Start Discovery Call <ArrowUpRight size={16} />
              </Link>
              <Link
                className="btn btn-outline"
                to="/services"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                Review Available Services <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
