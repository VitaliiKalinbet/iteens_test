/* eslint-disable */
import axios from 'axios';
import {
  fetchResultAnswerStart,
  fetchResultAnswerSuccess,
  fetchResultAnswerError,
  fetchNextQuestionSuccess,
  fetchSkipTheQuestionError,
  fetchSkipTheQuestionStart,
  fetchSkipTheQuestionSuccess,
  finishTestError,
  finishTestStart,
  finishTestSuccess,
} from './testPageActions';

axios.defaults.baseURL = 'https://test.goit.co.ua/api';
export const finishTest = userId => dispatch => {
  dispatch(finishTestStart());
  axios
    .post(`/tests/cancel/${userId}`)
    .then(() => {
      dispatch(finishTestSuccess());
    })
    .catch(error => {
      dispatch(finishTestError(error));
    });
};
export const fetchResultAnswer = (userID, userAnswer) => dispatch => {
  dispatch(fetchResultAnswerStart());

  axios
    .post(`/answer/${userID}`, userAnswer)
    .then(response => {
      const {
        userId,
        languageTitle,
        questionNumber,
        allQuestionsCount,
        nextQuestion,
      } = response.data;

      const newNextQuestion = {
        userId,
        languageTitle,
        questionNumber,
        allQuestionsCount,
        question: nextQuestion,
      };
      dispatch(fetchResultAnswerSuccess(response.data.result));
      dispatch(fetchNextQuestionSuccess(newNextQuestion));
    })
    .catch(error => dispatch(fetchResultAnswerError(error)));
};

export const fetchSkipTheQuestion = (userID, question) => dispatch => {
  dispatch(fetchSkipTheQuestionStart());

  axios
    .post(`/answer/skip/${userID}`, question)
    .then(response => {
      const { questionNumber, allQuestionsCount } = response.data;
      const question = response.data.question || response.data.nextQuestion;
      const newNextQuestion = {
        questionNumber,
        allQuestionsCount,
        question,
      };

      dispatch(fetchSkipTheQuestionSuccess(newNextQuestion));
    })
    .catch(error => dispatch(fetchSkipTheQuestionError(error)));
};
