import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import TestAnswer from '../../components/TestAnswer/TestAnswer';
import TestExplanation from '../../components/TestExplanation/TestExplanation';
import Header from '../../components/Header/Header';
import TestQuestion from '../../components/TestQuestion/TestQuestion';
import TestControl from '../../components/TestControl/TestControl';
import styles from './TestPage.module.css';

class TestPage extends Component {
  state = {
    userAnswerNumber: null,
  };

  onChangeUserAnswer = e => {
    this.setState({ userAnswerNumber: Number(e.target.dataset.number) });

    const userAnswerNumber = Number(e.target.dataset.number);
    const { questionNumber, question } = this.props.currentQuestion;
    const { questionId } = question;
    const questionAnswer = { questionNumber, questionId, userAnswerNumber };
    this.props.onChangeAnswer(questionAnswer);
  };

  onClickAnswer = () => {
    const { questionNumber, question, userId } = this.props.currentQuestion;
    const { questionId } = question;

    const { userAnswerNumber } = this.state;

    if (userAnswerNumber) {
      const userAnswer = {
        questionNumber,
        questionId,
        userAnswerNumber,
      };
      this.props.fetchResultAnswer(userId, userAnswer);
    }
  };

  onClickNextQuestion = () => {
    this.props.rewriteCurrentQuestion();
    this.props.resetFields();
  };

  render() {
    const { currentQuestion, resultAnswered } = this.props;

    //
    return (
      <>
        <Header />
        {!currentQuestion && (
          <Loader type="Puff" color="#00BFFF" height="100" width="100" />
        )}
        {currentQuestion && (
          <>
            <div className={styles.container}>
              <TestControl
                title={currentQuestion.languageTitle}
                current={currentQuestion.questionNumber}
                length={currentQuestion.allQuestionsCount}
              />
              <TestQuestion question={currentQuestion.question.questionText} />
              <TestAnswer
                questions={currentQuestion.question.answers}
                onChangeUserAnswer={this.onChangeUserAnswer}
                onClickAnswer={this.onClickAnswer}
                resultAnswer={resultAnswered}
              />
            </div>
          </>
        )}

        {resultAnswered && (
          <TestExplanation
            onClickNextQuestion={this.onClickNextQuestion}
            description="Циклы являются управляющими конструкциями, позволяя в зависимости от определенных условий выполнять некоторое действие множество раз. В C# имеются следующие виды циклов::"
          />
        )}
      </>
    );
  }
}

TestPage.propTypes = {
  fetchResultAnswer: PropTypes.func.isRequired,
  onChangeAnswer: PropTypes.func.isRequired,
  rewriteCurrentQuestion: PropTypes.func.isRequired,
  resetFields: PropTypes.func.isRequired,
  resultAnswered: PropTypes.oneOfType([
    PropTypes.shape({
      rightAnswer: PropTypes.number,
      userAnswer: PropTypes.number,
      userAnswerCorrectly: PropTypes.bool,
      questionExplanation: PropTypes.string,
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
    }),
    userId: PropTypes.string,
  }).isRequired,
};

export default TestPage;
