import React from 'react';
import styles from './FuiCards.module.css';

interface FuiDecoratedCardProps {
  title: string;
  children: React.ReactNode;
  variant?: 'default' | 'elevated';
}

export const FuiDecoratedCard: React.FC<FuiDecoratedCardProps> = ({ 
  title, 
  children,
  variant = 'default' 
}) => {
  return (
    <div className={`${styles.decoratedCard} ${variant === 'elevated' ? styles.elevated : ''}`}>
      <div className={styles.decoratedTitle}>{title}</div>
      <div className={styles.decoratedContent}>{children}</div>
    </div>
  );
};
