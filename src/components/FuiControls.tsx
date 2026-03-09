import React, { useState } from 'react';
import styles from './FuiControls.module.css';

interface ToggleProps {
  defaultActive?: boolean;
  onChange?: (active: boolean) => void;
  label?: string;
  className?: string;
}

export const FuiToggle: React.FC<ToggleProps> = ({ 
  defaultActive = false, 
  onChange,
  label,
  className 
}) => {
  const [active, setActive] = useState(defaultActive);

  const handleClick = () => {
    const newState = !active;
    setActive(newState);
    onChange?.(newState);
  };

  return (
    <div className={styles.group}>
      <div 
        className={`${styles.toggle} ${active ? styles.active : ''} ${className || ''}`}
        onClick={handleClick}
      />
      {label && <span className={styles.label}>{label}</span>}
    </div>
  );
};

interface SliderProps {
  min?: number;
  max?: number;
  value?: number;
  onChange?: (value: number) => void;
  label?: string;
  showValues?: boolean;
  className?: string;
}

export const FuiSlider: React.FC<SliderProps> = ({ 
  min = 0, 
  max = 100, 
  value = 50,
  onChange,
  label,
  showValues = true,
  className 
}) => {
  return (
    <div className={className}>
      {label && (
        <label className={styles.label} style={{ display: 'block', marginBottom: 8 }}>
          {label}
        </label>
      )}
      <input 
        type="range" 
        className={styles.slider}
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange?.(Number(e.target.value))}
      />
      {showValues && (
        <div className={styles.rangeValues}>
          <span>{min}%</span>
          <span>{max}%</span>
        </div>
      )}
    </div>
  );
};

interface ProgressBarProps {
  value: number;
  variant?: 'default' | 'warning' | 'danger';
  label?: string;
  showValue?: boolean;
  className?: string;
}

export const FuiProgressBar: React.FC<ProgressBarProps> = ({ 
  value, 
  variant = 'default',
  label,
  showValue = true,
  className 
}) => {
  const fillClass = variant !== 'default' ? styles[variant] : '';

  return (
    <div className={className}>
      {label && (
        <label style={{ fontSize: 9, color: '#00ffff60', fontFamily: 'var(--fui-font-mono)', letterSpacing: 2 }}>
          {label} {showValue && `(${value}%)`}
        </label>
      )}
      <div className={styles.progressBar}>
        <div 
          className={`${styles.progressFill} ${fillClass}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
};
