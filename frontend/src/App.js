// src/App.jsx
import React, { useEffect } from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Skills from './components/skills';
import Projects from './components/projects';
import Experience from './components/experiences';
import Education from './components/education';
import Certifications from './components/certifications';
import Contact from './components/contact';
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
    <div className="font-sans text-gray-900 bg-gradient-to-br from-gray-700 to-black min-h-screen">
      <Navbar />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <div style={{ width: '95%', maxWidth: 1600, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="fade-section"><Hero /></div>
          <div className="fade-section"><Skills /></div>
          <div className="fade-section"><Projects /></div>
          <div className="fade-section"><Experience /></div>
          <div className="fade-section inline-sections">
            <Education />
            <Certifications />
          </div>
          <div className="fade-section"><Contact /></div>
        </div>
      </div>
      <BackToTop/>
    </div>
  );
}

export default App;
