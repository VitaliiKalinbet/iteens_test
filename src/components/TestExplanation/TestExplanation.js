import React from 'react';
import PropTypes from 'prop-types';
import styles from './TestExplanation.module.css';

const TestExplanation = ({ description }) => (
  <div className={styles.container}>
    <div className={styles.innerContainer}>
      <p className={styles.title}>Пояснения:</p>
      <p className={styles.text}>{description}</p>
      <button className={styles.button} type="submit">
        Ок, дальше
      </button>
    </div>
  </div>
);

TestExplanation.propTypes = {
  description: PropTypes.string.isRequired,
};

export default TestExplanation;
