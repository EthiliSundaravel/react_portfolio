import React from 'react';
import styles from './Skills.module.css';

const skills = [
  "Salesforce", "SQL", "Java", "C#", "Struts", "HTML", "CSS", "Python", 
  "jQuery", "JavaScript", "Git", "C"
];

function Skills() {
  return (
    <section className={styles.skillsSection} id="skills">
      <h2>Skills</h2>
      <ul className={styles.skillsList}>
        {skills.map((skill, idx) => (
          <li key={idx} className={styles.skillItem}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;