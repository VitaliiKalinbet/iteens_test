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
} from './testPageActions';

axios.defaults.baseURL = 'https://test.goit.co.ua/api';

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
      console.log(response.data);
      const {
        questionNumber,
        allQuestionsCount,
        question,
        languageTitle,
      } = response.data;

      const newNextQuestion = {
        questionNumber,
        allQuestionsCount,
        languageTitle,
        question,
      };

      dispatch(fetchSkipTheQuestionSuccess(newNextQuestion));
    })
    .catch(error => dispatch(fetchSkipTheQuestionError(error)));
};
