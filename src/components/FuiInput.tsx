import React from 'react';
import styles from './FuiInput.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  showUnderline?: boolean;
}

export const FuiInput: React.FC<InputProps> = ({ 
  label, 
  showUnderline = true,
  className,
  ...props 
}) => {
  if (label || showUnderline) {
    return (
      <div className={styles.group}>
        {label && <label className={styles.label}>{label}</label>}
        <div className={styles.wrapper}>
          <input 
            className={`${styles.fuiInput} ${className || ''}`} 
            {...props} 
          />
          {showUnderline && <div className={styles.underline} />}
        </div>
      </div>
    );
  }

  return (
    <input 
      className={`${styles.fuiInput} ${className || ''}`} 
      {...props} 
    />
  );
};
