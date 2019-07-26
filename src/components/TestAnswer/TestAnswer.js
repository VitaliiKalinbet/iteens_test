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
  onClickSkipQuestion,
}) => (
  <>
    <div className={styles.container}>
      <div className={styles.wrapperImgInput}>
        <div className={styles.inputWrapper}>
          {questions.map((question, index) => {
            if (resultAnswer) {
              const currentIndex = index + 1;
              labelClassNames = resultAnswer.userAnswerCorrectly
                ? cx({
                    label: true,
                    labelCorrect: currentIndex === resultAnswer.rightAnswer,
                  })
                : cx({
                    label: true,
                    labelCorrect: currentIndex === resultAnswer.rightAnswer,
                    labelIncorrect: currentIndex === resultAnswer.userAnswer,
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
                  data-number={question.answerNumber}
                  onChange={onChangeUserAnswer}
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
            <button
              onClick={onClickSkipQuestion}
              type="submit"
              className={styles.buttonSkip}
            >
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
          <button
            onClick={onClickSkipQuestion}
            type="submit"
            className={styles.buttonSkip}
          >
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
      rightAnswer: PropTypes.number,
      userAnswer: PropTypes.number,
      userAnswerCorrectly: PropTypes.bool,
      questionExplanation: PropTypes.string,
    }),
    PropTypes.bool,
  ]).isRequired,
  onClickAnswer: PropTypes.func.isRequired,
  onChangeUserAnswer: PropTypes.func.isRequired,
  onClickSkipQuestion: PropTypes.func.isRequired,
};

TestAnswer.defaultProps = {};

export default TestAnswer;
