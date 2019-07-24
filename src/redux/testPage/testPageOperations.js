import axios from 'axios';
import {
  fetchCurrentQuestionStart,
  fetchCurrentQuestionSuccess,
  fetchCurrentQuestionError,
  fetchResultAnswerStart,
  fetchResultAnswerSuccess,
  fetchResultAnswerError,
  fetchNextQuestionSuccess,
} from './testPageActions';

axios.defaults.baseURL = 'https://test.goit.co.ua/api';

export const fetchCurrentQuestion = () => dispatch => {
  dispatch(fetchCurrentQuestionStart());

  axios
    .get('/tests/5d246ffc75a8c204991c26e1')
    .then(response => dispatch(fetchCurrentQuestionSuccess(response.data)))
    .catch(error => dispatch(fetchCurrentQuestionError(error)));
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
