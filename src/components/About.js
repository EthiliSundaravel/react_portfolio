import React from 'react';
import styles from './About.module.css';

const About = ({ profileImage }) => (
  <section id="about" className={styles.aboutSection}>
    <div className={styles.aboutImg}>
      <img src={profileImage} alt="About Me" />
    </div>
    <div className={styles.aboutContent}>
      <h2>About Me</h2>
      <p>
        A technically skilled Software Developer with nearly 2 years of experience in building scalable, cloud-based IT solutions using Java. My goal is to continuously learn and grow in my field, while delivering high-quality code that meets business requirements and exceeds user expectations.
      </p>
    </div>
  </section>
);

export default About;
