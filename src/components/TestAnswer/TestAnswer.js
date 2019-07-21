import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './TestAnswer.module.css';
import happyCat from '../../assets/img/cat/happyCat.jpg';
import pensiveСat from '../../assets/img/cat/pensiveСat.jpg';

const cx = classNames.bind(styles);

const TestAnswer = ({
  questions,
  answered,
  isCorrectAnswered,
  correctAnswered,
  incorrectAnswered,
}) => (
  <>
    <div className={styles.container}>
      <div className={styles.wrapperImgInput}>
        <div className={styles.inputWrapper}>
          {questions.map(question => {
            const labelClassNames = cx({
              label: true,
              labelCorrect: question === correctAnswered,
              labelIncorrect: question === incorrectAnswered,
            });

            return (
              <label
                key={question}
                htmlFor={question}
                className={labelClassNames}
              >
                <input
                  id={question}
                  className={styles.input}
                  name="answer"
                  type="radio"
                />
                {question}
              </label>
            );
          })}
        </div>
        {answered &&
          (isCorrectAnswered ? (
            <img className={styles.img} alt="cat" src={happyCat} />
          ) : (
            <img className={styles.img} alt="cat" src={pensiveСat} />
          ))}
      </div>

      {!answered && (
        <div className={styles.tabletContainerButton}>
          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.buttonConfirm}>
              Ответить
            </button>
            <button type="submit" className={styles.buttonSkip}>
              Пропустить
            </button>
          </div>
        </div>
      )}
    </div>
    {!answered && (
      <div className={styles.mobileContainerButton}>
        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.buttonConfirm}>
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
  questions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  answered: PropTypes.bool,
  isCorrectAnswered: PropTypes.bool,
  correctAnswered: PropTypes.string,
  incorrectAnswered: PropTypes.string,
};

TestAnswer.defaultProps = {
  answered: true,
  isCorrectAnswered: true,
  correctAnswered: '',
  incorrectAnswered: '',
};

export default TestAnswer;
