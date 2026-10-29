import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Portfolio.css';

const projects = [
  {
    tag: 'E-Commerce',
    title: 'Modern Retail Storefront',
    desc: 'High-converting custom store experience with frictionless checkout, dynamic search, and mobile-first speed.',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80',
    alt: 'Modern E-commerce online store',
  },
  {
    tag: 'Corporate',
    title: 'Global Tech Consulting Platform',
    desc: 'Enterprise corporate web presence featuring clear solution pathways, thought leadership hubs, and interactive lead capture.',
    img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
    alt: 'Modern business website concept',
  },
  {
    tag: 'Creative Agency',
    title: 'Architecture & Design Studio',
    desc: 'Striking visual storytelling platform highlighting architectural portfolios with smooth editorial layouts.',
    img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=900&q=80',
    alt: 'Portfolio website on monitor',
  },
];

export default function Portfolio() {
  return (
    <section className="section portfolio-section" id="portfolio">
      <div className="port-orb orb" />

      <div className="container">
        <div className="section-head" data-aos>
          <div className="eyebrow">Proven Outcomes</div>
          <h2>
            Featured <span className="title-highlight">Client Projects.</span>
          </h2>
          <p>
            Explore recent digital experiences we have engineered across diverse industries,
            designed to elevate brands and drive measurable results.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="project-card glass-card"
              data-aos
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="project-img">
                <img src={p.img} alt={p.alt} loading="lazy" />
                <div className="project-overlay">
                  <Link
                    className="btn btn-outline port-view-btn"
                    to="/portfolio"
                    id={`port-view-${i}`}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                  >
                    View Case Study <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
              <div className="project-content">
                <span className="project-tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="portfolio-bottom" data-aos>
          <Link
            className="btn btn-primary"
            to="/portfolio"
            id="portfolio-explore-btn"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            View All Projects in Full Portfolio <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
