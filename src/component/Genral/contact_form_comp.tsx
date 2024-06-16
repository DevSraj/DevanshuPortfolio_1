import React, { useState } from 'react';
import styles from './style/a_style.module.css';

const ContactMeTile: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here, such as sending data to an API
    setSubmitted(true);
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className={styles.contactMeTile}>
      <h2>Contact Me</h2>
      {submitted ? (
        <div className={styles.thankYouMessage}>
          Thank you for reaching out!  get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Send</button>
        </form>
      )}
    </div>
  );
};

export default ContactMeTile;
