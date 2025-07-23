// src/components/Skills.jsx
import "../styles/main.css";

const languages = [
  { src: require("../assets/python.webp"), alt: "Python", name: "Python" },
  { src: require("../assets/java.jpeg"), alt: "Java", name: "Java" },
  { src: require("../assets/c.png"), alt: "C", name: "C" },
  { src: require("../assets/c++.png"), alt: "C++", name: "C++" },
  { src: require("../assets/javascript.png"), alt: "JavaScript", name: "JavaScript" },
  { src: require("../assets/sql.png"), alt: "SQL", name: "SQL" },
];

const tools = [
  { src: require("../assets/react.jpeg"), alt: "React", name: "React" },
  { src: require("../assets/flask.png"), alt: "Flask", name: "Flask" },
  { src: require("../assets/django.png"), alt: "Django", name: "Django" },
  { src: require("../assets/beautiful soup.png"), alt: "Beautiful Soup", name: "Beautiful Soup" },
  { src: require("../assets/git.jpeg"), alt: "Git", name: "Git" },
  { src: require("../assets/AWS.png"), alt: "AWS", name: "AWS" },
  // { src: require("../assets/openai.svg"), alt: "OpenAI API", name: "OpenAI API" },
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <h2 className="center-text">Skills & Technologies</h2>
      <h3 className="center-text">Languages</h3>
      <div className="skills-grid">
        {languages.map((lang, idx) => (
          <div className="skill-spin-card" key={lang.name + idx}>
            <div className="skill-spin-icon">
              <img src={lang.src} alt={lang.alt} />
            </div>
            <p style={{ color: '#ff6600', fontWeight: 600 }}>{lang.name}</p>
          </div>
        ))}
      </div>
      <h3 className="center-text" style={{ marginTop: "3rem" }}>Frameworks & Tools</h3>
      <div className="skills-grid">
        {tools.map((tool, idx) => (
          <div className="skill-spin-card" key={tool.name + idx}>
            <div className="skill-spin-icon">
              <img src={tool.src} alt={tool.alt} />
            </div>
            <p style={{ color: '#ff6600', fontWeight: 600 }}>{tool.name}</p>
          </div>
        ))}
      </div>
      <h3 className="center-text" style={{ marginTop: "3rem" }}>Core Competencies</h3>
      <ul className="center-text" style={{ listStyle: "none", padding: 0, fontSize: "1rem", marginTop: "1rem" }}>
        <li>• Backend Architecture & REST APIs</li>
        <li>• Object-Oriented Design & Data Structures</li>
        <li>• Machine Learning & NLP</li>
        <li>• Web Scraping & Data Cleaning</li>
        <li>• CI/CD Pipelines & GitHub Actions</li>
      </ul>
    </section>
  );
};

export default Skills;