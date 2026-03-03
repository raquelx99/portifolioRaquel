import React from 'react';
import styles from './SideTabs.module.css';

function SideTabs({ categories, activeCategory, handleCategoryClick }) {
  return (
    <div className={styles.tabsWrapper}>
      {Object.keys(categories).map((category) => (
        <button
          key={category}
          className={`${styles.tab} ${activeCategory === category ? styles.active : ''}`}
          onClick={() => handleCategoryClick(category)}
          type="button"
          aria-label={`Categoria ${category}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default SideTabs;