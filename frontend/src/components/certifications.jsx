// src/components/Certifications.jsx
import "../styles/main.css";

const Certifications = () => (
    <section id="certifications">
      <div className ="inline">
      <h2 className="center">Certifications & Courses</h2>
      <div className="skill-card">
        <div className="center">
          <strong>AWS Certified Cloud Practitioner</strong>
          <img src="AWS.png" alt="AWS" />
        </div>
        <div className="center">
          <strong>PCEP Entry Level Python Programmer</strong>
          <img src="PCEP.png" alt="PCEP" />
        </div>
      </div>
      </div>
    </section>
  );
  
  export default Certifications;