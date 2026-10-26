import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import './Hero.css';

function HeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);

    const pointLight1 = new THREE.PointLight(0x5b21f5, 4, 25);
    pointLight1.position.set(4, 1, 2);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x06b6d4, 3, 25);
    pointLight2.position.set(-4, -2, 3);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0xa855f7, 3, 20);
    pointLight3.position.set(0, 4, -2);
    scene.add(pointLight3);

    // Particle Stars
    const starCount = 1800;
    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3]     = (Math.random() - 0.5) * 45;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 45;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 45;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({
      size: 0.05,
      color: 0xc4b5fd,
      transparent: true,
      opacity: 0.75,
    });
    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // Floating Main Sphere (Right side, behind mockup)
    const sphereGeo = new THREE.IcosahedronGeometry(1.6, 5);
    const sphereMat = new THREE.MeshStandardMaterial({
      color: 0x5b21f5,
      metalness: 0.85,
      roughness: 0.15,
      wireframe: false,
    });
    const mainSphere = new THREE.Mesh(sphereGeo, sphereMat);
    mainSphere.position.set(3.8, 0.2, -1.5);
    scene.add(mainSphere);

    // Orbiting Wireframe Torus around Main Sphere
    const torusGeo = new THREE.TorusGeometry(2.3, 0.12, 16, 80);
    const torusMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      metalness: 0.9,
      roughness: 0.1,
      wireframe: true,
    });
    const mainTorus = new THREE.Mesh(torusGeo, torusMat);
    mainTorus.position.set(3.8, 0.2, -1.5);
    scene.add(mainTorus);

    // Secondary Floating Sphere (Left background)
    const secSphereGeo = new THREE.SphereGeometry(1.0, 32, 32);
    const secSphereMat = new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      metalness: 0.8,
      roughness: 0.2,
    });
    const secSphere = new THREE.Mesh(secSphereGeo, secSphereMat);
    secSphere.position.set(-4.5, 2.2, -3);
    scene.add(secSphere);

    // Tertiary Cyan Torus (Bottom left)
    const smallTorusGeo = new THREE.TorusGeometry(0.8, 0.2, 24, 60);
    const smallTorusMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      metalness: 0.85,
      roughness: 0.2,
    });
    const smallTorus = new THREE.Mesh(smallTorusGeo, smallTorusMat);
    smallTorus.position.set(-3.2, -2.4, -2);
    scene.add(smallTorus);

    // Mouse parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      mouseX = (e.clientX / innerWidth - 0.5) * 1.5;
      mouseY = (e.clientY / innerHeight - 0.5) * 1.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Render loop
    let animId;
    const clock = new THREE.Clock();

    const animate = () => {
      const t = clock.getElapsedTime();

      // Smooth camera interpolation toward mouse
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;
      camera.position.x = targetX * 1.2;
      camera.position.y = -targetY * 1.2;
      camera.lookAt(0, 0, 0);

      // Starfield slow rotation
      starField.rotation.y = t * 0.025;
      starField.rotation.x = t * 0.012;

      // Main sphere float and rotation
      mainSphere.position.y = 0.2 + Math.sin(t * 0.8) * 0.25;
      mainSphere.rotation.x = t * 0.3;
      mainSphere.rotation.y = t * 0.4;

      // Torus rotation
      mainTorus.position.y = 0.2 + Math.sin(t * 0.8) * 0.25;
      mainTorus.rotation.x = t * 0.5;
      mainTorus.rotation.y = t * 0.6;
      mainTorus.rotation.z = t * 0.2;

      // Secondary sphere
      secSphere.position.y = 2.2 + Math.sin(t * 0.9 + 1) * 0.2;
      secSphere.rotation.y = t * 0.5;

      // Small torus
      smallTorus.position.y = -2.4 + Math.sin(t * 0.7 + 2) * 0.2;
      smallTorus.rotation.x = t * 0.6;
      smallTorus.rotation.y = t * 0.3;

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

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
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      starGeo.dispose();
      starMat.dispose();
      sphereGeo.dispose();
      sphereMat.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      secSphereGeo.dispose();
      secSphereMat.dispose();
      smallTorusGeo.dispose();
      smallTorusMat.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />;
}

export default function Hero() {
  const heroRef = useRef(null);

  return (
    <section className="hero" id="home" ref={heroRef}>
      {/* 3D CANVAS BACKGROUND */}
      <div className="hero-canvas-wrap" aria-hidden="true">
        <HeroCanvas />
      </div>

      {/* GRID OVERLAY */}
      <div className="hero-grid-bg" aria-hidden="true" />

      <div className="container hero-grid">
        {/* COPY */}
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Website Development &amp; Digital Solutions
          </div>
          <h1>
            Build Your Online Presence with{' '}
            <span className="gradient-text">Webnexora<br />Solution</span>
          </h1>
          <p className="hero-lead">
            We craft modern, high-performance websites and digital strategies
            that help businesses stand out, attract customers, and dominate online.
          </p>
          <div className="hero-actions">
            <a
              className="btn btn-primary"
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener"
              id="hero-cta-primary"
            >
              Get a Free Consultation ↗
            </a>
            <a className="btn btn-outline" href="#services" id="hero-cta-services">
              Explore Services →
            </a>
          </div>
          <div className="hero-proof">
            <span><i className="chk">✓</i> Responsive Design</span>
            <span><i className="chk">✓</i> Business-Focused</span>
            <span><i className="chk">✓</i> Clear Communication</span>
          </div>
        </div>

        {/* BROWSER MOCKUP */}
        <div className="hero-visual glass-card" aria-label="Website design preview">
          <div className="browser-bar">
            <span className="dot red"/><span className="dot yellow"/><span className="dot green"/>
            <span className="url-bar">webnexora.com</span>
          </div>
          <div className="dashboard">
            <div className="dash-label">YOUR DIGITAL NEXT STEP</div>
            <div className="dash-title">A website that works for your business.</div>
            <div className="dash-copy">Thoughtful design, clear messaging and a smooth experience across all devices.</div>
            <div className="dash-pill">LET'S BUILD SOMETHING GREAT</div>
            <div className="dash-stats">
              <div className="stat-card"><div className="stat-value">150+</div><div className="stat-label">Projects Done</div></div>
              <div className="stat-card"><div className="stat-value">98%</div><div className="stat-label">Client Satisfaction</div></div>
              <div className="stat-card"><div className="stat-value">5★</div><div className="stat-label">Avg. Rating</div></div>
            </div>
            <div className="code-deco">
              <span className="cd-kw">const</span>{' '}
              <span className="cd-var">site</span> ={' '}
              <span className="cd-str">'webnexora.com'</span>;<br />
              <span className="cd-kw">launch</span>
              <span className="cd-punc">(</span>
              <span className="cd-str">site</span>
              <span className="cd-punc">);</span>
              <span className="cursor-blink">▋</span>
            </div>
          </div>
          <div className="floating-badge">
            <span className="badge-icon">✦</span>
            Made for Growth
            <small>Design · Dev · Digital</small>
          </div>
        </div>
      </div>
    </section>
  );
}
