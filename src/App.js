// src/App.js
import React, { useState } from 'react';
import './App.css';
import { portfolioData, ABOUT_CATEGORY } from './data';
import styles from './App.module.css';
import { useIsMobile } from './hooks/useIsMobile';

import MusicPlayer from './Components/MusicPlayer.jsx';
import Stars from './Components/Stars.jsx';
import DriveButton from './Components/DriveButton.jsx';
import LeftPage from './Components/LeftPage.jsx';
import RightPage from './Components/RightPage.jsx';
import NotebookSpine from './Components/NotebookSpine.jsx';
import SideTabs from './Components/SideTabs.jsx';
import MobileLayout from './Components/MobileLayout.jsx';

const { profile, categories } = portfolioData;
const categoryKeys = Object.keys(categories);

function App() {
  const [activeCategory, setActiveCategory] = useState(categoryKeys[0]);
  const [projectIndex, setProjectIndex] = useState(0);
  const isMobile = useIsMobile();

  const projects = categories[activeCategory];
  const currentProject = projects[projectIndex];

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setProjectIndex(0);
  };

  const handleNextProject = () => {
    setProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrevProject = () => {
    setProjectIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const categoryTitles = {
    "JOGOS & XR": "PROJETOS DE JOGOS & XR",
    "SOFTWARE & APLICAÇÕES": "PROJETOS DE SOFTWARE & APLICAÇÕES",
    [ABOUT_CATEGORY]: "SOBRE MIM"
  };

  if (isMobile) {
    return (
      <>
        <Stars />
        <MobileLayout
          profile={profile}
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={handleCategoryClick}
          projects={projects}
          projectIndex={projectIndex}
          setProjectIndex={setProjectIndex}
        />
        <DriveButton href="https://raquelx99.itch.io/" />
        <MusicPlayer />
      </>
    );
  }

  return (
    <>
      <Stars />
      <div className={styles.portfolioContainer}>
        <div className={styles.bookCover}>
          <div className={styles.backPage}></div>
          <div className={styles.notebook}>
            <LeftPage
              profile={profile}
              currentProject={currentProject}
            />
            <NotebookSpine />
            <RightPage
              categoryTitles={categoryTitles}
              activeCategory={activeCategory}
              currentProject={currentProject}
            />
          </div>
          {projects.length > 1 && (
            <>
              <button
                onClick={handlePrevProject}
                className={`${styles.bookNavArrow} ${styles.bookNavPrev}`}
                aria-label="Projeto anterior"
              >
                &#9664;
              </button>
              <button
                onClick={handleNextProject}
                className={`${styles.bookNavArrow} ${styles.bookNavNext}`}
                aria-label="Próximo projeto"
              >
                &#9654;
              </button>
            </>
          )}
          <SideTabs
            categories={categories}
            activeCategory={activeCategory}
            handleCategoryClick={handleCategoryClick}
          />
        </div>
      </div>
      <DriveButton href="https://raquelx99.itch.io/" />
      <MusicPlayer />
    </>
  );
}

export default App;