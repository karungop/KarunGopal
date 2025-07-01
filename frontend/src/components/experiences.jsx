
// src/components/experiences.jsx
import "../styles/main.css";

const Experiences = () => {
return(
<section id="work experience" className="section">
  <h2 className="center-text">Experience</h2>

  <div className="experience-item">
    <h3>Software Engineering Intern — Principal Financial Group</h3>
    <p className="exp-dates">May 2025 – July 2025 • Des Moines, IA</p>
    <ul>
      <li>
        Worked on the Individual Solutions team within the Retirement and Income Solutions division to modernize internal tooling for customer operations
      </li>
      <li>
        Developed full-stack features using <strong>React</strong>, <strong>TypeScript</strong>, and <strong>Java</strong> within a CI/CD pipeline, enabling seamless deployment of secure components
      </li>
      <li>
        Integrated <strong>Google Analytics 4 (GA4)</strong> and <strong>AWS PowerLogging</strong> into a user-facing dashboard to enable real-time monitoring and centralized debugging
      </li>
      <li>
        Participated in daily Agile standups, sprint planning, and retrospectives with a cross-functional team, gaining hands-on experience with collaborative software development practices
      </li>
    </ul>
  </div>

  <div className="experience-item">
    <h3>Math Tutor — OSU Math Stats Learning Center</h3>
    <p className="exp-dates">Aug 2024 – Apr 2025 • Columbus, OH</p>
    <ul>
      <li>
        Tutored undergraduate students in subjects including Calculus, Linear Algebra, and Probability in a drop-in learning environment
      </li>
      <li>
        Helped students debug math errors and reason through challenging problems, often using visual aids and analogies to reinforce understanding
      </li>
      <li>
        Cultivated communication and empathy skills while breaking down complex topics into simple, digestible concepts
      </li>
    </ul>
  </div>

  <div className="experience-item">
    <h3>UI/UX Design Intern — Empowered Futures</h3>
    <p className="exp-dates">Apr 2024 – Jun 2024 • Remote</p>
    <ul>
      <li>
        Collaborated with a distributed product team to improve UX consistency and mobile usability for a student-focused educational app
      </li>
      <li>
        Conducted user interviews and applied design principles to redesign internal workflow tools used by 200+ volunteers
      </li>
      <li>
        Delivered responsive wireframes and Figma prototypes aligned with accessibility best practices and stakeholder feedback
      </li>
    </ul>
  </div>

  <div className="experience-item">
    <h3>Math and English Tutor — Kumon</h3>
    <p className="exp-dates">Jul 2022 – Jul 2023 • Lewis Center, OH</p>
    <ul>
      <li>
        Mentored 30+ K-8 students in math and reading fundamentals through personalized instruction and goal-setting
      </li>
      <li>
        Built relationships with students to encourage growth mindset, academic confidence, and resilience in learning
      </li>
      <li>
        Helped optimize center operations by maintaining progress logs and identifying student-specific learning gaps
      </li>
    </ul>
  </div>
</section>
);

};


export default Experiences;
