// src/App.jsx
import Navbar from './components/navbar';
import Header from './components/header';
import About from './components/about';
import Education from './components/education';
import Skills from './components/skills';
import Projects from './components/projects';
import Certifications from './components/certifications';
import Resume from './components/resume';
import Contact from './components/contact';

function App() {
  return (
    <div className="font-sans text-gray-900 bg-gray-50">
      <Navbar />
      <Header />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
