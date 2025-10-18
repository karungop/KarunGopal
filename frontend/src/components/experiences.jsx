import React from 'react';
import "../styles/main.css";

const Experiences = () => {
  const experience = [
    {
      title: "Software Engineering Intern",
      company: "Principal Financial Group",
      location: "Des Moines, IA",
      period: "May 2025 – July 2025",
      description: "Worked on the Individual Solutions team within the Retirement and Income Solutions division to modernize internal tooling for customer operations",
      achievements: [
        "Developed full-stack features using React, TypeScript, and Java within a CI/CD pipeline, enabling seamless deployment of secure components",
        "Integrated Google Analytics 4 (GA4) and AWS PowerLogging into a user-facing dashboard to enable real-time monitoring and centralized debugging",
        "Participated in daily Agile standups, sprint planning, and retrospectives with a cross-functional team, gaining hands-on experience with collaborative software development practices"
      ]
    },
    {
      title: "Math Tutor",
      company: "OSU Math Stats Learning Center",
      location: "Columbus, OH",
      period: "Aug 2024 – Apr 2025",
      description: "Tutored undergraduate students in subjects including Calculus, Linear Algebra, and Probability in a drop-in learning environment",
      achievements: [
        "Helped students debug math errors and reason through challenging problems, often using visual aids and analogies to reinforce understanding",
        "Cultivated communication and empathy skills while breaking down complex topics into simple, digestible concepts"
      ]
    },
    {
      title: "UI/UX Design Intern",
      company: "Empowered Futures",
      location: "Remote",
      period: "Apr 2024 – Jun 2024",
      description: "Collaborated with a distributed product team to improve UX consistency and mobile usability for a student-focused educational app",
      achievements: [
        "Conducted user interviews and applied design principles to redesign internal workflow tools used by 200+ volunteers",
        "Delivered responsive wireframes and Figma prototypes aligned with accessibility best practices and stakeholder feedback"
      ]
    },
    {
      title: "Math and English Tutor",
      company: "Kumon",
      location: "Lewis Center, OH",
      period: "Jul 2022 – Jul 2023",
      description: "Mentored 30+ K-8 students in math and reading fundamentals through personalized instruction and goal-setting",
      achievements: [
        "Built relationships with students to encourage growth mindset, academic confidence, and resilience in learning",
        "Helped optimize center operations by maintaining progress logs and identifying student-specific learning gaps"
      ]
    }
  ];

  return (
    <section className="experience">
      <div className="section-content">
        <h3 className="section-title">Experience</h3>
        <div className="experience-list">
          {experience.map((job, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <h4 className="job-title">{job.title}</h4>
                <span className="job-period">{job.period}</span>
              </div>
              <h5 className="job-company">{job.company}</h5>
              <p className="job-description">{job.description}</p>
              <ul className="achievements-list">
                {job.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="achievement-item">{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Experiences;
