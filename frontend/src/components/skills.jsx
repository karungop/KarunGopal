import React from 'react';

const SKILL_ROWS = [
  { category: 'Languages',   skills: ['Python', 'Java', 'TypeScript', 'JavaScript', 'Swift', 'C', 'C++', 'SQL', 'MATLAB'] },
  { category: 'Frameworks',  skills: ['React', 'Next.js', 'Django', 'Flask', 'Spring Boot'] },
  { category: 'Tools',       skills: ['Git', 'AWS', 'Firebase', 'GitHub Actions', 'Beautiful Soup', 'OpenAI API'] },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-header">
        <span className="section-numeral">02</span>
        <span className="section-label">Skills</span>
      </div>
      <div className="skills-inner">
        {SKILL_ROWS.map(({ category, skills }) => (
          <div key={category} className="skill-row">
            <span className="skill-category">{category}</span>
            <div className="skill-list">
              {skills.map((skill, i) => (
                <React.Fragment key={skill}>
                  {skill}
                  {i < skills.length - 1 && (
                    <span className="skill-sep" aria-hidden="true"> · </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
