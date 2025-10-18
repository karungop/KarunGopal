import React from 'react';
import "../styles/main.css";

const Certifications = () => (
  <section className="about">
    <div className="section-content">
      <h3 className="section-title">Certifications & Courses</h3>
      <div className="about-text">
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginTop: '2rem' }}>
          <div style={{ textAlign: 'center' }}>
            <p><strong>AWS Certified Cloud Practitioner</strong></p>
            <img src="/AWS.png" alt="AWS Certification" style={{ width: '100px', height: 'auto', marginTop: '0.5rem' }} />
          </div>
          <div style={{ textAlign: 'center' }}>
            <p><strong>PCEP Entry Level Python Programmer</strong></p>
            <img src="/PCEP.png" alt="PCEP Certification" style={{ width: '100px', height: 'auto', marginTop: '0.5rem' }} />
          </div>
        </div>
      </div>
    </div>
  </section>
);
  
  export default Certifications;