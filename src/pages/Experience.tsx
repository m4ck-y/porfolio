import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './Experience.module.css';

interface JobExperience {
  title: string;
  company: string;
  date: string;
  description?: string;
  tasks: string[];
}

const experiences: JobExperience[] = [
  {
    title: 'Software Architect',
    company: 'Liber Salus S.A de C.V.',
    date: 'Present',
    tasks: [
      'Designed architecture and planning for future AI and data analysis integration.',
      'Prepared system for MongoDB NoSQL database integration for logging and movements.',
      'Planned vector database architecture for ChatGPT-style virtual assistant.',
      'Used Docker for microservices.',
      'Deployed microservices on Google Cloud Compute Engine.',
    ],
  },
  {
    title: 'Web Scraping',
    company: 'Liber Salus S.A de C.V.',
    date: 'Dec 2024',
    description: 'Implemented Norm 024 for standardized catalogs in hospital management system.',
    tasks: [
      'Designed and developed automated system with Selenium for periodic catalog downloads.',
      'Used Pandas to read catalogs in XLSX, XLS, and CSV formats.',
      'Loaded catalogs into PostgreSQL.',
    ],
  },
  {
    title: 'Backend Developer',
    company: 'Liber Salus S.A de C.V.',
    date: 'Aug 2024 - Dec 2024',
    description: 'Migration of Laravel monolithic web system to Python microservices.',
    tasks: [
      'Implemented FastAPI for REST services.',
      'Used SQLAlchemy v2 for persistence layer.',
      'Designed and developed microservices.',
      'Normalized tables for robust database.',
      'Implemented RBAC (Role-Based Access Control).',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Liber Salus S.A de C.V.',
    date: 'Apr 2024 - Aug 2024',
    description: 'Migration of Laravel screens to React for improved modularity.',
    tasks: [
      'Developed web platform with React and reusable components.',
      'Protected routes with react-router and user authentication.',
      'Consumed RESTful services with fetch.',
      'Used TailwindCSS and NextUI/HeroUI.',
    ],
  },
  {
    title: 'Software Architecture',
    company: 'Liber Salus S.A de C.V.',
    date: 'Apr 2024 - Jun 2024',
    tasks: [
      'Research and design of microservices architecture.',
      'Planned complete system infrastructure.',
    ],
  },
  {
    title: 'Backend Developer',
    company: 'Elevenminds Labs S de RL DE CV',
    date: 'Nov 2020 - Jul 2021',
    tasks: [
      'Created microservices for KidiAdmin using Golang and Postgres.',
      'Automated processes and services on Linux (Debian).',
      'Developed algorithm for generating unique usernames.',
      'Deployed on Microsoft Azure.',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Elevenminds Labs S de RL DE CV',
    date: 'May 2020 - Nov 2021',
    tasks: [
      'Developed KidiAdmin webApp with TypeScript and vanilla components.',
      'Developed SPA with IndexDB and WebWorkers.',
      'State management with d3.js.',
      'Object-Oriented Programming (OOP).',
    ],
  },
];

const education = [
  {
    title: 'Information Technology Engineering',
    school: 'UTHH',
    date: 'Sep 2018 - Aug 2020',
    details: ['Web programming with Laravel and Vue', 'Database transactions with MySQL and SQL Server', 'Information Security'],
  },
  {
    title: 'FullStack Bootcamp',
    school: 'Elevenminds Labs',
    date: 'Jan 2020 - Apr 2020',
    details: ['Chat CLI development in Python with WebSockets', 'Deployment on Google Cloud', 'Dynamic controls with d3.js'],
  },
  {
    title: 'Technical Degree in IT',
    school: 'UTHH',
    date: 'Sep 2016 - Aug 2018',
    details: ['Mobile development in Java with Android Studio', 'Desktop development in Java and C#', 'Design Patterns'],
  },
];

export const ExperiencePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');
  const containerRef = useScrollReveal<HTMLDivElement>();

  return (
    <div className={styles.section} ref={containerRef}>
      <h1 className={styles.sectionTitle}>:: EXPERIENCE & EDUCATION</h1>

      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === 'experience' ? styles.tabActive : ''}`}
          onClick={() => setActiveTab('experience')}
        >
          [ EXPERIENCE ]
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'education' ? styles.tabActive : ''}`}
          onClick={() => setActiveTab('education')}
        >
          [ EDUCATION ]
        </button>
      </div>

      {activeTab === 'experience' && (
        <div key="tab-exp" className={styles.timeline}>
          <div className={styles.timelineLine} />
          {experiences.map((exp, index) => (
            <div key={index} className={`${styles.timelineItem} reveal-up`}>
              <div className={styles.timelineDot}>
                <div className={styles.timelineDotInner} />
              </div>
              <div className={styles.experienceItem}>
                <div className={styles.experienceCornerTl} />
                <div className={styles.experienceCornerBr} />
                <div className={styles.experienceHeader}>
                  <div>
                    <h3 className={styles.experienceTitle}>{exp.title}</h3>
                    <p className={styles.experienceCompany}>{exp.company}</p>
                  </div>
                  <span className={styles.experienceDate}>
                    {exp.date === 'Present' && <span className={styles.presentDot} />}
                    {exp.date}
                  </span>
                </div>
                {exp.description && (
                  <p className={styles.experienceDescription}>{exp.description}</p>
                )}
                <ul className={styles.experienceTasks}>
                  {exp.tasks.map((task, i) => (
                    <li key={i} className={styles.experienceTask}>
                      <span className={styles.taskIcon}>{'>'}</span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'education' && (
        <div key="tab-edu" className={styles.educationGrid}>
          {education.map((edu, index) => (
            <div key={index} className={`${styles.educationCard} reveal-scale`}>
              <h3 className={styles.educationTitle}>{edu.title}</h3>
              <p className={styles.educationSchool}>{edu.school}</p>
              <span className={styles.experienceDate}>{edu.date}</span>
              <div className={styles.educationDetails}>
                {edu.details.map((detail, i) => (
                  <span key={i} className={styles.educationDetail}>
                    <span className={styles.taskIcon}>{'>'}</span>
                    {detail}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
