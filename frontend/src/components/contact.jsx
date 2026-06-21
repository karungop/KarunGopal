import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="contact" style={{ padding: '0 var(--page-margin)', paddingBottom: '5rem', paddingTop: 'var(--section-gap)' }}>
      <div className="section-header">
        <span className="section-numeral">06</span>
        <span className="section-label">Contact</span>
      </div>
      <div className="contact-links">
        <a href="mailto:karun.gopal@gmail.com" className="contact-link">
          karun.gopal@gmail.com
        </a>
        <a
          href="https://linkedin.com/in/karun-gopal"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          linkedin.com/in/karun-gopal <span className="arrow">↗</span>
        </a>
        <a
          href="https://github.com/karungop"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          github.com/karungop <span className="arrow">↗</span>
        </a>
        <a
          href="https://drive.google.com/file/d/16Sbv2asayEVKXpmWuUbYbIq3Vzj3pckS/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          Resume <span className="arrow">↗</span>
        </a>
      </div>
    </section>
  );
}
