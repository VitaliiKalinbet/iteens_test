import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as allTestContainerSelectors from '../../redux/allTestContainer/allTestContainerSelectors';
import TestQuestion from '../TestQuestion/TestQuestion';
import TestAnswer from '../TestAnswer/TestAnswer';
import TestExplanation from '../TestExplanation/TestExplanation';
import styles from './AllTestContainer.module.css';
import NewTestImage from '../NewTestImage/NewTestImage';

const AllTestContainer = ({ questions }) =>
  questions.map((item, i) => (
    <div className={styles.item} key={item.questionId}>
      <TestQuestion question={item.questionText} />
      {item.image && (
        <NewTestImage
          desktopImage={`https://test.goit.co.ua/images/${item.image}`}
          mobileImage={`https://test.goit.co.ua/images/${item.imageMobile}`}
        />
      )}
      <TestAnswer
        questions={item.answers}
        resultAnswer={{
          answerCorrectly: item.userAnswerCorrectly,
          rightAnswer: item.rightAnswer,
          userAnswer: item.userAnswer,
        }}
      />
      <TestExplanation
        description={item.explanation || ''}
        onClickNextQuestion={null}
      />
      {!(questions.length - 1 === i) && <span className={styles.span} />}
    </div>
  ));
AllTestContainer.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
  languageTitle: PropTypes.string.isRequired,
  code: PropTypes.string,
  explanation: PropTypes.string,
};
AllTestContainer.defaultProps = {
  code: '',
  explanation: '',
};
const mapStateToProps = state => ({
  questions: allTestContainerSelectors.getQuestions(state),
  languageTitle: allTestContainerSelectors.getLanguageTitle(state),
});
export default connect(
  mapStateToProps,
  null,
)(AllTestContainer);
