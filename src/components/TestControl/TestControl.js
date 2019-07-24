import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import css from './TestControl.module.css';
import Button from '../Shared/Button/Button';
import Toggable from '../../utils/Toggable';
import Modal from '../../utils/Modal';
import EndTest from '../Modal/EndTest/EndTest';

// finalResult - нужен для того чтобы изменять поведение кнопки, и ее надпись
// Посмотреть результат
// Закончить тест
const TestControl = ({ title, current, length, finalResult, history }) => {
  return (
    <Toggable>
      {({ isToggle, toggle }) => {
        const endTest = e => {
          history.push(e.target.dataset.redirect);
        };
        return (
          <div className={css.headerTest}>
            <p className={css.title}>[{title}]</p>

            {finalResult ? (
              <Button
                variant="outlined"
                handleClick={endTest}
                className={css.btn}
                data-redirect="/result"
              >
                Результат
              </Button>
            ) : (
              <Button
                variant="outlined"
                handleClick={toggle}
                className={css.btn}
              >
                Закончить тест
              </Button>
            )}
            <p className={css.orderQuestion}>
              Вопрос {current}/{length}
            </p>
            {isToggle && (
              <Modal>
                <EndTest endTest={endTest} continueTest={toggle} />
              </Modal>
            )}
          </div>
        );
      }}
    </Toggable>
  );
};
TestControl.propTypes = {
  title: PropTypes.string.isRequired,
  current: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  length: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  finalResult: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
};
export default withRouter(TestControl);
