import React from 'react';
import styles from './Contact.module.css';

function Contact({ contactInfo }) {
  return (
    <section className={styles.contactSection} id="contact">
      <h2>Contact</h2>
      <div className={styles.contactDetails}>
        <p>Email: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
        <p>Phone: {contactInfo.phone}</p>
        <p>LinkedIn: <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">{contactInfo.linkedin}</a></p>
      </div>
    </section>
  );
}

export default Contact;
