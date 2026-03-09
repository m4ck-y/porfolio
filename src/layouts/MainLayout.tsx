import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FuiParticles, AIModal } from '@/components';
import styles from './MainLayout.module.css';
import '../styles/global.css';

const navItems = [
  { path: '/', label: '[ HOME ]' },
  { path: '/experience', label: '[ EXPERIENCE ]' },
  { path: '/contact', label: '[ CONTACT ]' },
  { path: '/components', label: '[ COMPONENTS ]' },
];

export const MainLayout: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.layout}>
      <div className="scanlines" />
      <div className="gridBg" />
      <FuiParticles />
      <AIModal />

      <nav className={styles.nav}>
        <a href="/" className={styles.logo}>
          <span className={styles.logoIcon}>{'>'}</span>
          M4CK-Y
        </a>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ''}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>

      <main className={styles.content}>
        <Outlet />
      </main>

      <div className="gradient-divider" />

      <footer className={styles.footer}>
        <div className={styles.footerLeft}>
          <span className={styles.footerStatus}>
            <span className={styles.statusDot} />
            SYSTEM ACTIVE
          </span>
          <span>© {new Date().getFullYear()} MACARIO ALVARADO HERNANDEZ</span>
        </div>
        <div className={styles.footerLinks}>
          <a href="https://github.com/m4ck-y" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
            GITHUB
          </a>
          <a href="https://linkedin.com/in/macario-alvarado-hernández-125b4b269" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
            LINKEDIN
          </a>
        </div>
      </footer>
    </div>
  );
};
