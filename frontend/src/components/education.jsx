import React from 'react';

export default function Education() {
  return (
    <section id="credentials">
      <div className="section-header">
        <span className="section-numeral">05</span>
        <span className="section-label">Credentials</span>
      </div>
      <div className="credentials-inner">
        {/* Education */}
        <div>
          <p className="cred-block-label">Education</p>
          <p className="edu-institution">The Ohio State University</p>
          <p className="edu-degree">B.S. Computer Science &amp; Mathematics</p>
          <p className="edu-period">2023–2027</p>
          <p className="edu-meta">GPA: 3.76</p>
          <p className="edu-courses">
            Data Structures and Algorithms · Software Engineering · AI · Linear Algebra · Probability · OOP · Operating Systems
          </p>
        </div>

        {/* Certifications */}
        <div>
          <p className="cred-block-label">Certifications</p>
          <div className="cert-item">
            <p className="cert-name">AWS Certified Cloud Practitioner</p>
            <p className="cert-issuer">Amazon Web Services</p>
          </div>
          <div className="cert-item">
            <p className="cert-name">PCEP Entry Level Python Programmer</p>
            <p className="cert-issuer">Python Institute</p>
          </div>
        </div>
      </div>
    </section>
  );
}
