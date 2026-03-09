import React from 'react';
import styles from './FuiButton.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
  initiate?: boolean;
  fullWidth?: boolean;
}

export const FuiButton: React.FC<ButtonProps> = ({ 
  variant = 'primary',
  initiate = false,
  fullWidth = false,
  className,
  children,
  ...props 
}) => {
  const variantClass = variant !== 'primary' ? styles[variant] : '';
  const initiateClass = initiate ? styles.initiate : '';
  const widthClass = fullWidth ? styles.fullWidth : '';
  
  return (
    <button 
      className={`${styles.button} ${variantClass} ${initiateClass} ${widthClass} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
};
