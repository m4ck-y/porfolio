import React, { useState, useEffect, useCallback } from 'react';
import styles from './FuiTypewriter.module.css';

interface FuiTypewriterProps {
    phrases: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseTime?: number;
    prefix?: string;
    className?: string;
}

export const FuiTypewriter: React.FC<FuiTypewriterProps> = ({
    phrases,
    typingSpeed = 80,
    deletingSpeed = 40,
    pauseTime = 2000,
    prefix = '// ',
    className = '',
}) => {
    const [text, setText] = useState('');
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const currentPhrase = phrases[phraseIndex];

    const tick = useCallback(() => {
        if (!isDeleting) {
            if (text.length < currentPhrase.length) {
                setText(currentPhrase.slice(0, text.length + 1));
            } else {
                setTimeout(() => setIsDeleting(true), pauseTime);
                return;
            }
        } else {
            if (text.length > 0) {
                setText(currentPhrase.slice(0, text.length - 1));
            } else {
                setIsDeleting(false);
                setPhraseIndex((prev) => (prev + 1) % phrases.length);
            }
        }
    }, [text, isDeleting, currentPhrase, phrases.length, pauseTime]);

    useEffect(() => {
        const speed = isDeleting ? deletingSpeed : typingSpeed;
        const timer = setTimeout(tick, speed);
        return () => clearTimeout(timer);
    }, [tick, isDeleting, typingSpeed, deletingSpeed]);

    return (
        <span className={`${styles.typewriter} ${className}`}>
            <span className={styles.prefix}>{prefix}</span>
            <span className={styles.text}>{text}</span>
            <span className={styles.cursor}>|</span>
        </span>
    );
};
