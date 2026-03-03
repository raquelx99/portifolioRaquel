// src/App.js
import React, { useState } from 'react';
import './App.css';
import { portfolioData } from './data';
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

function App() {
  const [activeCategory, setActiveCategory] = useState('JOGOS');
  const [projectIndex, setProjectIndex] = useState(0);
  const isMobile = useIsMobile();

  const { profile, categories } = portfolioData;
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
    JOGOS: "PROJETOS DESENVOLVIMENTO DE JOGOS",
    WEB: "PROJETOS DESENVOLVIMENTO WEB",
    MOBILE: "PROJETOS DESENVOLVIMENTO MOBILE"
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
        <DriveButton href="https://drive.google.com/drive/folders/1-0YsYVJTUGH-wTqJiZqMHwOrWV2u1zHv?hl=pt-br" />
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
            <LeftPage profile={profile} />
            <NotebookSpine />
            <RightPage
              categoryTitles={categoryTitles}
              activeCategory={activeCategory}
              currentProject={currentProject}
              projects={projects}
              handlePrevProject={handlePrevProject}
              handleNextProject={handleNextProject}
            />
          </div>
          <SideTabs
            categories={categories}
            activeCategory={activeCategory}
            handleCategoryClick={handleCategoryClick}
          />
        </div>
      </div>
      <DriveButton href="https://drive.google.com/drive/folders/1-0YsYVJTUGH-wTqJiZqMHwOrWV2u1zHv?hl=pt-br" />
      <MusicPlayer />
    </>
  );
}

export default App;