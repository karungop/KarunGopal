// src/components/Contact.jsx
import "../styles/main.css";

const Contact = () => (
    <section id="contact" className="section">
  <h2 className="center-text">Get In Touch</h2>
  <p className="center-text">
    Whether you're a recruiter, engineer, or fellow student, I’d love to connect.<br />
    Feel free to send me a message or explore my GitHub to see what I’ve been building.
  </p>
  <ul className="contact-list">
    <li>Email: <a href="mailto:karun.gopal@gmail.com">karun.gopal@gmail.com</a></li>
    <li>LinkedIn: <a href="https://linkedin.com/in/karun-gopal" target="_blank" rel="noopener noreferrer">karun-gopal</a></li>
    <li>GitHub: <a href="https://github.com/karungop" target="_blank" rel="noopener noreferrer">karungop</a></li>
  </ul>
</section>
  );
  
  export default Contact;
  