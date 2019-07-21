import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as allTestContainerSelectors from '../../redux/allTestContainer/allTestContainerSelectors';
import TestQuestion from '../TestQuestion/TestQuestion';
import TestImage from '../TestImage/TestImage';
import TestAnswer from '../TestAnswer/TestAnswer';
import TestExplanation from '../TestExplanation/TestExplanation';
import styles from './AllTestContainer.module.css';

const AllTestContainer = ({ questions, languageTitle, explanation }) =>
  questions.map(item => (
    <div className={styles.item} key={item.questionId}>
      <TestQuestion question={item.question} />
      <TestImage language={languageTitle} codeString={item.code} />
      <TestAnswer
        questions={questions}
        // answered
        isCorrectAnswered={item.userAnswerCorrectly}
        correctAnswered={item.rightAnswer}
        incorrectAnswered="for, while"
      />
      <TestExplanation description={explanation} />
    </div>
  ));
AllTestContainer.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
  languageTitle: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  explanation: PropTypes.string.isRequired,
};
const mapStateToProps = state => ({
  questions: allTestContainerSelectors.getQuestions(state),
  languageTitle: allTestContainerSelectors.getLanguageTitle(state),
  // explanation: //откуда получать описание ответа???
});
export default connect(
  mapStateToProps,
  null,
)(AllTestContainer);
