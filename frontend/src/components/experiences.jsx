import React from 'react';
import "../styles/main.css";

const Experiences = () => {
  const experience = [
    {
      title: "Operating Systems Teaching Assistant",
      company: "Ohio State University",
      location: "Columbus, OH",
      period: "February 2026 – Present",
      achievements: [
        "Conducted weekly office hours to support students in an undergraduate Operating Systems course, addressing questions on process management, synchronization primitives, CPU scheduling algorithms, and memory management techniques.",
        "Maintained a 1-day average response time to student email inquiries, providing detailed clarifications on course concepts and assignment requirements to enhance understanding and performance."
      ]
    },
    {
      title: "Software Engineering Intern",
      company: "Principal Financial Group",
      location: "Des Moines, IA",
      period: "May 2025 – July 2025",
      achievements: [
        "Delivered production features across monolithic and microservice systems by implementing backend and frontend components in Java, TypeScript, Spring Boot, React, and Dust which increased total story points completed by 15%.",
        "Automated 4 separate API requests into a single ServiceNow workflow by building a consolidated ticket creation endpoint which reduced operational steps by 4 and lowered manual processing time by as much as 2 days.",
        "Led a two week Agile sprint by coordinating standups, backlog grooming, and sprint reviews which resulted in completing 110% of planned story points."
      ]
    },
    {
      title: "Math Tutor",
      company: "OSU Math Stats Learning Center",
      location: "Columbus, OH",
      period: "Aug 2024 – Apr 2025",
      achievements: [
        "Tutored students in Calculus, Linear Algebra, and Foundations of Higher Mathematics in a drop in and appointment based learning environment; Supported conceptual understanding and problem-solving strategies.",
        "Increased engagement during peak hours by facilitating group problem sessions with up to forty students with a response time of less than 1 day for out of session email questions."
      ]
    },
    {
      title: "UI/UX Graphic Designer Intern",
      company: "Empowered Futures",
      location: "Remote",
      period: "Apr 2024 – June 2024",
      achievements: [
        "Enhanced user experience across cross platform applications by collaborating with a remote product team on wireframes, layout revisions, and design specifications which increased clarity and consistency for external users.",
        "Iterated on the mobile app design through multiple redesign cycles, including fully restarting the interface after a modernized vision was introduced by a board member."
      ]
    },
    {
      title: "Math and English Tutor",
      company: "Kumon",
      location: "Lewis Center, OH",
      period: "Jul 2022 – Jul 2023",
      achievements: [
        "Built relationships with students to encourage growth mindset, academic confidence, and resilience in learning",
        "Helped optimize center operations by maintaining progress logs and identifying student-specific learning gaps"
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="section-content">
        <h3 className="section-title">Experience</h3>
        <div className="experience-list">
          {experience.map((job, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <h4 className="job-title">{job.title}</h4>
                <span className="job-period">{job.period}</span>
              </div>
              <h5 className="job-company">{job.company} — {job.location}</h5>
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
