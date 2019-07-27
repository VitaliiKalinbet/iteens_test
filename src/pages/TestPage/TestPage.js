/* eslint no-shadow: 0 */
import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import TestAnswer from '../../components/TestAnswer/TestAnswer';
import TestExplanation from '../../components/TestExplanation/TestExplanation';
import Header from '../../components/Header/Header';
import TestQuestion from '../../components/TestQuestion/TestQuestion';
import TestControl from '../../components/TestControl/TestControl';
import NewTestImage from '../../components/NewTestImage/NewTestImage';
import styles from './TestPage.module.css';
import TestImage from '../../components/TestImage/TestImage';

class TestPage extends Component {
  state = {
    userAnswerNumber: null,
    userId: null,
    languageTitle: '',
  };

  componentDidMount() {
    const { currentQuestion } = this.props;
    if (currentQuestion) {
      const { userId, languageTitle } = currentQuestion;
      this.setState({ userId, languageTitle });
    }
  }

  componentDidUpdate() {
    const { userId, languageTitle } = this.state;
    if (!userId || !languageTitle) {
      const { currentQuestion } = this.props;
      const { userId, languageTitle } = currentQuestion;
      this.setState({ userId, languageTitle });
    }
  }

  onChangeUserAnswer = e => {
    this.setState({ userAnswerNumber: Number(e.target.dataset.number) });

    const userAnswerNumber = Number(e.target.dataset.number);
    const { questionNumber, question } = this.props.currentQuestion;
    const { questionId } = question;
    const questionAnswer = { questionNumber, questionId, userAnswerNumber };
    this.props.onChangeAnswer(questionAnswer);
  };

  onClickAnswer = () => {
    const { questionNumber, question } = this.props.currentQuestion;
    const { questionId } = question;

    const { userAnswerNumber, userId } = this.state;

    if (userAnswerNumber) {
      const userAnswer = {
        questionNumber,
        questionId,
        userAnswerNumber,
      };
      this.props.fetchResultAnswer(userId, userAnswer);
      this.setState({ userAnswerNumber: null });
    }
  };

  onClickNextQuestion = () => {
    this.props.rewriteCurrentQuestion();
    this.props.resetFields();
  };

  onClickSkipQuestion = () => {
    const { questionNumber, question } = this.props.currentQuestion;
    const { questionId } = question;
    const { userId } = this.state;
    const questionSkip = { questionNumber, questionId };
    this.props.fetchSkipTheQuestion(userId, questionSkip);
    this.props.resetUserAnswer();
  };

  render() {
    const { currentQuestion, resultAnswered } = this.props;
    const { languageTitle } = this.state;
    let desktopImage;
    let mobileImage;
    if (currentQuestion && currentQuestion.question.image) {
      desktopImage = `https://test.goit.co.ua/images/${currentQuestion.question.image}`;
      mobileImage = `https://test.goit.co.ua/images/${currentQuestion.question.imageMobile}`;
    }
    return (
      <>
        <Header />
        {!currentQuestion && (
          <div className={styles.loader}>
            <Loader type="Puff" color="#00BFFF" height="100" width="100" />
          </div>
        )}
        {currentQuestion && (
          <>
            <div className={styles.container}>
              <TestControl
                title={languageTitle}
                current={currentQuestion.questionNumber}
                finalResult={false}
                length={currentQuestion.allQuestionsCount}
              />
              <TestQuestion question={currentQuestion.question.questionText} />
              <TestImage
                language="java"
                codeString="class Program {static void Main(string[] args){var a=null;a=10;Console.WriteLine(a);Console.ReadLine();}}"
              />
              {/* {currentQuestion.question.image && (
                <NewTestImage
                  desktopImage={desktopImage}
                  mobileImage={mobileImage}
                />
              )} */}
              <TestAnswer
                questions={currentQuestion.question.answers}
                onChangeUserAnswer={this.onChangeUserAnswer}
                onClickAnswer={this.onClickAnswer}
                onClickSkipQuestion={this.onClickSkipQuestion}
                resultAnswer={resultAnswered}
              />
            </div>
          </>
        )}

        {resultAnswered && (
          <TestExplanation
            onClickNextQuestion={this.onClickNextQuestion}
            description={resultAnswered.explanation}
          />
        )}
      </>
    );
  }
}

TestPage.propTypes = {
  fetchResultAnswer: PropTypes.func.isRequired,
  fetchSkipTheQuestion: PropTypes.func.isRequired,
  onChangeAnswer: PropTypes.func.isRequired,
  resetUserAnswer: PropTypes.func.isRequired,
  rewriteCurrentQuestion: PropTypes.func.isRequired,
  resetFields: PropTypes.func.isRequired,
  resultAnswered: PropTypes.oneOfType([
    PropTypes.shape({
      rightAnswer: PropTypes.number,
      userAnswer: PropTypes.number,
      userAnswerCorrectly: PropTypes.bool,
      explanation: PropTypes.string,
    }),
    PropTypes.bool,
  ]).isRequired,
  currentQuestion: PropTypes.shape({
    questionNumber: PropTypes.number,
    languageTitle: PropTypes.string,
    allQuestionsCount: PropTypes.number,
    question: PropTypes.shape({
      questionId: PropTypes.string,
      answers: PropTypes.array,
      questionText: PropTypes.string,
      image: PropTypes.string,
      imageMobile: PropTypes.string,
    }),
    userId: PropTypes.string,
  }),
  userId: PropTypes.string.isRequired,
};

TestPage.defaultProps = {
  currentQuestion: null,
};

export default TestPage;
