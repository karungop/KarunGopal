import React from 'react';
import "../styles/main.css";

const Skills = () => {
  const skills = {
    programming: ["Python", "Java", "JavaScript", "C", "C++", "SQL"],
    frontend: ["React", "HTML5", "CSS3", "TypeScript"],
    backend: ["Django", "Flask", "Node.js", "REST APIs"],
    tools: ["Git", "AWS", "Docker", "Beautiful Soup", "OpenAI API"]
  };

  return (
    <section id="skills" className="skills">
      <div className="section-content">
        <h3 className="section-title">Skills</h3>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Languages</h4>
            <div className="skill-list">
              {skills.programming.map((skill, index) => (
                <span key={index} className="skill-item">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h4>Frontend</h4>
            <div className="skill-list">
              {skills.frontend.map((skill, index) => (
                <span key={index} className="skill-item">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h4>Backend</h4>
            <div className="skill-list">
              {skills.backend.map((skill, index) => (
                <span key={index} className="skill-item">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h4>Tools</h4>
            <div className="skill-list">
              {skills.tools.map((skill, index) => (
                <span key={index} className="skill-item">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;