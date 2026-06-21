import React from 'react';

const EXPERIENCE = [
  {
    title: "Software Developer Engineer Intern",
    company: "IBM",
    location: "Poughkeepsie, NY",
    period: "May 2026 – Aug 2026",
    year: "2026",
    current: false,
    achievements: [
      "Implemented a workflow expansion for the Z Secure z/OS mainframe team using Python, TypeScript, and React Carbon, delivering all core features 6 weeks ahead of schedule.",
      "Engineered an ML explainability module for anomaly detection tool in Python, decoding normalized transformations into one-hot encoded vector matrices to map gradient-based feature importance for a Forwardfeed Neural Network.",
      "Designed a concurrent architecture by evaluating implementation trade-offs, deploying a robust file-locking mechanism that mitigated data corruption risks across interdependent system processes.",
    ],
  },
  {
    title: "Operating Systems Teaching Assistant",
    company: "Ohio State University",
    location: "Columbus, OH",
    period: "February 2026 – Present",
    year: "2026",
    current: false,
    achievements: [
      "Support students in an undergraduate Operating Systems course by holding weekly office hours focused on processes, synchronization, scheduling, and memory management.",
      "Respond to student email inquiries within 1 day on average, clarifying course concepts and assignment expectations.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "Principal Financial Group",
    location: "Des Moines, IA",
    period: "May 2025 – July 2025",
    year: "2025",
    current: false,
    achievements: [
      "Delivered features and tests across monolithic and microservice systems hosted on AWS written in Java, TypeScript, Spring Boot, React, and Dust which increased total story points completed by 15%.",
      "Automated 4 separate API requests into a single ServiceNow workflow by building a consolidated ticket creation endpoint which reduced operational steps by 4 and lowered manual processing time by as much as 2 days.",
      "Led a two week Agile sprint by coordinating standups, backlog grooming, and sprint reviews which resulted in completing 110% of planned story points.",
    ],
  },
  {
    title: "Math Tutor",
    company: "OSU Math Stats Learning Center",
    location: "Columbus, OH",
    period: "Aug 2024 – Apr 2025",
    year: "2024",
    current: false,
    achievements: [
      "Tutored students in Calculus, Linear Algebra, and Foundations of Higher Mathematics in a drop in and appointment based learning environment; Supported conceptual understanding and problem-solving strategies.",
      "Increased engagement during peak hours by facilitating group problem sessions with up to forty students with a response time of less than 1 day for out of session email questions.",
    ],
  },
  {
    title: "UI/UX Graphic Designer Intern",
    company: "Empowered Futures",
    location: "Remote",
    period: "Apr 2024 – June 2024",
    year: "2024",
    current: false,
    achievements: [
      "Enhanced user experience across cross platform applications by collaborating with a remote product team on wireframes, layout revisions, and design specifications which increased clarity and consistency for external users.",
      "Iterated on the mobile app design through multiple redesign cycles, including fully restarting the interface after a modernized vision was introduced by a board member.",
    ],
  },
  {
    title: "Math and English Tutor",
    company: "Kumon",
    location: "Lewis Center, OH",
    period: "Jul 2022 – Jul 2023",
    year: "2022",
    current: false,
    achievements: [
      "Built relationships with students to encourage growth mindset, academic confidence, and resilience in learning",
      "Helped optimize center operations by maintaining progress logs and identifying student-specific learning gaps",
    ],
  },
];

export default function Experiences() {
  return (
    <section id="experience">
      <div className="section-header">
        <span className="section-numeral">04</span>
        <span className="section-label">Experience</span>
      </div>
      <div className="experience-inner">
        {EXPERIENCE.map((job) => (
          <div key={job.title} className="exp-row">
            <div className="exp-left">
              <span className="exp-year">{job.year}</span>
              <span className="exp-period">{job.period}</span>
            </div>
            <div className={`exp-right${job.current ? ' current' : ''}`}>
              <p className="exp-title">{job.title}</p>
              <p className="exp-company">{job.company} — {job.location}</p>
              <ul className="exp-achievements">
                {job.achievements.map((a, i) => (
                  <li key={i} className="exp-achievement">{a}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
