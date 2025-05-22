import React from 'react';
import styles from './Experience.module.css';

const experiences = [
  {
    title: "Software Developer",
    company: "Zoho Corporation",
    period: "May 2022 – Dec 2023",
    details: [
      "Developed Integrator Service platform & APIs for third-party integrations (Outlook, Zoom, Zoho Assist).",
      "Built a security tool for XML file processing & PII masking.",
      "Implemented SAML Login Service for secure authentication.",
      "Developed secure email setup with IMAP, POP3, SMTP, OAuth."
    ]
  },
  {
    title: "Software Developer Intern",
    company: "Zoho Corporation",
    period: "Jan 2022 – May 2022",
    details: [
      "Worked on ManageEngine MSP platform with Java solutions.",
      "Developed Two-Factor Authentication (2FA) system.",
      "Collaborated with QA and UX teams to enhance features.",
      "Resolved customer support tickets with effective fixes."
    ]
  }
];

function Experience() {
  return (
    <section className={styles.experienceSection} id="experience">
      <h2>Experience</h2>
      {experiences.map((exp, idx) => (
        <div key={idx} className={styles.experienceCard}>
          <h3>{exp.title} - {exp.company}</h3>
          <p className={styles.expPeriod}>{exp.period}</p>
          <ul>
            {exp.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Experience;