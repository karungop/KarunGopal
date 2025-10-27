import React from 'react';
import "../styles/main.css";

const Projects = () => {
  const projects = [
    {
      name: "Rate My Professor Sentiment Analysis",
      description: "Designed a machine learning model to predict professor ratings based on review content and course difficulty metrics. Used DistilBERT to classify sentiment and Pandas to engineer features.",
      technologies: ["Python", "Transformers", "PyTorch", "Pandas"],
      link: "github.com/karungop/RateMyProfessorModel"
    },
    {
      name: "HandTyped",
      description: "A gesture-powered desktop typing tool that lets users simulate keypresses using hand signs. Designed as an accessibility and productivity experiment, the app uses a webcam to track hand gestures and maps them to keyboard inputs in real time.",
      technologies: ["Electron", "React", "RobotJS", "MediaPipe"],
      link: "github.com/karungop/HandTyped"
    },
    {
      name: "BookWorm",
      description: "Created an educational tool for teachers to simplify news articles based on student reading levels. Scraped web content with Beautiful Soup and used the OpenAI API for text simplification.",
      technologies: ["Django", "Beautiful Soup", "OpenAI API", "Python"],
      link: "github.com/vihaaaaan/BookWorm"
    },
    {
      name: "Find Your Spot",
      description: "Full-stack web platform for discovering campus study locations. I built a RESTful Django backend with complete CRUD functionality and developed a dynamic React frontend with real-time filtering.",
      technologies: ["Django", "React", "PostgreSQL", "CSS"],
      link: "github.com/karungop/FindYourSpot"
    },
    {
      name: "Advisor AI",
      description: "Built a chatbot tool that simulates academic advising conversations using the OpenAI API. I implemented secure file upload in Flask and crafted the user interface using React.",
      technologies: ["React", "Flask", "OpenAI API", "CSS"],
      link: "github.com/karungop/HackOhio2024"
    },
    {
      name: "Homepage",
      description: "This very site — a modern personal homepage that showcases my work, experience, and goals. Built from scratch with React, custom CSS, and a focus on simplicity and recruiter readability.",
      technologies: ["React", "HTML", "CSS"],
      link: "github.com/karungop/KarunGopal"
    },
    {
      name: "Z-Math",
      description: "Created a Chrome extension that generates continuous math problems based on user-defined difficulty ranges and a custom timer. Designed to help users practice quick arithmetic directly from their browser toolbar.",
      technologies: ["TypeScript", "Chrome Extensions API", "HTML", "CSS"],
      link: "github.com/karungop/z-math"
    },
    {
      name: "Mac Clipboard Manager",
      description: "Developed a macOS clipboard manager that stores the last 10 copied items and includes 3 constant clipboard slots for quick access. Integrated system-wide clipboard monitoring and paste simulation using Carbon and Accessibility APIs.",
      technologies: ["Swift", "AppKit", "Xcode", "macOS Accessibility APIs"],
      link: "github.com/karungop/Apple-Clipboard"
    },
    {
      name: "For the People",
      description: "Built a personalized web platform that makes government legislation transparent by providing tailored updates on recent Congressional bills based on user demographics, interests, and location. Integrated a RAG-powered chatbot to explain complex legal text in plain English using persistent context for each user. Developed custom Flask API endpoints to communicate with the frontend and process data from Congress.gov APIs, while leveraging Firebase authentication, Firestore database, and Groq-powered LLM requests for scalability and accuracy.",
      technologies: ["Next.js", "React", "Flask", "Python", "Groq", "Beautiful Soup", "Firebase", "Firestore", "Congress.gov API"],
      link: "github.com/karungop/HackIO-2025"
    }

  ];

  return (
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
  );
};
  
  export default Projects;
