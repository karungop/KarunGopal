import React, { useState, useEffect, useCallback } from 'react';

const NAV_ITEMS = [
  { id: 'about',       label: 'About' },
  { id: 'skills',      label: 'Skills' },
  { id: 'projects',    label: 'Projects' },
  { id: 'experience',  label: 'Experience' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'contact',     label: 'Contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = NAV_ITEMS.map(({ id }) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  }, []);

  return (
    <>
      {/* Desktop side rail */}
      <nav className="nav-rail" aria-label="Main navigation">
        <button className="nav-logo" onClick={scrollToTop} aria-label="Back to top">KG</button>
        <div className="nav-links">
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              className={`nav-link${active === id ? ' active' : ''}`}
              onClick={() => scrollTo(id)}
              aria-current={active === id ? 'true' : undefined}
            >
              {label}
            </button>
          ))}
        </div>
        <div />
      </nav>

      {/* Mobile top bar */}
      <div className="nav-topbar" aria-label="Mobile navigation">
        <span
          className="nav-topbar-logo"
          onClick={scrollToTop}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && scrollToTop()}
        >
          KG
        </span>
        <button
          className={`nav-hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile overlay */}
      <div className={`nav-overlay${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        {NAV_ITEMS.map(({ id, label }) => (
          <button key={id} className="nav-link" onClick={() => scrollTo(id)}>
            {label}
          </button>
        ))}
      </div>
    </>
  );
}
