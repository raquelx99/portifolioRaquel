// src/Components/SideTabs.jsx
import React from 'react';

function SideTabs({ categories, activeCategory, handleCategoryClick }) {
  return (
    <>
      {Object.keys(categories).map((category, index) => (
        <button
          key={category}
          className={`tab ${activeCategory === category ? 'active' : ''}`}
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