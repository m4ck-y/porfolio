import React from 'react';
import styles from './FuiParticles.module.css';

const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 10,
    opacity: Math.random() * 0.5 + 0.1,
    drift: Math.random() * 40 - 20,
}));

export const FuiParticles: React.FC = () => {
    return (
        <div className={styles.particleField}>
            {particles.map((p) => (
                <div
                    key={p.id}
                    className={styles.particle}
                    style={{
                        '--size': `${p.size}px`,
                        '--x': `${p.x}%`,
                        '--y': `${p.y}%`,
                        '--duration': `${p.duration}s`,
                        '--delay': `${p.delay}s`,
                        '--opacity': p.opacity,
                        '--drift': `${p.drift}px`,
                    } as React.CSSProperties}
                />
            ))}
            {/* Larger glowing orbs */}
            <div className={styles.orb} style={{ '--ox': '20%', '--oy': '30%', '--od': '25s' } as React.CSSProperties} />
            <div className={styles.orb} style={{ '--ox': '70%', '--oy': '60%', '--od': '30s' } as React.CSSProperties} />
            <div className={styles.orb} style={{ '--ox': '85%', '--oy': '15%', '--od': '20s' } as React.CSSProperties} />
        </div>
    );
};
