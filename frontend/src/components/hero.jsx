import React from 'react';
import "../styles/main.css"; // ensure this import is present

const Hero = () => {
  return (
    <section className="section center-text fade-section" id="hero">
      <div className="hero-container">
        {/* <img
          src={headshot}
          alt="Karun Gopal headshot"
          className="hero-headshot"
        /> */}
        <p></p>

        <h1 className="hero-title">Hi, I'm Karun Gopal</h1>
        <h2 className="hero-subtitle">Software Engineer</h2>

        <p className="hero-description">
          Passionate about building scalable, impactful software. Experienced in full-stack development, cloud, and modern web technologies. Eager to solve real-world problems and drive innovation.
        </p>
      </div>
    </section>
  );
};

export default Hero;
