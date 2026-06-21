import React from 'react';

export default function About() {
  return (
    <section id="about">
      <div className="section-header">
        <span className="section-numeral">01</span>
        <span className="section-label">About</span>
      </div>
      <div className="about">
        <div className="about-left">
          <span className="about-numeral" aria-hidden="true">—</span>
          <div className="about-line" aria-hidden="true" />
        </div>
        <div className="about-right">
          <p className="about-bio">
            I'm a junior at The Ohio State University double majoring in Computer Science and Mathematics.
            I'm currently a Software Engineering Intern at Principal Financial Group where I work on building scalable backend services.
            I'm passionate about backend architecture, developer tools, and applied AI.
            Outside of school, I build projects to deepen my understanding of systems and AI, and I love finding new ways to optimize my workflow and help others do the same.
          </p>
        </div>
      </div>
    </section>
  );
}
