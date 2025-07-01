// src/components/About.jsx
import "../styles/main.css";

const About = () => (
    <section id="about">
      <h2 className="center">About Me</h2>
      <div className="card">
        <img src="headshot.png" alt="Karun Gopal" style={{ maxWidth: "200px", borderRadius: "50%", marginBottom: "1rem" }} />
        <p>
  I'm a junior at The Ohio State University double majoring in Computer Science and Mathematics.
  I'm currently a Software Engineering Intern at Principal Financial Group where I work on building scalable backend services.
  I'm passionate about backend architecture, developer tools, and applied AI.
</p>
<p>
  Outside of school, I build projects to deepen my understanding of systems and AI, and I love finding new ways to optimize my workflow and help others do the same.
</p>

      </div>
    </section>
  );
  
  export default About;