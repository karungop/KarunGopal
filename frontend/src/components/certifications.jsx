// src/components/Certifications.jsx
import "../styles/main.css";

const Certifications = () => (
     <section id="certifications" className="section">
    <h2 className="center-text">Certifications & Courses</h2>
    <div className="certifications">
      <div className="cert-item">
        <p><strong>AWS Certified Cloud Practitioner</strong></p>
        <img src="/AWS.png" alt="AWS Certification" />
      </div>
      <div className="cert-item">
        <p><strong>PCEP Entry Level Python Programmer</strong></p>
        <img src="/PCEP.png" alt="PCEP Certification" />
      </div>
    </div>
  </section>
  );
  
  export default Certifications;