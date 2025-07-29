// src/components/Projects.jsx
import "../styles/main.css";

const Projects = () => {
    return (
      <section id="projects" className="section">
  <h2 className="center-text">Projects</h2>
  <p className="center-text">Here are a few highlights of what I've built:</p>

  <div className="projects-grid">

    

    <div className="project-card">
      <h3>Rate My Professor Sentiment Analysis</h3>
      <p>
        Designed a machine learning model to predict professor ratings based on review content and course difficulty metrics. Used DistilBERT to classify sentiment and Pandas to engineer features.
      </p>
      <p><strong>Tech:</strong> Python, Transformers, PyTorch, Pandas</p>
      <p>
        <strong>GitHub:</strong> <a href="https://github.com/karungop/RateMyProfessorModel" target="_blank" rel="noopener noreferrer" className="cta-button">View Repository</a>
      </p>
    </div>

    <div className="project-card">
      <h3>HandTyped</h3>
      <p>
        A gesture-powered desktop typing tool that lets users simulate keypresses using hand signs. Designed as an accessibility and productivity experiment, the app uses a webcam to track hand gestures and maps them to keyboard inputs in real time.
      </p>
      <p><strong>Tech:</strong> Electron, React, RobotJS, MediaPipe</p>
      <p>
        <strong>GitHub:</strong> <a href="https://github.com/karungop/handtyped-electron" target="_blank" rel="noopener noreferrer" className="cta-button">View Repository</a>
      </p>
    </div>

    <div className="project-card">
      <h3>BookWorm</h3>
      <p>
        Created an educational tool for teachers to simplify news articles based on student reading levels. Scraped web content with Beautiful Soup and used the OpenAI API for text simplification.
      </p>
      <p><strong>Tech:</strong> Django, Beautiful Soup, OpenAI API, Python</p>
      <p>
        <strong>GitHub:</strong> <a href="https://github.com/vihaaaaan/BookWorm" target="_blank" rel="noopener noreferrer" className="cta-button">View Repository</a>
      </p>
    </div>

    <div className="project-card">
      <h3>Find Your Spot</h3>
      <p>
        Full-stack web platform for discovering campus study locations. I built a RESTful Django backend with complete CRUD functionality and developed a dynamic React frontend with real-time filtering.
      </p>
      <p><strong>Tech:</strong> Django, React, PostgreSQL, CSS</p>
      <p>
        <strong>GitHub:</strong> <a href="https://github.com/karungop/FindYourSpot" target="_blank" rel="noopener noreferrer" className="cta-button">View Repository</a>
      </p>
    </div>

    <div className="project-card">
      <h3>Advisor AI</h3>
      <p>
        Built a chatbot tool that simulates academic advising conversations using the OpenAI API. I implemented secure file upload in Flask and crafted the user interface using React.
      </p>
      <p><strong>Tech:</strong> React, Flask, OpenAI API, CSS</p>
      <p>
        <strong>GitHub:</strong> <a href="https://github.com/karungop/HackOhio2024" target="_blank" rel="noopener noreferrer" className="cta-button">View Repository</a>
      </p>
    </div>

    

    <div className="project-card">
      <h3>Homepage</h3>
      <p>
        This very site — a modern personal homepage that showcases my work, experience, and goals. Built from scratch with React, custom CSS, and a focus on simplicity and recruiter readability.
      </p>
      <p><strong>Tech:</strong> React, HTML, CSS</p>
      <p>
        <strong>GitHub:</strong> <a href="https://github.com/karungop/KarunGopal" target="_blank" rel="noopener noreferrer" className="cta-button">View Repository</a>
      </p>
    </div>

    

  </div>
</section>

    );
  };
  
  export default Projects;