import React from 'react';
import headshot from '../assets/headshot.png';

const Hero = () => {
  return (
    <section
      className="hero-section"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '70vh',
        background: 'linear-gradient(120deg, #111 70%, #ff6600 100%)',
        borderRadius: '2rem',
        boxShadow: '0 0 40px 0 #ff6600, 0 0 0 8px #111',
        margin: '2rem auto',
        overflow: 'hidden',
        position: 'relative',
        width: '80vw',
        padding: '3rem 0',
      }}
      id="hero"
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
        <div
          style={{
            width: 200,
            height: 200,
            borderRadius: '50%',
            background: 'radial-gradient(circle at 70% 30%, #ff6600 0%, #111 80%)',
            boxShadow: '0 0 40px 8px #ff6600',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <img
            src={headshot}
            alt="Karun Gopal headshot"
            style={{ width: 170, height: 170, borderRadius: '50%', objectFit: 'cover', border: '4px solid #ff6600' }}
          />
        </div>
        <h1 style={{ fontSize: '2.7rem', fontWeight: 800, marginBottom: '0.5rem', color: '#ff6600', textAlign: 'center' }}>
          Hi, I'm Karun Gopal
        </h1>
        <h2 style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: '1.2rem', color: '#ff6600', textAlign: 'center' }}>
          Software Engineer
        </h2>
        <p style={{ fontSize: '1.15rem', color: '#e0e0e0', marginBottom: '2.2rem', maxWidth: 500, textAlign: 'center' }}>
          Passionate about building scalable, impactful software. Experienced in full-stack development, cloud, and modern web technologies. Eager to solve real-world problems and drive innovation.
        </p>
        <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a
            href="https://drive.google.com/file/d/1K7ifooF0x4RsXygLghv2HCutNXBT9meI/view?usp=sharing"
            className="cta-button"
            style={{
              background: 'linear-gradient(90deg, #ff6600 60%, #111 100%)',
              color: '#fff',
              boxShadow: '0 2px 12px #ff6600',
              border: 'none',
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="cta-button"
            style={{
              background: 'linear-gradient(90deg, #111 60%, #ff6600 100%)',
              color: '#ff6600',
              boxShadow: '0 2px 12px #ff6600',
              border: 'none',
            }}
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
