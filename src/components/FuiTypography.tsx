import React from 'react';
import styles from './FuiTypography.module.css';

export const FuiTypography: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleStyles}>
        <span className={styles.mainTitle}>{'//'} MAIN TITLE</span>
        <span className={styles.sectionLabel}>{'::'} SECTION LABEL {'::'}</span>
        <span className={styles.subsection}>{'[ SUBSECTION ]'}</span>
        <span className={styles.comment}>{'//'} Comment text</span>
      </div>

      <div className={styles.fakeData}>
        <span>47.3821 N 8.5417 E</span>
        <span>SYS.ID: 8847-AA-F</span>
        <span>00:00:00.000 UTC</span>
        <span>PACKET.LOSS: 0.0%</span>
        <span>MEM: 78.4% | CPU: 23.1%</span>
      </div>

      <div className={styles.symbols}>
        <span>* o -</span>
        <span>{'>'} {'>'} {'>'} {'>'}</span>
        <span>{'[ ]'}</span>
        <span># @ $ %</span>
      </div>

      <div className={styles.fontWeights}>
        <span className={styles.light}>Light (300)</span>
        <span className={styles.regular}>Regular (400)</span>
        <span className={styles.medium}>Medium (500)</span>
        <span className={styles.semiBold}>SemiBold (600)</span>
        <span className={styles.bold}>Bold (700)</span>
      </div>
    </div>
  );
};
