// src/components/Navbar.jsx
import "../styles/main.css";

const Navbar = () => {
  const links = ["home", "about", "education", "skills", "projects", "certifications", "resume", "contact"];

  return (
    <nav className="navbar">
      <ul>
        {links.map((link) => (
          <li key={link}>
            <a href={`#${link}`}>{link.charAt(0).toUpperCase() + link.slice(1).replace("-", " ")}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
