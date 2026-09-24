import React from 'react';
import styles from './MobileLayout.module.css';
import { ABOUT_CATEGORY } from '../data';

const categoryTitles = {
  'JOGOS & XR': 'Projetos de Jogos & XR',
  'SOFTWARE & APLICAÇÕES': 'Projetos de Software & Aplicações',
  [ABOUT_CATEGORY]: 'Sobre mim',
};

export default function MobileLayout({
  profile,
  categories,
  activeCategory,
  setActiveCategory,
  projects,
  projectIndex,
  setProjectIndex,
}) {
  const currentProject = projects[projectIndex];
  const isAbout = currentProject.isAbout;

  const goPrev = () => setProjectIndex((i) => (i - 1 + projects.length) % projects.length);
  const goNext = () => setProjectIndex((i) => (i + 1) % projects.length);

  return (
    <div className={styles.wrapper}>
      <main className={styles.scroll}>
        {/* Profile */}
        <section className={styles.profile}>
          <div className={styles.avatarWrap}>
            <img src="/Fotinha.png" alt={profile.name} className={styles.avatar} />
          </div>
          <h1 className={styles.name}>{profile.name}</h1>
          <p className={styles.title}>{profile.title}</p>
          <p className={styles.subtitle}>{profile.subtitle}</p>
        </section>

        {/* Skills */}
        <section className={styles.skills}>
          <h3 className={styles.skillsTitle}>Linguagens e ferramentas</h3>
          <div className={styles.skillsGrid}>
            {['c-sharp.svg', 'c++.svg', 'angular.svg', 'react.svg', 'typescript.svg', 'javascript.svg', 'java.svg', 'unity.svg', 'godot.svg', 'game-maker.svg', 'kotlin.svg'].map((icon) => (
              <img key={icon} src={`/${icon}`} alt="" className={styles.skillIcon} />
            ))}
          </div>
        </section>

        {/* Social */}
        <section className={styles.social}>
          <a href="https://github.com/raquelx99" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
            <img src="/Github.svg" alt="" className={styles.socialIcon} />
          </a>
          <a href="https://www.linkedin.com/in/raquel-albuquerque-93a053328" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
            <img src="/Linkedin.svg" alt="" className={styles.socialIcon} />
          </a>
        </section>

        {/* Category title */}
        <section className={styles.tabsSection}>
          <h2 className={styles.categoryTitle}>{categoryTitles[activeCategory] || activeCategory}</h2>
        </section>

        {/* Project */}
        <section className={styles.project}>
          {isAbout ? (
            <p className={`${styles.description} ${styles.descriptionExpanded}`}>
              Use as setas para conhecer minha trajetória, formação acadêmica e experiência profissional.
            </p>
          ) : (
            <>
              {(currentProject.videoUrl || currentProject.imageUrl) && (
                <div className={styles.videoWrap}>
                  {currentProject.videoUrl ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${currentProject.videoUrl}`}
                      title="Vídeo do projeto"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className={styles.video}
                    />
                  ) : (
                    <img src={currentProject.imageUrl} alt={currentProject.title} className={styles.video} />
                  )}
                </div>
              )}
              <h3 className={styles.projectTitle}>{currentProject.title}</h3>
              {currentProject.tags && currentProject.tags.length > 0 && (
                <div className={styles.tags}>
                  {currentProject.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              )}
              <div
                className={`${styles.description} ${!currentProject.videoUrl && !currentProject.imageUrl ? styles.descriptionExpanded : ''}`}
                dangerouslySetInnerHTML={{ __html: currentProject.description }}
              />
              {currentProject.images && currentProject.images.length > 0 && (
                <div className={styles.gallery}>
                  <h4 className={styles.techsTitle}>Galeria</h4>
                  <div className={styles.galleryGrid}>
                    {currentProject.images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`${currentProject.title} ${i + 1}`}
                        className={styles.galleryImage}
                      />
                    ))}
                  </div>
                </div>
              )}
              {currentProject.technologies && currentProject.technologies.length > 0 && (
                <div className={styles.techs}>
                  <h4 className={styles.techsTitle}>Tecnologias utilizadas</h4>
                  <div className={styles.techIcons}>
                    {currentProject.technologies.map((iconName, i) => (
                      <img key={i} src={`/${iconName}`} alt="" className={styles.techIcon} />
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          {projects.length > 1 && (
            <div className={styles.nav}>
              <button type="button" onClick={goPrev} className={styles.navBtn} aria-label="Projeto anterior">
                &#9664;
              </button>
              <span className={styles.navCounter}>{projectIndex + 1} / {projects.length}</span>
              <button type="button" onClick={goNext} className={styles.navBtn} aria-label="Próximo projeto">
                &#9654;
              </button>
            </div>
          )}
        </section>

        <div className={styles.bottomPad} />
      </main>

      {/* Fixed category tabs at bottom */}
      <div className={styles.fixedTabs}>
        {Object.keys(categories).map((cat) => (
          <button
            key={cat}
            type="button"
            className={activeCategory === cat ? styles.tabActive : styles.tab}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
