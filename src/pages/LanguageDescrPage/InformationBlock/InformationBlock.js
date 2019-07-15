import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './InformationBlock.module.css';

const InformationBlock = ({ title, description }) => (
  <div className={styles.secondBlock}>
    <h2 className={styles.secondBlockTitle}>{title}</h2>
    <p className={styles.secondBlockDescription}>{description}</p>
    <button className={styles.btnStartTest} type="button">
      <NavLink to="/test" className={styles.btnStartTestLink}>
        Начать тест
      </NavLink>
    </button>
  </div>
);
InformationBlock.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default InformationBlock;
