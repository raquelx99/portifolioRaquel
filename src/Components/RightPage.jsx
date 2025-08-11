// src/Components/RightPage.jsx
import React from 'react';

function RightPage({ categoryTitles, activeCategory, currentProject, projects, handlePrevProject, handleNextProject }) {
  return (
    <div className="page right-page">
      <h2>{categoryTitles[activeCategory]}</h2>
      <div className="project-display-area">
        <button onClick={handlePrevProject} disabled={projects.length <= 1} className="nav-arrow prev">&#9664;</button>
        <div className="project-content">
          <div className="project-media">
            <div className="video-container">
              <iframe
                // Usando o videoUrl do seu objeto de dados
                src={`https://www.youtube.com/embed/${currentProject.videoUrl}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <h3>{currentProject.title}</h3>
          {currentProject.tags.length > 0 && (
            <div className="project-tags">
              {currentProject.tags.map(tag => <span key={tag} className={`tag ${tag.toLowerCase()}`}>{tag}</span>)}
            </div>
          )}
          <div className="project-description">
            <div dangerouslySetInnerHTML={{ __html: currentProject.description }}></div>
            {currentProject.technologies && currentProject.technologies.length > 0 && (
              <div className="technologiesSection">
                <h4 className="techTitle">Tecnologias Utilizadas</h4>
                <div className="techIconsContainer">
                  {currentProject.technologies.map((iconName, index) => (
                    <img
                      key={index}
                      src={`/${iconName}`}
                      alt={iconName.split('.')[0]}
                      className="techIcon"
                    />
                  ))}
                </div>
                <img src={'/ShowTechs.svg'} alt="" className="techImage" />
              </div>
            )}
          </div>
        </div>
        <button onClick={handleNextProject} disabled={projects.length <= 1} className="nav-arrow next">&#9654;</button>
      </div>
    </div>
  );
}

export default RightPage;