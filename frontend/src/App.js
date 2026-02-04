// src/App.jsx
import React, { useEffect } from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Experience from './components/experiences';
import Education from './components/education';
import Certifications from './components/certifications';
import Contact from './components/contact';
import Resume from './components/resume';
import BackToTop from './components/backToTop';
import "./styles/main.css";

function App() {
  useEffect(() => {
    const fadeSections = document.querySelectorAll('.fade-section');
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          } else {
            entry.target.classList.remove('fade-in');
          }
        });
      },
      { threshold: 0.15 }
    );
    fadeSections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-container apple-theme">
      <Navbar />
      <div className="fade-section"><Hero /></div>
      <div className="fade-section"><About /></div>
      <div className="fade-section"><Skills /></div>
      <div className="fade-section"><Projects /></div>
      <div className="fade-section"><Experience /></div>
      <div className="fade-section inline-sections">
        <Education />
        <Certifications />
      </div>
      <div className="fade-section"><Contact /></div>
      <div className="fade-section"><Resume /></div>
      <BackToTop/>
    </div>
  );
}

export default App;
