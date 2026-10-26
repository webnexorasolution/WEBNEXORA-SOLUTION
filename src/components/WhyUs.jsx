import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import './WhyUs.css';

function TorusBanner() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
    camera.position.z = 4.6;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pLight1 = new THREE.PointLight(0x5b21f5, 3, 10);
    pLight1.position.set(3, 2, 3);
    scene.add(pLight1);

    const pLight2 = new THREE.PointLight(0x06b6d4, 2, 10);
    pLight2.position.set(-3, -2, 2);
    scene.add(pLight2);

    // Solid Torus
    const torusGeo = new THREE.TorusGeometry(1.3, 0.35, 32, 100);
    const torusMat = new THREE.MeshStandardMaterial({
      color: 0x5b21f5,
      metalness: 0.85,
      roughness: 0.15,
    });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    scene.add(torus);

    // Wireframe Torus
    const wireGeo = new THREE.TorusGeometry(1.6, 0.1, 16, 60);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const wireTorus = new THREE.Mesh(wireGeo, wireMat);
    scene.add(wireTorus);

    // Inner Core Sphere
    const sphereGeo = new THREE.IcosahedronGeometry(0.65, 4);
    const sphereMat = new THREE.MeshStandardMaterial({
      color: 0xa78bfa,
      metalness: 0.9,
      roughness: 0.1,
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    scene.add(sphere);

    // Particles Ring
    const partCount = 140;
    const partGeo = new THREE.BufferGeometry();
    const pos = new Float32Array(partCount * 3);
    for (let i = 0; i < partCount; i++) {
      const angle = (i / partCount) * Math.PI * 2;
      const r = 2.2 + (Math.random() - 0.5) * 0.4;
      pos[i * 3] = Math.cos(angle) * r;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 0.5;
      pos[i * 3 + 2] = Math.sin(angle) * r;
    }
    partGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const partMat = new THREE.PointsMaterial({
      size: 0.05,
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.85,
    });
    const particles = new THREE.Points(partGeo, partMat);
    scene.add(particles);

    let animId;
    let clock = new THREE.Clock();

    const render = () => {
      const t = clock.getElapsedTime();
      torus.rotation.x = t * 0.5;
      torus.rotation.y = t * 0.7;

      wireTorus.rotation.x = -t * 0.4;
      wireTorus.rotation.z = t * 0.6;

      sphere.rotation.y = t * 0.8;
      particles.rotation.y = t * 0.35;

      renderer.render(scene, camera);
      animId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      if (!canvas) return;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      sphereGeo.dispose();
      sphereMat.dispose();
      partGeo.dispose();
      partMat.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />;
}

const benefits = [
  { icon: '▣', title: 'Responsive Layout', desc: 'Pixel-perfect layouts built to look stunning on mobile, tablet and desktop screens.' },
  { icon: '⚡', title: 'Blazing Performance', desc: 'Optimised code, compressed assets and smart loading for lightning-fast experiences.' },
  { icon: '◎', title: 'SEO-Friendly Basics', desc: 'Structured headings, semantic HTML and on-page SEO foundations that search engines love.' },
  { icon: '↔', title: 'Clear Communication', desc: 'Know the scope, timeline and next steps before your project moves a single pixel forward.' },
];

export default function WhyUs() {
  return (
    <section className="section why-section" id="why-us">
      <div className="why-bg" aria-hidden="true" />
      <div className="container">
        {/* 3D Torus Banner */}
        <div className="why-3d-banner" aria-hidden="true">
          <TorusBanner />
          <div className="banner-label">The <strong>Webnexora Solution</strong> Approach</div>
        </div>

        <div className="section-head" data-aos>
          <div className="eyebrow">The Webnexora Solution Approach</div>
          <h2>A Better Foundation for Your Online Business</h2>
          <p>We focus on making your website useful, consistent with your brand and easier for customers to navigate and convert.</p>
        </div>

        <div className="benefit-grid">
          {benefits.map((b, i) => (
            <article key={b.title} className="benefit-card glass-card" data-aos style={{ transitionDelay: `${i * 90}ms` }}>
              <div className="benefit-icon-wrap">
                <div className="benefit-icon">{b.icon}</div>
                <div className="benefit-glow" />
              </div>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </article>
          ))}
        </div>

        <div className="why-bottom" data-aos>
          <div className="why-stat"><span>150+</span>Projects Delivered</div>
          <div className="why-stat"><span>98%</span>Client Satisfaction</div>
          <div className="why-stat"><span>5★</span>Average Rating</div>
          <a className="btn btn-primary" href="#contact" id="why-cta-btn">Work With Us →</a>
        </div>
      </div>
    </section>
  );
}
