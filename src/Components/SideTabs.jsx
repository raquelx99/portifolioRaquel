import React from 'react';
import styles from './SideTabs.module.css';

function SideTabs({ categories, activeCategory, handleCategoryClick }) {
  return (
    <>
      {Object.keys(categories).map((category, index) => (
        <button
          key={category}
          className={`${styles.tab} ${activeCategory === category ? styles.active : ''}`}
          onClick={() => handleCategoryClick(category)}
          style={{ top: `${80 + index * 70}px` }}
        >
          {category}
        </button>
      ))}
    </>
  );
}

export default SideTabs;