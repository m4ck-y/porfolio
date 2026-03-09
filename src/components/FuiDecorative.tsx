import React from 'react';
import styles from './FuiDecorative.module.css';

export const FuiCornerBrackets: React.FC = () => {
  return (
    <div className={styles.cornerContainer}>
      <div className={`${styles.corner} ${styles.tl}`} />
      <div className={`${styles.corner} ${styles.tr}`} />
      <div className={`${styles.corner} ${styles.bl}`} />
      <div className={`${styles.corner} ${styles.br}`} />
    </div>
  );
};

export const FuiDataPill: React.FC<{ label: string }> = ({ label }) => {
  return <span className={styles.dataPill}>{label}</span>;
};

export const FuiInfoRow: React.FC<{ label: string; value: string }> = ({ label, value }) => {
  return (
    <div className={styles.infoRow}>
      <span className={styles.infoLabel}>{label}</span>
      <span className={styles.infoValue}>{value}</span>
    </div>
  );
};
