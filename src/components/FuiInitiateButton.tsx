import React from 'react';
import styles from './FuiInitiateButton.module.css';

interface FuiInitiateButtonProps {
  direction?: 'left' | 'right';
  label?: string;
  onClick?: () => void;
}

export const FuiInitiateButton: React.FC<FuiInitiateButtonProps> = ({ 
  direction = 'right',
  label = 'INITIATE',
  onClick 
}) => {
  const arrow = direction === 'right' ? '\u25B6' : '\u25C0';
  
  return (
    <button className={styles.initiateButton} onClick={onClick}>
      <span className={styles.arrow}>{arrow}</span>
      <span className={styles.label}>{label}</span>
    </button>
  );
};
