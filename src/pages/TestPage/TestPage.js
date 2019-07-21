import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import TestAnswer from '../../components/TestAnswer/TestAnswer';
import TestExplanation from '../../components/TestExplanation/TestExplanation';
import Header from '../../components/Header/Header';
import TestQuestion from '../../components/TestQuestion/TestQuestion';
// import styles from './TestPage.module.css';

class TestPage extends Component {
  state = {
    userAnswerNumber: null,
  };

  componentDidMount() {
    const { fetchCurrentQuestion } = this.props;
    fetchCurrentQuestion();
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
    const { currentQuestion, resultAnswer } = this.props;
    //
    return (
      <>
        <Header />

        {!currentQuestion && (
          <Loader type="Puff" color="#00BFFF" height="100" width="100" />
        )}

        {currentQuestion && (
          <>
            <TestQuestion question="asfasf" />
            <TestAnswer
              questions={currentQuestion.question.answers}
              onChangeUserAnswer={this.onChangeUserAnswer}
              onClickAnswer={this.onClickAnswer}
              resultAnswer={resultAnswer}
            />
          </>
        )}
        {resultAnswer && (
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
  fetchCurrentQuestion: PropTypes.func.isRequired,
  onChangeAnswer: PropTypes.func.isRequired,
  fetchResultAnswer: PropTypes.func.isRequired,
  rewriteCurrentQuestion: PropTypes.func.isRequired,
  resetFields: PropTypes.func.isRequired,
  resultAnswer: PropTypes.func.isRequired,
  currentQuestion: PropTypes.shape({
    questionNumber: PropTypes.number,
    question: PropTypes.shape({
      questionId: PropTypes.string,
      answers: PropTypes.array,
    }),
    userId: PropTypes.string,
  }).isRequired,
};

export default TestPage;
