import React from 'react';
import PropTypes from 'prop-types';
import TestQuestion from '../TestQuestion/TestQuestion';
import TestImage from '../TestImage/TestImage';
import TestAnswer from '../TestAnswer/TestAnswer';
import TestExplanation from '../TestExplanation/TestExplanation';
import styles from './AllTestContainer.module.css';


// info = [
//   {
//     question: ' ',
//     language: ' ',
//     codeString: '',
//     questions: [],
//     isCorrectAnswered: true,
//     correctAnswered: '',
//     incorrectAnswered: '',
//     description: '',
//   },
// ];
const AllTestContainer = ({ info }) =>
  info.map(item => (
    <div className={styles.item} key={Number.rand()}>
      <TestQuestion question={item.question} />
      <TestImage language={item.language} codeString={item.codeString} />
      <TestAnswer
        questions={item.questions}
        // answered
        isCorrectAnswered={item.isCorrectAnswered}
        correctAnswered="for, while, do while,foreach"
        incorrectAnswered="for, while"
      />
      <TestExplanation description="Циклы являются управляющими конструкциями, позволяя в зависимости от определенных условий выполнять некоторое действие множество раз. В C# имеются следующие виды циклов::" />
    </div>
  ));
AllTestContainer.propTypes = {
  info: PropTypes.arrayOf(
      PropTypes.shape(
        question: PropTypes.string.isRequired,
        language: PropTypes.string.isRequired,
        codeString: PropTypes.string.isRequired,
        questions: PropTypes.array.isRequired,
        isCorrectAnswered: PropTypes.bool,
        correctAnswered: PropTypes.string,
        incorrectAnswered: PropTypes.string,
        description: PropTypes.string.isRequired,
      ).isRequired,
  ).isRequired,
};
export default AllTestContainer;
