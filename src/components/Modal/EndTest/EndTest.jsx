import React from 'react';
import PropTypes from 'prop-types';
import css from './EndTest.module.css';
import Button from '../../Shared/Button/Button';
import BoxShadow from '../../Shared/BoxShadow/BoxShadow';

function EndTest({ endTest, continueTest }) {
  return (
    <div className={css.container}>
      <BoxShadow boxShadow={6} className={css.modal}>
        <p className={css.text}>
          У Вас есть неотвеченные вопросы. Все равно хотите завершить тест?
        </p>
        <div className={css.controls}>
          <Button
            variant="outlined"
            handleClick={endTest}
            className={css.btn}
            data-redirect="/"
          >
            Да, выйти!
          </Button>
          <Button
            variant="simple"
            handleClick={continueTest}
            className={css.btn}
          >
            Продолжить тест.
          </Button>
        </div>
      </BoxShadow>
    </div>
  );
}
EndTest.propTypes = {
  endTest: PropTypes.func.isRequired,
  continueTest: PropTypes.func.isRequired,
};

export default EndTest;
