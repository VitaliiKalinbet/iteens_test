import React from 'react';
import PropTypes from 'prop-types';
import css from './BoxShadow.module.css';

const BoxShadow = ({ children, className, boxShadow }) => {
  const shadowName = `shadowDepth${boxShadow}`;
  return <div className={`${className} ${css[shadowName]}`}>{children}</div>;
};
BoxShadow.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]).isRequired,
  boxShadow: PropTypes.number,
  className: PropTypes.string,
};
BoxShadow.defaultProps = {
  boxShadow: 1,
  className: '',
};

export default BoxShadow;
