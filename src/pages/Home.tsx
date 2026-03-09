import React, { useState, useEffect } from 'react';
import { AIModal } from '../components';
import styles from './Home.module.css';

const skills = [
  'Logical-mathematical reasoning',
  'Abstraction capability',
  'Teamwork',
  'Creativity',
  'Data structures',
  'Algorithmic complexity',
  'Clean code',
  'SOLID principles',
];

const contactItems = [
  { icon: '+', label: 'PHONE', value: '+52 7712397470', href: 'tel:+527712397470' },
  { icon: '@', label: 'EMAIL', value: 'macario.alvaradohdez@gmail.com', href: 'mailto:macario.alvaradohdez@gmail.com' },
  { icon: '</>', label: 'GITHUB', value: 'github.com/m4ck-y', href: 'https://github.com/m4ck-y' },
  { icon: 'in', label: 'LINKEDIN', value: 'macario-alvarado-hernandez', href: 'https://linkedin.com/in/macario-alvarado-hernandez-125b4b269' },
];

export const HomePage: React.FC = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(`${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <AIModal />
      
      <div className={styles.hero}>
        <div className={`${styles.cornerBracket} ${styles.cornerBracketTl}`} />
        <div className={`${styles.cornerBracket} ${styles.cornerBracketTr}`} />
        <div className={`${styles.cornerBracket} ${styles.cornerBracketBl}`} />
        <div className={`${styles.cornerBracket} ${styles.cornerBracketBr}`} />

        <div className={`${styles.dataBlock} ${styles.dataBlockLeft}`}>
          <div className={styles.dataLine}>SYS.VERSION <span style={{ color: '#00ffff' }}>2.4.7</span></div>
          <div className={styles.dataLine}>SECURITY <span style={{ color: '#00ff00' }}>LEVEL_5</span></div>
          <div className={styles.timestamp}>NET.ID: 8847-AA</div>
        </div>

        <div className={`${styles.dataBlock} ${styles.dataBlockRight}`}>
          <div className={styles.dataLine}>TIMESTAMP <span>{time}</span></div>
          <div className={styles.dataLine}>CONN.STATUS <span style={{ color: '#00ff00' }}>ACTIVE</span></div>
          <div className={styles.timestamp}>47.3821N 8.5417E</div>
        </div>

        <div className={styles.crosshair}>
          <div className={styles.crosshairRing} />
          <div className={styles.crosshairLineH} />
          <div className={styles.crosshairLineV} />
          <div className={styles.crosshairDot} />
        </div>

        <div className={styles.arcContainer}>
          <div className={styles.arcBar} />
          <div className={styles.arcBar} />
          <div className={styles.arcBar} />
          <div className={styles.arcBar} />
          <div className={styles.arcBar} />
          <div className={styles.arcBar} />
          <div className={styles.arcBar} />
          <div className={styles.arcBar} />
        </div>

        <h1 className={styles.heroTitle}>Macario Alvarado</h1>
        <p className={styles.heroSubtitle}>// SOFTWARE ENGINEER</p>
        
        <div className={styles.heroLocation}>
          <span>{'>'}</span>
          <span>CDMX, MEXICO</span>
          <span>{'<'}</span>
        </div>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statValue}>26</div>
            <div className={styles.statLabel}>YEARS</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>5+</div>
            <div className={styles.statLabel}>YRS EXP</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>6+</div>
            <div className={styles.statLabel}>PROJECTS</div>
          </div>
        </div>

        <div className={styles.contactGrid}>
          {contactItems.map((item, index) => (
            <a 
              key={index} 
              href={item.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.contactCard}
              style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
            >
              <div className={styles.contactIcon}>{item.icon}</div>
              <div className={styles.contactInfo}>
                <div className={styles.contactLabel}>{item.label}</div>
                <div className={styles.contactValue}>{item.value}</div>
              </div>
            </a>
          ))}
        </div>

        <div className={styles.loadingBar} />
        <div className={styles.loadingText}>INITIALIZING...</div>
      </div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>:: PROFESSIONAL PROFILE</h2>
        <p className={styles.profileText}>
          I consider myself a responsible, creative person with ease of adaptation and ability to work in a team, 
          with initiative to solve problems. I would love to be part of a company where I can apply my knowledge 
          and, at the same time, allow me to develop professionally. I like to try new technologies and push them 
          to their limits.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>:: SKILLS</h2>
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className={styles.skillItem}
              style={{ '--index': index } as React.CSSProperties}
            >
              <span className={styles.skillIcon}>{'>'}</span>
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
