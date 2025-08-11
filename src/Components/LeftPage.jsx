import React from 'react';
import styles from './LeftPage.module.css';

function LeftPage({ profile }) {
  return (
    <div className={`${styles.page} ${styles.leftPage}`}>
      <div className={styles.profileSection}>
        <div className={styles.avatarContainer}>
          <img src="/Fotinha.png" alt="Raquel Quirino" className={styles.avatar} />
        </div>
        <h1>{profile.name}</h1>
        <p>{profile.title}<br />{profile.subtitle}</p>
      </div>

      <div className={styles.skillsSection}>
        <div className={styles.skillsHeader}>
          <h3>Linguagens e ferramentas</h3>
        </div>
        <div className={styles.skillsBody}>
            <img src="/c-sharp.svg" alt="Ícone do C#" />
            <img src="/c++.svg" alt="Ícone do C++" />
            <img src="/angular.svg" alt="Ícone do Angular" />
            <img src="/react.svg" alt="Ícone do React" />
            <img src="/typescript.svg" alt="Ícone do TypeScript" />
            <img src="/javascript.svg" alt="Ícone do JavaScript" />
            <img src="/java.svg" alt="Ícone do Java" />
            <img src="/unity.svg" alt="Ícone do Unity" />
            <img src="/godot.svg" alt="Ícone do Godot" />
            <img src="/game-maker.svg" alt="Ícone do Game Maker" />
            <img src="/kotlin.svg" alt="Ícone do Kotlin" />
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

export default LeftPage;