import React, { useState } from 'react';
import './App.css';
import { portfolioData } from './data';
import MusicPlayer from './Components/MusicPlayer.jsx';
import Stars from './Components/Stars.jsx';

function App() {
  const [activeCategory, setActiveCategory] = useState('JOGOS');
  const [projectIndex, setProjectIndex] = useState(0);

  const { profile, categories } = portfolioData;
  const projects = categories[activeCategory];
  const currentProject = projects[projectIndex];

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setProjectIndex(0);
  };
  
  const handleNextProject = () => {
    setProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  }

  const handlePrevProject = () => {
    setProjectIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  }

  const categoryTitles = {
    JOGOS: "PROJETOS DESENVOLVIMENTO DE JOGOS",
    WEB: "PROJETOS DESENVOLVIMENTO WEB",
    MOBILE: "PROJETOS DESENVOLVIMENTO MOBILE"
  }

  return (
    <>
    < Stars />
    <div className="portfolio-container">
      <div className="book-cover">
        <div className="back-page"></div>
        
        <div className="notebook">
          <div className="page left-page">
            <div className="profile-section">
              <div className="avatar-container">
                <img src="/Fotinha.png" alt="Raquel Quirino" className="avatar" />
              </div>
              <h1>{profile.name}</h1>
              <p>{profile.title}<br />{profile.subtitle}</p>
            </div>
            
            <div className="skills-section">
              <div className="skills-header">
                <h3>Linguagens e ferramentas</h3>
              </div>
              <div className="skills-body">
                  <img src="/image 4.svg" alt="Ícone do C++" />
                  <img src="/image 3.svg" alt="Ícone do C#" />
                  <img src="/image 5.svg" alt="Ícone do Angular" />
                  <img src="/image 6.svg" alt="Ícone do React" />
                  <img src="/image 7.svg" alt="Ícone do TypeScript" />
                  <img src="/image 8.svg" alt="Ícone do JavaScript" />
                  <img src="/image 10.svg" alt="Ícone do Java" />
                  <img src="/image 9.svg" alt="Ícone do Unity" />
                  <img src="/image 11.svg" alt="Ícone do Godot" />
                  <img src="/image 12.svg" alt="Ícone do Game Maker" />
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://github.com/raquelx99" target="_blank" rel="noopener noreferrer">
                <img src="/Github.svg" alt="Meu perfil no GitHub" className="social-icon" />
              </a>
              <a href="https://www.linkedin.com/in/raquel-albuquerque-93a053328" target="_blank" rel="noopener noreferrer">
                <img src="/Linkedin.svg" alt="Meu perfil no LinkedIn" className="social-icon" />
              </a>
            </div>
          </div>

          <div className="notebook-spine-container">
            <img src="./Alça.png" alt="Lombada do caderno" className="notebook-spine-image"/>
          </div>

          <div className="page right-page">
            <h2>{categoryTitles[activeCategory]}</h2>
            <div className="project-display-area">
              <button onClick={handlePrevProject} disabled={projects.length <= 1} className="nav-arrow prev">&#9664;</button>
              <div className="project-content">
                <div className="project-media">▶</div>
                <h3>{currentProject.title}</h3>
                {currentProject.tags.length > 0 && (
                  <div className="project-tags">
                    {currentProject.tags.map(tag => <span key={tag} className={`tag ${tag.toLowerCase()}`}>{tag}</span>)}
                  </div>
                )}
                <div
                  className="project-description"
                  dangerouslySetInnerHTML={{ __html: currentProject.description }}
                ></div>
              </div>
              <button onClick={handleNextProject} disabled={projects.length <= 1} className="nav-arrow next">&#9654;</button>
            </div>
          </div>
        </div>

        {Object.keys(categories).map((category, index) => (
          <button
            key={category}
            className={`tab ${activeCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category)}
            style={{ top: `${80 + index * 70}px` }}
          >
            {category}
          </button>
        ))}

      </div>
    </div>
    <MusicPlayer />
    </>
  );
}

export default App;