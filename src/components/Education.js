import React from 'react';
import styles from './Education.module.css';

function Education() {
  return (
    <section className={styles.educationSection} id="education">
      <h2>Education</h2>
      <div className={styles.educationEntry}>
        <h3>Computer Software and Database Development- Loyalist College</h3>
        <p className={styles.eduPeriod}>04/2023– Present</p>
      </div>
      <div className={styles.educationEntry}>
        <h3>Bachelors in Computer Science and Engineering - Anna University</h3>
        <p className={styles.eduPeriod}>08/2018 – 05/2022</p>
      </div>
    </section>
  );
}

export default Education;