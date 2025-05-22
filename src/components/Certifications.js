import React from 'react';
import styles from './Certifications.module.css';

const certifications = [
  {
    title: "Salesforce Certified Administrator",
    issuer: "Salesforce",
    date: "Issued: Mar 2025",
    description: "Designed and developed a custom Event Booking System in Salesforce as a personal project to manage event reservations, demonstrating experience with CRM setup, custom objects, and process automation."
  }
];

function Certifications() {
  return (
    <section className={styles.certificationsSection} id="certifications">
      <h2>Certifications</h2>
      <ul className={styles.certificationsList}>
        {certifications.map((cert, idx) => (
          <li key={idx} className={styles.certificationCard}>
            <h3>{cert.title}</h3>
            <p>{cert.issuer}</p>
            <p>{cert.date}</p>
            {cert.description && <p>{cert.description}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Certifications;