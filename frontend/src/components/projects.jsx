// src/components/Projects.jsx
const Projects = () => {
    const projectList = [
      {
        name: "Find Your Spot",
        details: [
          "Designed a RESTful API with Django to manage study spot data and implemented CRUD functionality.",
          "Developed a full-stack web app using Django and React to help students find and share study spots.",
          "Built a responsive React frontend for real-time search and filtering.",
          "Tools Used: Django, React, Python, SQL, JavaScript, CSS"
        ]
      },
      {
        name: "Rate My Professor Sentiment Analysis",
        details: [
          "Built a sentiment analysis model using Rate My Professors data.",
          "Analyzed key data points including Overall Quality, Difficulty, and Comments.",
          "Hands-on experience with ML and predictive modeling.",
          "Tools Used: Jupyter, Python, DistilBert, Pandas, PyTorch"
        ]
      },
      {
        name: "Advisor AI",
        details: [
          "AI chatbot for academic advising using OpenAI’s API.",
          "Built frontend and backend file upload system with Flask.",
          "Tools Used: React, Flask, Python, CSS, OpenAI"
        ]
      },
      {
        name: "BookWorm",
        details: [
          "AI-powered site for adapting news articles to reading levels.",
          "Web scraped with Beautiful Soup, rewritten with OpenAI API.",
          "Tools Used: Django, Python, Beautiful Soup, OpenAI"
        ]
      },
      {
        name: "HomePage",
        details: [
          "Personal site to showcase skills and projects.",
          "Tools Used: HTML, Custom CSS"
        ]
      }
    ];
  
    return (
      <section id="projects">
        <h2 className="center">Projects</h2>
        {projectList.map(({ name, details }) => (
          <div className="card" key={name}>
            <h3>{name}</h3>
            <ul>
              {details.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          </div>
        ))}
      </section>
    );
  };
  
  export default Projects;