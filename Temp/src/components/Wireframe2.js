import React from 'react';
import { resumeData } from '../data/resumeData';
import './Wireframe2.css';

const Wireframe2 = () => {
  const { personalInfo, about, skills, experience, education, projects, certifications } = resumeData;

  return (
    <div className="portfolio-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-name">{personalInfo.name}</h1>
            <h2 className="hero-title">{personalInfo.title}</h2>
            <p className="hero-subtitle">{personalInfo.subtitle}</p>
            <div className="hero-actions">
              <a href={`mailto:${personalInfo.email}`} className="cta-button">Get in Touch</a>
              <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="secondary-button">View Work</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-card">
              <div className="card-content">
                <div className="code-line"></div>
                <div className="code-line short"></div>
                <div className="code-line"></div>
                <div className="code-line medium"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="section-content">
          <h2 className="section-title">About</h2>
          <p className="about-text">{about}</p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <div className="section-content">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Languages</h3>
              <div className="skill-tags">
                {skills.programming.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skill-tags">
                {skills.frontend.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <div className="skill-tags">
                {skills.backend.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Tools</h3>
              <div className="skill-tags">
                {skills.tools.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience">
        <div className="section-content">
          <h2 className="section-title">Experience</h2>
          <div className="experience-timeline">
            {experience.map((job, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="job-header">
                    <h3 className="job-title">{job.title}</h3>
                    <span className="job-period">{job.period}</span>
                  </div>
                  <h4 className="company-name">{job.company}</h4>
                  <p className="job-description">{job.description}</p>
                  <ul className="achievements">
                    {job.achievements.slice(0, 2).map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <div className="section-content">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <div className="placeholder-image"></div>
                </div>
                <div className="project-content">
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <a href={`https://${project.link}`} target="_blank" rel="noopener noreferrer" className="project-link">
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="section-content">
          <h2 className="section-title">Let's Work Together</h2>
          <p className="contact-text">Ready to bring your ideas to life? Let's start a conversation.</p>
          <div className="contact-info">
            <a href={`mailto:${personalInfo.email}`} className="contact-link">
              <span className="contact-icon">✉️</span>
              {personalInfo.email}
            </a>
            <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="contact-icon">💼</span>
              LinkedIn
            </a>
            <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="contact-icon">💻</span>
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wireframe2;
