import React from 'react';
import styles from './FuiCard.module.css';

interface CardProps {
  title?: string;
  value?: string;
  sub?: string;
  decorated?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const FuiCard: React.FC<CardProps> = ({ 
  title, 
  value, 
  sub, 
  decorated = false,
  className,
  children 
}) => {
  if (decorated) {
    return (
      <div className={`${styles.decorated} ${className || ''}`}>
        {title && <div className={styles.decoratedTitle}>// {title}</div>}
        {children || (
          <p style={{ fontSize: 12, color: '#00ffff80', lineHeight: 1.6 }}></p>
        )}
      </div>
    );
  }

  return (
    <div className={`${styles.card} ${className || ''}`}>
      {title && <div className={styles.title}>{title}</div>}
      {value && <div className={styles.value}>{value}</div>}
      {sub && <div className={styles.sub}>{sub}</div>}
      {children}
    </div>
  );
};

interface HeaderBarProps {
  title: string;
  dots?: Array<'active' | 'warning' | 'danger' | 'inactive'>;
  className?: string;
}

export const FuiHeaderBar: React.FC<HeaderBarProps> = ({ title, dots = [], className }) => {
  return (
    <div className={`${styles.header} ${className || ''}`}>
      <span className={styles.headerTitle}>// {title}</span>
      <div className={styles.headerControls}>
        {dots.map((dot, i) => (
          <span 
            key={i} 
            className={`${styles.dot} ${dot === 'active' ? styles.dotActive : dot === 'warning' ? styles.dotWarning : dot === 'danger' ? styles.dotDanger : ''}`}
          />
        ))}
      </div>
    </div>
  );
};
