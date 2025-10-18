import React, { useState } from 'react';
import Wireframe1 from './components/Wireframe1';
import Wireframe2 from './components/Wireframe2';
import Wireframe3 from './components/Wireframe3';
import './App.css';

function App() {
  const [currentWireframe, setCurrentWireframe] = useState(1);
  const [currentTheme, setCurrentTheme] = useState('apple');

  const wireframes = [
    { id: 1, name: 'Traditional Layout', description: 'Classic single-column resume format', hasThemes: true },
    { id: 2, name: 'Modern Cards', description: 'Contemporary card-based design with gradients', hasThemes: false },
    { id: 3, name: 'Sidebar Navigation', description: 'Interactive sidebar with section navigation', hasThemes: false }
  ];

  const themes = [
    { id: 'apple', name: 'Apple Style', description: 'Clean white minimalistic design' },
    { id: 'terminal', name: 'Terminal Style', description: 'Dark retro computer terminal aesthetic' }
  ];

  const renderWireframe = () => {
    switch (currentWireframe) {
      case 1:
        return <Wireframe1 theme={currentTheme} />;
      case 2:
        return <Wireframe2 />;
      case 3:
        return <Wireframe3 />;
      default:
        return <Wireframe1 theme={currentTheme} />;
    }
  };

  return (
    <div className="app">
      {/* Wireframe Selector */}
      <div className="wireframe-selector">
        <div className="selector-header">
          <h1>Personal Site Wireframes</h1>
          <p>Choose a layout to preview your resume website</p>
        </div>
        
        <div className="wireframe-options">
          {wireframes.map((wireframe) => (
            <div
              key={wireframe.id}
              className={`wireframe-option ${currentWireframe === wireframe.id ? 'active' : ''}`}
              onClick={() => setCurrentWireframe(wireframe.id)}
            >
              <h3>Wireframe {wireframe.id}</h3>
              <h4>{wireframe.name}</h4>
              <p>{wireframe.description}</p>
            </div>
          ))}
        </div>

        {/* Theme Selector - Only show for Wireframe 1 */}
        {currentWireframe === 1 && (
          <div className="theme-selector">
            <h3>Choose Theme</h3>
            <div className="theme-options">
              {themes.map((theme) => (
                <div
                  key={theme.id}
                  className={`theme-option ${currentTheme === theme.id ? 'active' : ''}`}
                  onClick={() => setCurrentTheme(theme.id)}
                >
                  <h4>{theme.name}</h4>
                  <p>{theme.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Wireframe Preview */}
      <div className="wireframe-preview">
        <div className="preview-header">
          <h2>Preview: {wireframes[currentWireframe - 1].name}</h2>
          <div className="preview-actions">
            <button 
              className="action-button"
              onClick={() => window.print()}
            >
              🖨️ Print Preview
            </button>
            <button 
              className="action-button"
              onClick={() => {
                const element = document.querySelector('.wireframe-preview > div:last-child');
                if (element) {
                  element.style.zoom = '0.5';
                  setTimeout(() => element.style.zoom = '1', 100);
                }
              }}
            >
              🔍 Zoom
            </button>
          </div>
        </div>
        
        <div className="preview-container">
          {renderWireframe()}
        </div>
      </div>
    </div>
  );
}

export default App;
