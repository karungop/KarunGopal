// src/components/Resume.jsx
import "../styles/main.css";

const Resume = () => (
  <section id="resume" className="section center-text">
    <h2>Resume</h2>
    <p>
      Interested in learning more about my experience?
    </p>
    <div style={{ marginTop: '32px' }}>
      <a
        href="https://drive.google.com/file/d/16Sbv2asayEVKXpmWuUbYbIq3Vzj3pckS/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="cta-button neutral"
      >
        Download my Resume
      </a>
    </div>
    <p style={{ marginTop: '24px', fontSize: '1rem' }}>
      Or feel free to <a href="https://linkedin.com/in/karun-gopal" target="_blank" rel="noopener noreferrer" className="link">connect with me on LinkedIn</a>.
    </p>
  </section>
);

export default Resume;
