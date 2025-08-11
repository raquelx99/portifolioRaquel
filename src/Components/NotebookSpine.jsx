import React from 'react';
import styles from './NotebookSpine.module.css';

function NotebookSpine() {
  return (
    <div className={styles.notebookSpineContainer}>
      <img src="./Alça.png" alt="Lombada do caderno" className={styles.notebookSpineImage}/>
    </div>
  );
}

export default NotebookSpine;