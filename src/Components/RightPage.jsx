// src/Components/RightPage.jsx
import React from 'react';
import styles from './RightPage.module.css';

function RightPage({ categoryTitles, activeCategory, currentProject }) {
  const isAbout = currentProject.isAbout;

  return (
    <div className={`${styles.page} ${styles.rightPage}`}>
      <h2>{categoryTitles[activeCategory] || activeCategory}</h2>
      <div className={`${styles.projectDisplayArea}`}>
        <div className={`${styles.projectContent}`}>
          {isAbout ? (
            <div className={`${styles.projectDescription} ${styles.descriptionExpanded}`}>
              <p>Use as setas para conhecer minha trajetória, formação acadêmica e experiência profissional.</p>
            </div>
          ) : (
            <>
              {(currentProject.videoUrl || currentProject.imageUrl) && (
                <div className={`${styles.projectMedia}`}>
                  <div className={`${styles.videoContainer}`}>
                    {currentProject.videoUrl ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${currentProject.videoUrl}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <img src={currentProject.imageUrl} alt={currentProject.title} />
                    )}
                  </div>
                </div>
              )}
              <h3>{currentProject.title}</h3>
              {currentProject.tags.length > 0 && (
                <div className={styles.tagsContainer}>
                  {currentProject.tags.map(tag => <span key={tag} className={`${styles.tag} ${styles[tag.toLowerCase().replace('-', '')]}`}>{tag}</span>)}
                </div>
              )}
              <div className={`${styles.projectDescription} ${!currentProject.videoUrl && !currentProject.imageUrl ? styles.descriptionExpanded : ''}`}>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default RightPage;
