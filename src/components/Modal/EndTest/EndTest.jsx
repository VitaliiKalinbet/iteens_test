import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import css from './EndTest.module.css';
import Button from '../../Shared/Button/Button';
import BoxShadow from '../../Shared/BoxShadow/BoxShadow';
import * as selectors from '../../../redux/testPage/testPageSelectors';
import { finishTest } from '../../../redux/testPage/testPageOperations';

function EndTest({ endTest, continueTest, handleFinishTest, userId }) {
  const testFinish = e => {
    handleFinishTest(userId);
    endTest(e);
  };
  return (
    <div className={css.container}>
      <BoxShadow boxShadow={6} className={css.modal}>
        <p className={css.text}>
          У Вас есть неотвеченные вопросы. Все равно хотите завершить тест?
        </p>
        <div className={css.controls}>
          <Button
            variant="outlined"
            handleClick={testFinish}
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
  handleFinishTest: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  userId: selectors.getUserId(state),
});
const mapDispatchToProps = {
  handleFinishTest: finishTest,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EndTest);
