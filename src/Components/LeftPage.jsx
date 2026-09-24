import React from 'react';
import styles from './LeftPage.module.css';

function LeftPage({ profile, currentProject }) {
  const isAbout = currentProject.isAbout;

  if (isAbout) {
    return (
      <div className={`${styles.page} ${styles.leftPage}`}>
        <div className={styles.profileSection}>
          <div className={styles.avatarContainer}>
            <img src="/Fotinha.png" alt={profile.name} className={styles.avatar} />
          </div>
          <h1>{profile.name}</h1>
          <p>{profile.title}<br />{profile.subtitle}</p>
        </div>

        <div className={styles.skillsSection}>
          <div className={styles.skillsHeader}>
            <h3>Linguagens e ferramentas</h3>
          </div>
          <div className={styles.skillsBodySeparator}></div>
          <div className={styles.skillsBody}>
            <img src="/c-sharp.svg" alt="Ícone do C#" />
            <img src="/c++.svg" alt="Ícone do C++" />
            <img src="/java.svg" alt="Ícone do Java" />
          </div>
          <div className={styles.skillsBody}>
            <img src="/unity.svg" alt="Ícone do Unity" />
            <img src="/godot.svg" alt="Ícone do Godot" />
            <img src="/game-maker.svg" alt="Ícone do Game Maker" />
          </div>
        </div>

        <div className={styles.socialLinks}>
          <a href="https://github.com/raquelx99" target="_blank" rel="noopener noreferrer">
            <img src="/Github.svg" alt="Meu perfil no GitHub" className={styles.socialIcon} />
          </a>
          <a href="https://www.linkedin.com/in/raquel-albuquerque-93a053328" target="_blank" rel="noopener noreferrer">
            <img src="/Linkedin.svg" alt="Meu perfil no LinkedIn" className={styles.socialIcon} />
          </a>
        </div>
      </div>
    );
  }

  const images = currentProject?.images || [];

  return (
    <div className={`${styles.page} ${styles.leftPage} ${styles.galleryPage}`}>
      <div className={styles.galleryDisplayArea}>
        <div className={styles.galleryContent}>
          {images.length > 0 ? (
            <div className={styles.galleryGrid}>
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`${currentProject.title} - imagem ${index + 1}`}
                  className={`${styles.galleryImage} ${images.length === 1 ? styles.galleryImageSolo : ''}`}
                />
              ))}
            </div>
          ) : (
            <p className={styles.galleryPlaceholder}>Mais imagens em breve.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default LeftPage;
