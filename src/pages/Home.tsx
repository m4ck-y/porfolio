import React, { useState, useEffect } from 'react';
import { FuiGlitch, FuiTypewriter } from '../components';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './Home.module.css';

const skills = [
  { name: 'Python / FastAPI', level: 90 },
  { name: 'TypeScript / React', level: 88 },
  { name: 'System Architecture', level: 85 },
  { name: 'SQL / PostgreSQL', level: 82 },
  { name: 'Docker / DevOps', level: 78 },
  { name: 'Go / Golang', level: 70 },
  { name: 'Cloud (GCP / Azure)', level: 75 },
  { name: 'Data Analysis', level: 72 },
];

const techStack = [
  { category: 'LANGUAGES', items: ['Python', 'TypeScript', 'JavaScript', 'Go', 'C#'] },
  { category: 'FRONTEND', items: ['React', 'TailwindCSS', 'NextUI', 'd3.js'] },
  { category: 'BACKEND', items: ['FastAPI', 'SQLAlchemy', 'Node.js', 'Laravel'] },
  { category: 'DEVOPS', items: ['Docker', 'Linux', 'Google Cloud', 'Azure'] },
  { category: 'DATA', items: ['PostgreSQL', 'MongoDB', 'Pandas', 'Selenium'] },
];

const contactItems = [
  { icon: '+', label: 'PHONE', value: '+52 7712397470', href: 'tel:+527712397470' },
  { icon: '@', label: 'EMAIL', value: 'macario.alvaradohdez@gmail.com', href: 'mailto:macario.alvaradohdez@gmail.com' },
  { icon: '</>', label: 'GITHUB', value: 'github.com/m4ck-y', href: 'https://github.com/m4ck-y' },
  { icon: 'in', label: 'LINKEDIN', value: 'macario-alvarado-hernández', href: 'https://linkedin.com/in/macario-alvarado-hernández-125b4b269' },
];

const roles = [
  'SOFTWARE ENGINEER',
  'BACKEND DEVELOPER',
  'SYSTEM ARCHITECT',
  'FULL STACK DEV',
];

export const HomePage: React.FC = () => {
  const [time, setTime] = useState('');
  const sectionsRef = useScrollReveal<HTMLDivElement>();

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
    <div ref={sectionsRef}>
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

        {/* Hex ring decoration */}
        <div className={styles.hexRing}>
          <svg viewBox="0 0 200 200" className={styles.hexSvg}>
            <polygon points="100,10 180,55 180,145 100,190 20,145 20,55" fill="none" stroke="#00ffff12" strokeWidth="1" />
            <polygon points="100,30 160,65 160,135 100,170 40,135 40,65" fill="none" stroke="#00ffff08" strokeWidth="1" />
          </svg>
        </div>

        <FuiGlitch text="Macario Alvarado" className={styles.heroTitle} />
        <div className={styles.heroSubtitle}>
          <FuiTypewriter phrases={roles} typingSpeed={70} deletingSpeed={35} pauseTime={2500} />
        </div>

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
        <h2 className={`${styles.sectionTitle} reveal-left`}>:: PROFESSIONAL PROFILE</h2>
        <p className={`${styles.profileText} reveal-up`}>
          I consider myself a responsible, creative person with ease of adaptation and ability to work in a team,
          with initiative to solve problems. I would love to be part of a company where I can apply my knowledge
          and, at the same time, allow me to develop professionally. I like to try new technologies and push them
          to their limits.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={`${styles.sectionTitle} reveal-left`}>:: SKILLS</h2>
        <div className={styles.skillsContainer}>
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`${styles.skillBar} reveal-right`}
              style={{ '--index': index, '--level': `${skill.level}%` } as React.CSSProperties}
            >
              <div className={styles.skillHeader}>
                <span className={styles.skillName}>
                  <span className={styles.skillIcon}>{'>'}</span>
                  {skill.name}
                </span>
                <span className={styles.skillPercent}>{skill.level}%</span>
              </div>
              <div className={styles.skillTrack}>
                <div className={styles.skillFill} />
                <div className={styles.skillGlow} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={`${styles.sectionTitle} reveal-left`}>:: TECH STACK</h2>
        <div className={styles.techGrid}>
          {techStack.map((group, gIndex) => (
            <div key={gIndex} className={`${styles.techCategory} reveal-up`}>
              <div className={styles.techCategoryHeader}>
                <span className={styles.techCategoryDot} />
                {group.category}
              </div>
              <div className={styles.techItems}>
                {group.items.map((item, iIndex) => (
                  <span
                    key={iIndex}
                    className={styles.techBadge}
                    style={{ '--bi': iIndex } as React.CSSProperties}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
