import React, { useState, useEffect } from 'react';
import styles from './Stars.module.css';

// --- CONFIGURAÇÕES DAS ESTRELAS ---
const NUM_STARS = 30;
const GUTTER_PERCENT = 20;
const MIN_SIZE = 1; 
const MAX_SIZE = 7; 

function generateStars() {
  const newStars = [];
  const starsPerSide = NUM_STARS / 2; 

  for (let i = 0; i < starsPerSide; i++) {
    newStars.push({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * GUTTER_PERCENT}%`,
      size: `${MIN_SIZE + Math.random() * (MAX_SIZE - MIN_SIZE)}px`,
      delay: `${Math.random() * 5}s`,
    });
  }

  for (let i = 0; i < starsPerSide; i++) {
    newStars.push({
      top: `${Math.random() * 100}%`,
      left: `${100 - Math.random() * GUTTER_PERCENT}%`,
      size: `${MIN_SIZE + Math.random() * (MAX_SIZE - MIN_SIZE)}px`,
      delay: `${Math.random() * 5}s`,
    });
  }
  
  return newStars;
}

function Stars() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    setStars(generateStars());
  }, []);

  return (
    <div className={styles.starsContainer}>
      {stars.map((star, index) => (
        <div
          key={index}
          className={styles.star}
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
          }}
        />
      ))}
    </div>
  );
}

export default Stars;