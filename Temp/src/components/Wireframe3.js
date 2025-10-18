import React, { useState } from 'react';
import { resumeData } from '../data/resumeData';
import './Wireframe3.css';

const Wireframe3 = () => {
  const { personalInfo, about, skills, experience, education, projects, certifications } = resumeData;
  const [activeSection, setActiveSection] = useState('about');

  const sections = [
    { id: 'about', label: 'About', icon: 'About' },
    { id: 'skills', label: 'Skills', icon: 'Skills' },
    { id: 'experience', label: 'Experience', icon: 'Work' },
    { id: 'projects', label: 'Projects', icon: 'Projects' },
    { id: 'contact', label: 'Contact', icon: 'Contact' }
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return (
          <div className="content-section">
            <div className="hero-content">
              <h1 className="main-title">{personalInfo.name}</h1>
              <h2 className="subtitle">{personalInfo.title}</h2>
              <p className="hero-description">{personalInfo.subtitle}</p>
              <p className="about-text">{about}</p>
              <div className="hero-actions">
                <a href={`mailto:${personalInfo.email}`} className="cta-button">Get in Touch</a>
                <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="secondary-button">View Work</a>
              </div>
            </div>
          </div>
        );

      case 'experience':
        return (
          <div className="content-section">
            <h1 className="section-title">Professional Experience</h1>
            <div className="timeline">
              {experience.map((job, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="job-header">
                      <h3 className="job-title">{job.title}</h3>
                      <span className="job-period">{job.period}</span>
                    </div>
                    <h4 className="company-name">{job.company}</h4>
                    <p className="job-location">{job.location}</p>
                    <p className="job-description">{job.description}</p>
                    <div className="achievements">
                      <h5>Achievements:</h5>
                      <ul>
                        {job.achievements.map((achievement, achIndex) => (
                          <li key={achIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'skills':
        return (
          <div className="content-section">
            <h1 className="section-title">Skills</h1>
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
        );

      case 'projects':
        return (
          <div className="content-section">
            <h1 className="section-title">Projects</h1>
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
        );

      case 'contact':
        return (
          <div className="content-section">
            <h1 className="section-title">Get in Touch</h1>
            <div className="contact-content">
              <p className="contact-text">Ready to work together? Let's start a conversation.</p>
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
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="wireframe3-container">
      {/* Sidebar Navigation */}
      <nav className="sidebar">
        <div className="sidebar-header">
          <h2 className="sidebar-title">{personalInfo.name}</h2>
          <p className="sidebar-subtitle">{personalInfo.title}</p>
        </div>
        
        <ul className="sidebar-nav">
          {sections.map((section) => (
            <li key={section.id} className="nav-item">
              <button
                className={`nav-button ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => setActiveSection(section.id)}
              >
                <span className="nav-label">{section.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {renderSection()}
      </main>
    </div>
  );
};

export default Wireframe3;
