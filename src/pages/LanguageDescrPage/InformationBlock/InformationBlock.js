import React from 'react';
import PropTypes from 'prop-types';
import styles from './InformationBlock.module.css';

const InformationBlock = ({ title, description }) => (
  <div className={styles.secondBlock}>
    <h2 className={styles.secondBlockTitle}>{title}</h2>
    <p className={styles.secondBlockDescription}>{description}</p>
    <button className={styles.btnStartTest} type="button">
      Начать тест
    </button>
  </div>
);
InformationBlock.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default InformationBlock;
