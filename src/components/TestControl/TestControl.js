import React from 'react';
// import css from './TestControl.module.css';
import PropTypes from 'prop-types';
import Button from '../Shared/Button/Button';

const TestControl = ({ language, current, length, endTest }) => {
  return (
    <div>
      <p>[{language}]</p>
      <p>
        Вопрос {current}/{length}
      </p>
      <Button handleClick={endTest}>Закончить тест</Button>
    </div>
  );
};
TestControl.propTypes = {
  language: PropTypes.string.isRequired,
  current: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  length: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  endTest: PropTypes.func.isRequired,
};
export default TestControl;
