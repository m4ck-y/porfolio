import React from 'react';
import styles from './FuiPulsingDots.module.css';

interface FuiPulsingDotProps {
  status?: 'online' | 'warning' | 'offline';
  label?: string;
}

export const FuiPulsingDot: React.FC<FuiPulsingDotProps> = ({ 
  status = 'online', 
  label 
}) => {
  return (
    <span className={`${styles.statusIndicator} ${styles[status]}`}>
      <span className={styles.pulsingDot} />
      {label && <span className={styles.label}>{label}</span>}
    </span>
  );
};

export const FuiPulsingDots: React.FC = () => {
  return (
    <div className={styles.container}>
      <FuiPulsingDot status="online" label="ONLINE" />
      <FuiPulsingDot status="warning" label="WARNING" />
      <FuiPulsingDot status="offline" label="OFFLINE" />
    </div>
  );
};
