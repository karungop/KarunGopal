// src/components/Navbar.jsx
import "../styles/main.css";

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => {
  const links = ["home", "about", "education","work experience", "skills", "projects", "certifications", "resume", "contact"];

  return (
    <nav className="navbar">
      <ul>
        {links.map((link) => (
          <li key={link}>
            <button
              onClick={() => scrollToSection(link)}
              className="nav-link"
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
