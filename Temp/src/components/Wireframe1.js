import React, { useState } from 'react';
import { resumeData } from '../data/resumeData';
import './Wireframe1.css';

const Wireframe1 = ({ theme = 'apple' }) => {
  const { personalInfo, about, skills, experience, education, projects, certifications } = resumeData;

  return (
    <div className={`portfolio-container ${theme}-theme`}>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-name">{personalInfo.name}</h1>
          <h2 className="hero-title">{personalInfo.title}</h2>
          <p className="hero-subtitle">{personalInfo.subtitle}</p>
          <div className="hero-links">
            <a href={`mailto:${personalInfo.email}`} className="link">Email</a>
            <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="link">GitHub</a>
            <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="link">LinkedIn</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="section-content">
          <h3 className="section-title">About</h3>
          <p className="about-text">{about}</p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills">
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

      {/* Experience Section */}
      <section className="experience">
        <div className="section-content">
          <h3 className="section-title">Experience</h3>
          <div className="experience-list">
            {experience.map((job, index) => (
              <div key={index} className="experience-item">
                <div className="experience-header">
                  <h4 className="job-title">{job.title}</h4>
                  <span className="job-period">{job.period}</span>
                </div>
                <h5 className="job-company">{job.company}</h5>
                <p className="job-description">{job.description}</p>
                <ul className="achievements-list">
                  {job.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="achievement-item">{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <div className="section-content">
          <h3 className="section-title">Projects</h3>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h4 className="project-name">{project.name}</h4>
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
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="section-content">
          <h3 className="section-title">Get in Touch</h3>
          <p className="contact-text">Let's work together to create something amazing.</p>
          <div className="contact-links">
            <a href={`mailto:${personalInfo.email}`} className="contact-link">Email Me</a>
            <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
            <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wireframe1;
