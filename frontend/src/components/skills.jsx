// src/components/Skills.jsx
import "../styles/main.css";

const Skills = () => {
  
    return (
      <section id="skills" className="section">
  <h2 className="center-text">Skills & Technologies</h2>

  <h3 className="center-text">Languages</h3>
  <div className="skills-grid">
    <div className="skill-card">
      <img src="python.webp" alt="Python" />
      <p>Python</p>
    </div>
    <div className="skill-card">
      <img src="java.jpeg" alt="Java" />
      <p>Java</p>
    </div>
    <div className="skill-card">
      <img src="c.png" alt="C" />
      <p>C</p>
    </div>
    <div className="skill-card">
      <img src="c++.png" alt="C++" />
      <p>C++</p>
    </div>
    <div className="skill-card">
      <img src="javascript.png" alt="JavaScript" />
      <p>JavaScript</p>
    </div>
    <div className="skill-card">
      <img src="sql.png" alt="SQL" />
      <p>SQL</p>
    </div>
  </div>

  <h3 className="center-text" style={{ marginTop: "3rem" }}>Frameworks & Tools</h3>
  <div className="skills-grid">
    <div className="skill-card">
      <img src="react.jpeg" alt="React" />
      <p>React</p>
    </div>
    <div className="skill-card">
      <img src="flask.png" alt="Flask" />
      <p>Flask</p>
    </div>
    <div className="skill-card">
      <img src="django.png" alt="Django" />
      <p>Django</p>
    </div>
    <div className="skill-card">
      <img src="beautiful soup.png" alt="Beautiful Soup" />
      <p>Beautiful Soup</p>
    </div>
    <div className="skill-card">
      <img src="git.jpeg" alt="Git" />
      <p>Git</p>
    </div>
    <div className="skill-card">
      <img src="aws.png" alt="AWS" />
      <p>AWS</p>
    </div>
    <div className="skill-card">
      <img src="openai.svg" alt="OpenAI" />
      <p>OpenAI API</p>
    </div>
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