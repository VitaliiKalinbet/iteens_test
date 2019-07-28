import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Media from 'react-media';
import styles from './InformationBlock.module.css';

const InformationBlock = ({ title, description, onStart }) => (
  <div className={styles.secondBlock}>
    <Media query="(min-width: 768px)">
      {matches =>
        matches && (
          <Fragment>
            <h2 className={styles.secondBlockTitle}>{title}</h2>
            <p
              dangerouslySetInnerHTML={{ __html: description }}
              className={styles.secondBlockDescription}
            />
          </Fragment>
        )
      }
    </Media>
    <button className={styles.btnStartTest} type="button" onClick={onStart}>
      Начать тест
    </button>
  </div>
);
InformationBlock.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onStart: PropTypes.func.isRequired,
};
export default InformationBlock;
