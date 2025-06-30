// src/components/Skills.jsx
const Skills = () => {
    const languages = [
      { name: "Python", img: "python.webp" },
      { name: "Java", img: "java.jpeg" },
      { name: "C", img: "c.png" },
      { name: "C++", img: "c++.png" },
      { name: "SQL", img: "sql.png" },
      { name: "HTML", img: "html.png" },
      { name: "JavaScript", img: "javascript.png" }
    ];
  
    const technologies = [
      { name: "Git", img: "git.jpeg" },
      { name: "React JS", img: "react.jpeg" },
      { name: "CSS", img: "css.png" },
      { name: "Beautiful Soup", img: "beautiful soup.png" },
      { name: "Flask", img: "flask.png" }
    ];
  
    return (
      <section id="skills">
        <h2 className="center">Skills & Technologies</h2>
        <div className="center">
          <h3>Languages</h3>
          <div className="tech-icons">
            {languages.map(({ name, img }) => (
              <div key={name}>
                <span>{name}</span>
                <img src={`/images/${img}`} alt={`${name} logo`} />
              </div>
            ))}
          </div>
        </div>
        <div className="center">
          <h3>Technologies</h3>
          <div className="tech-icons">
            {technologies.map(({ name, img }) => (
              <div key={name}>
                <span>{name}</span>
                <img src={`/images/${img}`} alt={`${name} logo`} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;