import React from 'react';
import styles from './FuiTooltip.module.css';

interface FuiTooltipProps {
  children: React.ReactNode;
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export const FuiTooltip: React.FC<FuiTooltipProps> = ({ 
  children, 
  content, 
  position = 'top' 
}) => {
  return (
    <span 
      className={`${styles.tooltip} ${styles[position]}`} 
      data-tip={content}
    >
      {children}
    </span>
  );
};
