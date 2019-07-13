import React from 'react';
import PropTypes from 'prop-types';
import css from './TestControl.module.css';
import Button from '../Shared/Button/Button';

const TestControl = ({ title, current, length, endTest }) => {
  return (
    <div className={css.headerTest}>
      <p className={css.title}>[{title}]</p>
      <p className={css.orderQuestion}>
        Вопрос {current}/{length}
      </p>
      <Button handleClick={endTest}>Закончить тест</Button>
    </div>
  );
};
TestControl.propTypes = {
  title: PropTypes.string.isRequired,
  current: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  length: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  endTest: PropTypes.func.isRequired,
};
export default TestControl;
