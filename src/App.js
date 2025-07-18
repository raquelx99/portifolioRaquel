// src/App.js
import React, { useState } from 'react';
import './App.css';
import { portfolioData } from './data';

function App() {
  const [activeCategory, setActiveCategory] = useState('JOGOS');
  const [projectIndex, setProjectIndex] = useState(0);

  const { profile, categories } = portfolioData;
  const projects = categories[activeCategory];
  const currentProject = projects[projectIndex];

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setProjectIndex(0); // Reseta para o primeiro projeto da nova categoria
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
    <div className="portfolio-container">
      <div className="book-cover">
        <div className="back-page"></div>
        <div className="notebook">
          {/* Left Page */}
          <div className="page left-page">
            <div className="profile-section">
              <div className="avatar-container">
                <div className="tape tape1"></div>
                <img src="./Fotinha.png" alt="Raquel Quirino" className="avatar" />
                <div className="tape tape2"></div>
              </div>
              <h1>{profile.name}</h1>
              <p>{profile.title}<br />{profile.subtitle}</p>
            </div>
            <div className="skills-section">
              <div className="skills-header">
                <h3>Linguagens e ferramentas</h3>
              </div>

              <div className="skills-body">
                {/* Substitua os nomes dos arquivos pelos seus. Exemplo: */}
                <img src="./image 4.svg" alt="Ícone do C++" />
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
              {/* Lembre-se de colocar o link para o seu perfil no href */}
              <a href="https://github.com/raquelx99" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/Github.svg" 
                  alt="Meu perfil no GitHub" 
                  className="social-icon" 
                />
              </a>
              
              <a href="https://www.linkedin.com/in/raquel-albuquerque-93a053328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/Linkedin.svg" 
                  alt="Meu perfil no LinkedIn" 
                  className="social-icon" 
                />
              </a>
          </div>
          </div>

          {/* Side Tabs */}
          <div className="side-tabs">
            {Object.keys(categories).map(category => (
              <button
                key={category}
                className={`tab ${activeCategory === category ? 'active' : ''}`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Notebook Spine */}
         <div className="notebook-spine-container">
            <img src="./Alça.png" alt="Lombada do caderno" className="notebook-spine-image"/>
        </div>

          {/* Right Page */}
          <div className="page right-page">
            <h2>{categoryTitles[activeCategory]}</h2>

            {/* ▼ SUBSTITUA O CONTEÚDO ANTIGO POR ESTE NOVO BLOCO ▼ */}

            <div className="project-display-area">
                {/* Seta da Esquerda */}
                <button 
                    onClick={handlePrevProject} 
                    disabled={projects.length <= 1} 
                    className="nav-arrow prev"
                >
                    &#9664;
                </button>

                {/* Conteúdo principal do projeto */}
                <div className="project-content">
                    <div className="project-media">
                        ▶
                    </div>
                    <h3>{currentProject.title}</h3>
                    {currentProject.tags.length > 0 && (
                        <div className="project-tags">
                            {currentProject.tags.map(tag => <span key={tag} className={`tag ${tag.toLowerCase()}`}>{tag}</span>)}
                        </div>
                    )}
                    <div
                        className="project-description"
                        dangerouslySetInnerHTML={{ __html: currentProject.description }}
                    >
                    </div>
                </div>

                {/* Seta da Direita */}
                <button 
                    onClick={handleNextProject} 
                    disabled={projects.length <= 1} 
                    className="nav-arrow next"
                >
                    &#9654;
                </button>
            </div>

            {/* ▲ FIM DO BLOCO DE SUBSTITUIÇÃO ▲ */}
            {/* Perceba que o <div className="project-navigation"> antigo foi removido */}
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;