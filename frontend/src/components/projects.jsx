import React, { useState } from 'react';

const PROJECTS = [
  {
    name: "Rate My Professor Sentiment Analysis",
    description: "Designed a machine learning model to predict professor ratings based on review content and course difficulty metrics. Used DistilBERT to classify sentiment and Pandas to engineer features.",
    tech: ["Python", "Transformers", "PyTorch", "Pandas"],
    link: "https://github.com/karungop/RateMyProfessorModel",
  },
  {
    name: "HandTyped",
    description: "A gesture-powered desktop typing tool that lets users simulate keypresses using hand signs. Designed as an accessibility and productivity experiment, the app uses a webcam to track hand gestures and maps them to keyboard inputs in real time.",
    tech: ["Electron", "React", "RobotJS", "MediaPipe"],
    link: "https://github.com/karungop/HandTyped",
  },
  {
    name: "BookWorm",
    description: "Created an educational tool for teachers to simplify news articles based on student reading levels. Scraped web content with Beautiful Soup and used the OpenAI API for text simplification.",
    tech: ["Django", "Beautiful Soup", "OpenAI API", "Python"],
    link: "https://github.com/vihaaaaan/BookWorm",
  },
  {
    name: "Find Your Spot",
    description: "Full-stack web platform for discovering campus study locations. I built a RESTful Django backend with complete CRUD functionality and developed a dynamic React frontend with real-time filtering.",
    tech: ["Django", "React", "PostgreSQL", "CSS"],
    link: "https://github.com/karungop/FindYourSpot",
  },
  {
    name: "Advisor AI",
    description: "Built a chatbot tool that simulates academic advising conversations using the OpenAI API. I implemented secure file upload in Flask and crafted the user interface using React.",
    tech: ["React", "Flask", "OpenAI API", "CSS"],
    link: "https://github.com/karungop/HackOhio2024",
  },
  {
    name: "Homepage",
    description: "This very site — a modern personal homepage that showcases my work, experience, and goals. Built from scratch with React, custom CSS, and a focus on simplicity and recruiter readability.",
    tech: ["React", "HTML", "CSS"],
    link: "https://github.com/karungop/KarunGopal",
  },
  {
    name: "Z-Math",
    description: "Created a Chrome extension that generates continuous math problems based on user-defined difficulty ranges and a custom timer. Designed to help users practice quick arithmetic directly from their browser toolbar.",
    tech: ["TypeScript", "Chrome Extensions API", "HTML", "CSS"],
    link: "https://github.com/karungop/z-math",
  },
  {
    name: "Mac Clipboard Manager",
    description: "Developed a macOS clipboard manager that stores the last 10 copied items and includes 3 constant clipboard slots for quick access. Integrated system-wide clipboard monitoring and paste simulation using Carbon and Accessibility APIs.",
    tech: ["Swift", "AppKit", "Xcode", "macOS Accessibility APIs"],
    link: "https://github.com/karungop/Apple-Clipboard",
  },
  {
    name: "For the People",
    description: "Built a personalized web platform that makes government legislation transparent by providing tailored updates on recent Congressional bills based on user demographics, interests, and location. Integrated a RAG-powered chatbot to explain complex legal text in plain English using persistent context for each user. Developed custom Flask API endpoints to communicate with the frontend and process data from Congress.gov APIs, while leveraging Firebase authentication, Firestore database, and Groq-powered LLM requests for scalability and accuracy.",
    tech: ["Next.js", "React", "Flask", "Python", "Groq", "Firebase"],
    link: "https://github.com/karungop/HackIO-2025",
  },
];

function pad(n) {
  return String(n + 1).padStart(2, '0');
}

export default function Projects() {
  const [active, setActive] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const project = PROJECTS[active];

  return (
    <section id="projects">
      <div className="section-header">
        <span className="section-numeral">03</span>
        <span className="section-label">Projects</span>
      </div>

      {/* Desktop: split panel */}
      <div className="projects-panel">
        <div className="projects-list">
          {PROJECTS.map((p, i) => (
            <button
              key={p.name}
              className={`project-list-item${active === i ? ' active' : ''}`}
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
            >
              <span className="project-num">{pad(i)}</span>
              <span className="project-list-name">{p.name}</span>
            </button>
          ))}
        </div>
        <div className="project-detail" key={active}>
          <h3 className="project-detail-name">{project.name}</h3>
          <p className="project-detail-desc">{project.description}</p>
          <p className="project-detail-tech">{project.tech.join(', ')}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-detail-link"
          >
            {project.link.replace('https://', '')} ↗
          </a>
        </div>
      </div>

      {/* Mobile: accordion */}
      <div className="projects-accordion">
        {PROJECTS.map((p, i) => {
          const open = expandedIndex === i;
          return (
            <div key={p.name} className="project-accordion-item">
              <button
                className="project-accordion-trigger"
                onClick={() => setExpandedIndex(open ? null : i)}
                aria-expanded={open}
              >
                <span className="project-num">{pad(i)}</span>
                <span className="project-list-name" style={{ color: 'var(--black)' }}>{p.name}</span>
              </button>
              <div className={`project-accordion-body${open ? ' open' : ''}`}>
                <div className="project-accordion-content">
                  <p className="project-detail-desc">{p.description}</p>
                  <p className="project-detail-tech">{p.tech.join(', ')}</p>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-detail-link"
                  >
                    {p.link.replace('https://', '')} ↗
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
