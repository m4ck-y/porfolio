import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './MainLayout.module.css';
import '../styles/global.css';

const navItems = [
  { path: '/', label: '[ HOME ]' },
  { path: '/experience', label: '[ EXPERIENCE ]' },
  { path: '/contact', label: '[ CONTACT ]' },
  { path: '/components', label: '[ COMPONENTS ]' },
];

export const MainLayout: React.FC = () => {
  return (
    <div className={styles.layout}>
      <div className="scanlines" />
      <div className="gridBg" />
      
      <nav className={styles.nav}>
        <a href="/" className={styles.logo}>
          <span className={styles.logoIcon}>{'>'}</span>
          M4CK-Y
        </a>
        
        <div className={styles.navLinks}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>

      <main className={styles.content}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <span>© 2025 MACARIO ALVARADO HERNANDEZ // SOFTWARE ENGINEER</span>
        <div className={styles.footerLinks}>
          <a href="https://github.com/m4ck-y" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
            GITHUB
          </a>
          <a href="https://linkedin.com/in/macario-alvarado-hernandez-125b4b269" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
            LINKEDIN
          </a>
        </div>
      </footer>
    </div>
  );
};
