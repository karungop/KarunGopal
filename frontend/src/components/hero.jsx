import React from 'react';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-left">
        <h1 className="hero-name">Karun<br />Gopal</h1>
        <div className="hero-divider" />
        <span className="hero-year">Est. 2003</span>
      </div>
      <div className="hero-right">
        <p className="hero-title">Software Engineer</p>
        <p className="hero-description">
          Passionate about building scalable, impactful software. Experienced in full-stack development, cloud, and modern web technologies. Eager to solve real-world problems and drive innovation.
        </p>
      </div>
    </section>
  );
}
