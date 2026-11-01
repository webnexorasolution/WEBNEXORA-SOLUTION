import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import './Process.css';

const steps = [
  {
    num: '01',
    title: 'Strategic Discovery',
    desc: 'We discuss your business, target audience, conversion goals, and required website capabilities in detail to craft a bespoke technical blueprint.',
  },
  {
    num: '02',
    title: 'UI/UX Design Architecture',
    desc: 'We shape the page structure, interactive prototypes, and design systems around your brand identity and conversion goals before writing a single line of code.',
  },
  {
    num: '03',
    title: 'Full-Stack Engineering & Review',
    desc: 'We build with modern React, semantic HTML5, and clean CSS, reviewing responsiveness across 20+ mobile and desktop screen sizes with staging preview links.',
  },
  {
    num: '04',
    title: 'Core Web Vitals & Launch QA',
    desc: 'Rigorous sub-second speed optimization, SEO schema audit, cross-browser quality assurance, and security hardening prior to production deployment.',
  },
  {
    num: '05',
    title: 'Deployment & Edge Launch',
    desc: 'After your final review and sign-off, we deploy your site to global high-speed edge CDNs with full SSL encryption and DNS verification.',
  },
  {
    num: '06',
    title: 'Post-Launch Support & Growth',
    desc: 'Ongoing performance monitoring, analytics tracking, and continuous conversion improvements to keep your digital platform ahead of competitors.',
  },
];

export default function Process() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="section process-section positivus-process-section" id="process">
      <div className="container">
        {/* SECTION HEADER ROW */}
        <div className="section-head section-header-row" data-aos>
          <h2 className="section-title-badge">
            <span className="title-badge">Our Working Process</span>
          </h2>
          <p className="section-head-desc">
            A Step-by-Step Guide to How Webnexora Engineers High-Converting Digital Platforms
            from First Conversation to Live Launch.
          </p>
        </div>

        {/* POSITIVUS ACCORDION STACK */}
        <div className="process-accordion-stack">
          {steps.map((s, idx) => {
            const isOpen = openIndex === idx;
            return (
              <article
                key={s.num}
                className={`process-item-card ${isOpen ? 'active-open' : ''}`}
                data-aos
              >
                <button
                  type="button"
                  className="process-item-header"
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={isOpen}
                  id={`process-accordion-btn-${s.num}`}
                >
                  <div className="process-title-group">
                    <span className="process-number">{s.num}</span>
                    <span className="process-name">{s.title}</span>
                  </div>
                  <span className={`process-toggle-circle ${isOpen ? 'open' : ''}`}>
                    {isOpen ? (
                      <Minus size={20} strokeWidth={2.8} />
                    ) : (
                      <Plus size={20} strokeWidth={2.8} />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="process-item-body">
                    <div className="process-body-divider" />
                    <p className="process-body-text">{s.desc}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
