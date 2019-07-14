import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextBlockItem.module.css';

const TextBlockItem = ({ itemName, info }) => (
  <div className={styles.textBlock_item}>
    <p>{itemName}</p>
    <span />
    <p className={styles.textBlock_itemNumber}>{info}</p>
  </div>
);
TextBlockItem.propTypes = {
  itemName: PropTypes.string.isRequired,
  info: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
export default TextBlockItem;
