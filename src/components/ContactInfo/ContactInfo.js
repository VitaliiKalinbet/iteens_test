import React from 'react';
import styles from './ContactInfo.module.css';

const ContactInfo = () => (
  <div className={styles.container}>
    <h2 className={styles.title}>Обратная связь</h2>
    <p className={styles.description}>
      Предложения, вопросы и свои тесты направляйте на любой из указанных
      контактов:
    </p>
    <p className={styles.email}>
      <span className={styles.textEmailFirst}>[ E-mail </span>
      <span className={styles.textEmail}>goittests@gmail.com</span> ]
    </p>
    <p className={styles.project}>
      [ <span className={styles.textProject}>@GoITTests</span> ]
    </p>
  </div>
);

export default ContactInfo;
