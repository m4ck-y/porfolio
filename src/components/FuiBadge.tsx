import React from 'react';
import styles from './FuiBadge.module.css';

interface BadgeProps {
  variant?: 'info' | 'success' | 'warning' | 'danger';
  children: React.ReactNode;
  className?: string;
}

export const FuiBadge: React.FC<BadgeProps> = ({ variant = 'info', className, children }) => {
  return (
    <span className={`${styles.badge} ${styles[variant]} ${className || ''}`}>
      {children}
    </span>
  );
};

interface ChipProps {
  icon?: string;
  children: React.ReactNode;
  className?: string;
}

export const FuiChip: React.FC<ChipProps> = ({ icon, className, children }) => {
  return (
    <span className={`${styles.chip} ${className || ''}`}>
      {icon && <span className={styles.chipIcon}>{icon}</span>}
      {children}
    </span>
  );
};

interface DataPillProps {
  children: React.ReactNode;
  className?: string;
}

export const FuiDataPill: React.FC<DataPillProps> = ({ className, children }) => {
  return (
    <span className={`${styles.dataPill} ${className || ''}`}>
      {children}
    </span>
  );
};

interface StatusIndicatorProps {
  status: 'online' | 'offline' | 'warning';
  children: React.ReactNode;
  showDot?: boolean;
  className?: string;
}

export const FuiStatusIndicator: React.FC<StatusIndicatorProps> = ({ 
  status, 
  showDot = true, 
  className, 
  children 
}) => {
  const statusClass = status === 'warning' ? styles.statusWarning : styles[status];
  
  return (
    <span className={`${styles.status} ${statusClass} ${className || ''}`}>
      {showDot && <span className={styles.statusDot} />}
      {children}
    </span>
  );
};
