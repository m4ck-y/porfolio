import React from 'react';
import styles from './FuiBackgrounds.module.css';

export const FuiBackgrounds: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textureGrid}>
        <div className={`${styles.texture} ${styles.dots}`}>DOTS</div>
        <div className={`${styles.texture} ${styles.grid}`}>GRID</div>
        <div className={`${styles.texture} ${styles.cross}`}>CROSS</div>
        <div className={`${styles.texture} ${styles.hex}`}>HEX</div>
      </div>
    </div>
  );
};

export const FuiGridPattern: React.FC = () => {
  return (
    <div className={styles.gridPattern}>
      <div className={styles.scanLine} />
    </div>
  );
};
