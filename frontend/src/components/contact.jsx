import React from 'react';
import "../styles/main.css";

const Contact = () => (
  <section className="contact">
    <div className="section-content">
      <h3 className="section-title">Get in Touch</h3>
      <p className="contact-text">Let's work together to create something amazing.</p>
      <div className="contact-links">
        <a href="mailto:karun.gopal@gmail.com" className="contact-link">Email Me</a>
        <a href="https://linkedin.com/in/karun-gopal" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
        <a href="https://github.com/karungop" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
        <a
            href="https://drive.google.com/file/d/1K7ifooF0x4RsXygLghv2HCutNXBT9meI/view?usp=sharing"
            className="cta-button neutral"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
      </div>
    </div>
  </section>
);
  
  export default Contact;
  