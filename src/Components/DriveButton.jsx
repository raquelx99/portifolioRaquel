import React from 'react';
import styles from './DriveButton.module.css';

function DriveButton({ href }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={styles.linkButton}
    >
      <img 
        src={'./Drawing.svg'}
        alt="Link para o Portfólio de Ilustração" 
        className={styles.buttonImage} 
      />
    </a>
  );
}

export default DriveButton;