import { useRef } from 'react';
import './Process.css';

const steps = [
  {
    id: 'discover',
    title: (
      <>
        Strategic <span className="title-highlight">Discovery.</span>
      </>
    ),
    desc: 'We discuss your business, target audience, website goals and required features in detail.',
  },
  {
    id: 'plan-design',
    title: (
      <>
        UI/UX <span className="title-highlight">Design.</span>
      </>
    ),
    desc: 'We shape the page structure and visual direction around your brand identity and goals.',
  },
  {
    id: 'build-review',
    title: (
      <>
        Engineering &amp; <span className="title-highlight">Review.</span>
      </>
    ),
    desc: 'We develop the pages and review the experience across all screen sizes before you approve.',
  },
  {
    id: 'launch',
    title: (
      <>
        Deployment &amp; <span className="title-highlight">Launch.</span>
      </>
    ),
    desc: 'After your final review and sign-off, we prepare and deploy your site for the world to see.',
  },
];

export default function Process() {
  const ref = useRef(null);

  return (
    <section className="section process-section" id="process" ref={ref}>
      <div className="process-orb orb" />

      <div className="container">
        <div className="section-head" data-aos>
          <div className="eyebrow">
            <span className="eyebrow-dot" /> How We Work
          </div>
          <h2>
            A Simple, <span className="title-highlight">Clear Process.</span>
          </h2>
          <p>
            Know what happens at every stage — from the very first conversation
            to the moment your website goes live.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((s, i) => (
            <article
              key={s.id}
              className="step-card glass-card"
              data-aos
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="step-num">0{i + 1}</div>
              {/* connector line */}
              {i < steps.length - 1 && <div className="step-connector" aria-hidden="true" />}
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
