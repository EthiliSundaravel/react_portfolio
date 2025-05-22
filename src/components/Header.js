import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.portfolioHeader}>
      <div className={styles.logo}>ES</div>
      <nav className={styles.navLinks}>
        <a href="#home" className={styles.navLink}>Home</a>
        <a href="#about" className={styles.navLink}>About</a>
        <a href="#experience" className={styles.navLink}>Experience</a>
        <a href="#certifications" className={styles.navLink}>Certifications</a>
        <a href="#education" className={styles.navLink}>Education</a>
        <a href="#skills" className={styles.navLink}>Skills</a>
        <a href="#contact" className={styles.navLink}>Contact</a>
      </nav>
      <div className={styles.headerActions}>
        <a
          href="/Ethili_Sundaravel.pdf"
          download
          className={styles.resumeButton}
        >
          Download Resume
        </a>
      </div>
    </header>
  );
}

export default Header;
