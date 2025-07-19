import React from 'react';
import styles from './Stars.module.css';

const starsData = [
  { top: '10%', left: '25%', size: '2px', delay: '0s' },
  { top: '25%', left: '10%', size: '3px', delay: '1s' },
  { top: '15%', left: '70%', size: '1px', delay: '2s' },
  { top: '30%', left: '90%', size: '2px', delay: '0.5s' },
  { top: '50%', left: '50%', size: '4px', delay: '2.5s' },
  { top: '65%', left: '15%', size: '2px', delay: '3s' },
  { top: '80%', left: '80%', size: '1px', delay: '1.2s' },
  { top: '90%', left: '40%', size: '3px', delay: '4s' },
];

function Stars() {
  return (
    <div className={styles.starsContainer}>
      {starsData.map((star, index) => (
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
