import { useRef } from 'react';
import './Portfolio.css';

const projects = [
  {
    tag: 'Business',
    title: 'Business Website',
    desc: 'A professional online home for a company — services, story and contact, beautifully presented.',
    img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
    alt: 'Modern business website concept',
  },
  {
    tag: 'E-Commerce',
    title: 'Online Store',
    desc: 'A product-focused storefront with smooth browsing, cart, and checkout experience.',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80',
    alt: 'E-commerce online store',
  },
  {
    tag: 'Portfolio',
    title: 'Portfolio Website',
    desc: 'A clean, striking way for professionals and creative teams to present their best work.',
    img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=900&q=80',
    alt: 'Portfolio website on monitor',
  },
];

export default function Portfolio() {
  const ref = useRef(null);

  return (
    <section className="section portfolio-section" id="portfolio" ref={ref}>
      <div className="port-orb orb" />

      <div className="container">
        <div className="section-head" data-aos>
          <div className="eyebrow">Project Types</div>
          <h2>Websites We Can Help You Build</h2>
          <p>
            Explore common website categories we specialise in — from business
            sites to e-commerce and creative portfolios.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="project-card glass-card"
              data-aos
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="project-img">
                <img src={p.img} alt={p.alt} loading="lazy" />
                <div className="project-overlay">
                  <a className="btn btn-outline port-view-btn" href="#contact" id={`port-view-${i}`}>
                    View Details →
                  </a>
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
          <a className="btn btn-outline" href="#contact" id="portfolio-explore-btn">
            Explore Portfolio →
          </a>
        </div>
      </div>
    </section>
  );
}
