import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({
  type = 'button',
  children,
  className,
  variant,
  handleClick,
  ...rest
}) => {
  const style = css[variant];
  return (
    <button
      type={type}
      className={`${style} ${className}`}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </button>
  );
};
Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['contained', 'outlined', 'simple']),
  handleClick: PropTypes.func,
};
Button.defaultProps = {
  type: 'button',
  className: '',
  variant: 'simple',
  handleClick: () => null,
};
export default Button;
