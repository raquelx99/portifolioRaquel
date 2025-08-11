// src/Components/RightPage.jsx
import React from 'react';
import styles from './RightPage.module.css';

function RightPage({ categoryTitles, activeCategory, currentProject, projects, handlePrevProject, handleNextProject }) {
  return (
    <div className={`${styles.page} ${styles.rightPage}`}>
      <h2>{categoryTitles[activeCategory]}</h2>
      <div className={`${styles.projectDisplayArea}`}>
        <button onClick={handlePrevProject} disabled={projects.length <= 1} className={`${styles.navArrow} ${styles.prev}`}>&#9664;</button>
        <div className={`${styles.projectContent}`}>
          <div className={`${styles.projectMedia}`}>
            <div className={`${styles.videoContainer}`}>
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
            <div className={styles.tagsContainer}>
              {currentProject.tags.map(tag => <span key={tag} className={`${styles.tag} ${styles[tag.toLowerCase().replace('-', '')]}`}>{tag}</span>)}
            </div>
          )}
          <div className={styles.projectDescription}>
            <div dangerouslySetInnerHTML={{ __html: currentProject.description }}></div>
            {currentProject.technologies && currentProject.technologies.length > 0 && (
              <div className={styles.technologiesSection}>
                <h4 className={styles.techTitle}>Tecnologias Utilizadas</h4>
                <div className={styles.techIconsContainer}>
                  {currentProject.technologies.map((iconName, index) => (
                    <img
                      key={index}
                      src={`/${iconName}`}
                      alt={iconName.split('.')[0]}
                      className={styles.techIcon}
                    />
                  ))}
                </div>
                <img src={'/ShowTechs.svg'} alt="" className={styles.techImage} />
              </div>
            )}
          </div>
        </div>
        <button onClick={handleNextProject} disabled={projects.length <= 1} className={`${styles.navArrow} ${styles.next}`}>&#9654;</button>
      </div>
    </div>
  );
}

export default RightPage;