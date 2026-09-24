import React from 'react';
import styles from './SideTabs.module.css';

function SideTabs({ categories, activeCategory, handleCategoryClick }) {
  return (
    <div className={styles.tabsWrapper}>
      {Object.keys(categories).map((category, index) => (
        <button
          key={category}
          className={`${styles.tab} ${activeCategory === category ? styles.active : ''}`}
          onClick={() => handleCategoryClick(category)}
          type="button"
          aria-label={`Categoria ${category}`}
          style={{ '--tab-index': index }}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default SideTabs;