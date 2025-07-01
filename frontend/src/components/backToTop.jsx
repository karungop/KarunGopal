import { useEffect } from 'react';
import "../styles/main.css";


const BackToTop = () => {
  useEffect(() => {
    const handleScroll = () => {
      const btn = document.getElementById('backToTop');
      if (window.scrollY > 300) {
        btn.style.display = 'block';
      } else {
        btn.style.display = 'none';
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="backToTop" onClick={scrollTop}>
      ↑ Back to Top
    </div>
  );
};

export default BackToTop;
