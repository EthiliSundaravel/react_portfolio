import React from 'react';
import styles from './HomeSection.module.css';

function HomeSection({ profilePicUrl }) {
  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.heroText}>
        <h1>
          Hello, I'm <span className={styles.highlight}>Ethili Sundaravel</span>
          <br />
          Welcome to my World.
        </h1>
        <p className={styles.heroSubtitle}>Software Developer</p>
      </div>
      <div className={styles.heroImage}>
        <img src={profilePicUrl} alt="Profile" />
      </div>
    </section>
  );
}

export default HomeSection;