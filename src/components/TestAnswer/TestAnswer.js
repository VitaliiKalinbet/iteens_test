/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './TestAnswer.module.css';
import happyCat from '../../assets/img/cat/happyCat.jpg';
import pensiveСat from '../../assets/img/cat/pensiveСat.jpg';

const cx = classNames.bind(styles);
let labelClassNames;

const TestAnswer = ({
  questions,
  resultAnswer,
  onClickAnswer,
  onChangeUserAnswer,
}) => (
  <>
    <div className={styles.container}>
      <div className={styles.wrapperImgInput}>
        <div className={styles.inputWrapper}>
          {questions.map((question, index) => {
            if (resultAnswer) {
              labelClassNames =
                resultAnswer.userAnswer === resultAnswer.rightAnswer
                  ? cx({
                      label: true,
                      labelCorrect: index + 1 === resultAnswer.rightAnswer,
                    })
                  : cx({
                      label: true,
                      labelIncorrect: index + 1 === resultAnswer.userAnswer,
                      labelCorrect: index + 1 === resultAnswer.rightAnswer,
                    });
            } else {
              labelClassNames = cx({
                label: true,
              });
            }
            return (
              <label
                key={question._id}
                htmlFor={question._id}
                className={labelClassNames}
              >
                <input
                  id={question._id}
                  className={styles.input}
                  name="answer"
                  type="radio"
                  value={question.answerText}
                  onChange={onChangeUserAnswer}
                  data-number={question.answerNumber}
                />
                {question.answerText}
              </label>
            );
          })}
        </div>
        {resultAnswer &&
          (resultAnswer.userAnswerCorrectly ? (
            <img className={styles.img} alt="cat" src={happyCat} />
          ) : (
            <img className={styles.img} alt="cat" src={pensiveСat} />
          ))}
      </div>

      {!resultAnswer && (
        <div className={styles.tabletContainerButton}>
          <div className={styles.buttonContainer}>
            <button
              onClick={onClickAnswer}
              type="submit"
              className={styles.buttonConfirm}
            >
              Ответить
            </button>
            <button type="submit" className={styles.buttonSkip}>
              Пропустить
            </button>
          </div>
        </div>
      )}
    </div>
    {!resultAnswer && (
      <div className={styles.mobileContainerButton}>
        <div className={styles.buttonContainer}>
          <button
            onClick={onClickAnswer}
            type="submit"
            className={styles.buttonConfirm}
          >
            Ответить
          </button>
          <button type="submit" className={styles.buttonSkip}>
            Пропустить
          </button>
        </div>
      </div>
    )}
  </>
);

TestAnswer.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  resultAnswer: PropTypes.oneOfType([
    PropTypes.shape({
      rightAnswer: PropTypes.number.isRequired,
      userAnswer: PropTypes.number.isRequired,
      userAnswerCorrectly: PropTypes.bool.isRequired,
    }),
    PropTypes.bool,
  ]).isRequired,

  onClickAnswer: PropTypes.func.isRequired,
  onChangeUserAnswer: PropTypes.func.isRequired,
};

TestAnswer.defaultProps = {};

export default TestAnswer;
