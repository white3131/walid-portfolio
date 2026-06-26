import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-reveal');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          <a href="#" className="logo">WK</a>
          <ul className="nav-links">
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#skills" className="nav-link">Skills</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </div>
      </nav>

      <main>
        <section className="section hero container">
          <span className="hero-subtitle animate-reveal">Gameplay Programmer</span>
          <h1 className="animate-reveal delay-1">Walid Kettab</h1>
          <p className="hero-description animate-reveal delay-2">
            Forging combat systems, player interactions, and modular gameplay architecture in Unreal Engine 5 and C++.
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1.5rem' }} className="animate-reveal delay-3">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn">Contact Me</a>
          </div>
        </section>

        <section id="about" className="section container">
          <h2 className="reveal-on-scroll">About Me</h2>
          <div className="reveal-on-scroll delay-1" style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <div>
              <p>I’m a 25-year-old gameplay programmer from Algiers, Algeria. I graduated from CESI Exia engineering school in 2025, where I built a strong foundation in software engineering, programming, and system architecture.</p>
              <p>I like solving problems, learning new things, and constantly improving my skills. My goal is to build gameplay systems that feel responsive and satisfying to play, while maintaining clean, readable, and scalable code.</p>
            </div>
            <div>
              <p>My main focus is gameplay programming: combat systems, player feedback, animation-driven gameplay, and modular architecture. I enjoy difficult technical challenges and tend to dig deep until I find a solution that feels right.</p>
              <p style={{ color: 'var(--text-primary)' }}>I’m especially interested in action-adventure, RPG, ARPG, and Soulslike-inspired games, where responsiveness, timing, animation, feedback, and technical structure must harmonize perfectly.</p>
            </div>
          </div>
        </section>

        <section id="projects" className="section container">
          <h2 className="reveal-on-scroll">Selected Work</h2>
          
          <div className="projects-grid">
            {/* Project 1 */}
            <article className="project-card reveal-on-scroll delay-1">
              <div className="project-content">
                <span className="project-role">Internship Project • 2024</span>
                <h3>Echos of Timgad</h3>
                <p style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontStyle: 'italic' }}>SoulsLike Combat System & Gameplay Architecture</p>
                <p>
                  A PC action-adventure prototype set in the ancient Roman city of Timgad, Algeria. The combat direction was inspired by Souls-like games, with a focus on strategic timing, readable attacks, stamina management, and responsive third-person gameplay.
                </p>
                <p>
                  I developed the core combat component, input buffering for combos, directional dodging, hit detection, stat systems (health, stamina, armor), and integrated enemy AI using Behavior Trees and Blackboards.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Unreal Engine 5</span>
                  <span className="tech-tag">Blueprints</span>
                  <span className="tech-tag">Animation Blueprints</span>
                  <span className="tech-tag">Behavior Tree</span>
                  <span className="tech-tag">Gameplay Tags</span>
                </div>
                <a href="#contact" className="btn">View Details</a>
              </div>
              <div className="project-visual">
                {/* Fallback pattern since we don't have images here, but it looks cinematic */}
                <div style={{ width: '100%', height: '100%', background: 'linear-gradient(45deg, #050505, #1a1a1a)', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.1, fontSize: '8rem', fontFamily: 'var(--font-heading)' }}>TIMGAD</div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="skills" className="section container">
          <h2 className="reveal-on-scroll">Arsenal</h2>
          <div className="skills-container reveal-on-scroll delay-1">
            <div className="skill-item">Unreal Engine 5</div>
            <div className="skill-item">C++</div>
            <div className="skill-item">Blueprints</div>
            <div className="skill-item">Gameplay Ability System</div>
            <div className="skill-item">Unity</div>
            <div className="skill-item">C#</div>
            <div className="skill-item">VR Development</div>
            <div className="skill-item">Git / Perforce / Diversion</div>
            <div className="skill-item">ASP.NET / SQL</div>
          </div>
        </section>

        <section id="education" className="section container" style={{ minHeight: 'auto', paddingBottom: '4rem' }}>
          <h2 className="reveal-on-scroll">Academic Journey</h2>
          <div className="timeline reveal-on-scroll delay-1">
            <div className="timeline-item">
              <div className="timeline-year">2025</div>
              <h3 className="timeline-title">Manager in Architecture and Software Applications of Information Systems</h3>
              <p className="timeline-school">CESI Exia, Algiers — RNCP Level 7 Title</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <h3 className="timeline-title">International Mobility</h3>
              <p className="timeline-school">Universiti Kuala Lumpur — Malaysian Institute of Information Technology</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <h3 className="timeline-title">Software Engineering Manager</h3>
              <p className="timeline-school">CESI Exia, Algiers</p>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div className="container reveal-on-scroll">
          <h2 style={{ justifyContent: 'center', marginBottom: '1rem' }}>Let's Connect</h2>
          <p style={{ margin: '0 auto', textAlign: 'center' }}>Available for new opportunities in game development.</p>
          <a href="mailto:kettab.walid.dz@gmail.com" className="footer-email">kettab.walid.dz@gmail.com</a>
          <p className="footer-copyright">© {new Date().getFullYear()} Walid Kettab. Forged in Code.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
