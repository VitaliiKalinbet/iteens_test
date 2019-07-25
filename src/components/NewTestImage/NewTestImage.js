import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewTestImage.module.css';

const NewTestImage = ({ desktopImage, mobileImage }) => (
  <picture>
    <source media="(min-width: 768px)" srcSet={desktopImage} />
    <source media="(min-width: 1280px)" srcSet={desktopImage} />
    <img className={styles.image} src={mobileImage} alt="mobileImage" />
  </picture>
);
NewTestImage.propTypes = {
  desktopImage: PropTypes.string.isRequired,
  mobileImage: PropTypes.string.isRequired,
};
export default NewTestImage;
