import React from 'react';
import styles from './FuiGlitch.module.css';

interface FuiGlitchProps {
    text: string;
    tag?: 'h1' | 'h2' | 'h3' | 'span';
    className?: string;
}

export const FuiGlitch: React.FC<FuiGlitchProps> = ({ text, tag: Tag = 'h1', className = '' }) => {
    return (
        <Tag className={`${styles.glitch} ${className}`} data-text={text}>
            {text}
        </Tag>
    );
};
