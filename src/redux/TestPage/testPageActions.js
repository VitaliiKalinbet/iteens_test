export const ActionType = {
  FETCH_CURRENTQUESTION_START: 'FETCH_CURRENTQUESTION_START',
  FETCH_CURRENTQUESTION_SUCCESS: 'FETCH_CURRENTQUESTION_SUCCESS',
  FETCH_CURRENTQUESTION_ERROR: 'FETCH_CURRENTQUESTION_ERROR',
  REWRITE_CURRENTQUESTION: 'REWRITE_CURRENTQUESTION',
  CHANGE_USER_ANSWER: 'CHANGE_USER_ANSWER',
  CHANGE_USER_ANSWER_QUESTION_NUMBER: 'CHANGE_USER_ANSWER_QUESTION_NUMBER',
  RESET_USER_ANSWER: 'RESET_USER_ANSWER',
  FETCH_RESULT_ANSWER_START: 'FETCH_RESULT_ANSWER_START',
  FETCH_RESULT_ANSWER_SUCCESS: 'FETCH_RESULT_ANSWER_SUCCESS',
  FETCH_RESULT_ANSWER_ERROR: 'FETCH_RESULT_ANSWER_ERROR',
  RESET_RESULT_ANSWER: 'RESET_RESULT_ANSWER',
  FETCH_NEXT_QUESTION_SUCCESS: 'FETCH_NEXT_QUESTION_SUCCESS',
  RESET_NEXT_QUESTION: 'RESET_NEXT_QUESTION',
};

/* currentQuestion */

export const fetchCurrentQuestionStart = () => ({
  type: ActionType.FETCH_CURRENTQUESTION_START,
});

export const fetchCurrentQuestionSuccess = currentQuestion => ({
  type: ActionType.FETCH_CURRENTQUESTION_SUCCESS,
  payload: {
    currentQuestion,
  },
});
export const rewriteCurrentQuestion = currentQuestion => ({
  type: ActionType.REWRITE_CURRENTQUESTION,
  payload: {
    currentQuestion,
  },
});

export const fetchCurrentQuestionError = error => ({
  type: ActionType.FETCH_CURRENTQUESTION_ERROR,
  payload: { error },
});

/* userAnswer */

export const changeUserAnswer = userAnswer => ({
  type: ActionType.CHANGE_USER_ANSWER,
  payload: {
    userAnswer,
  },
});

export const resetUserAnswer = () => ({
  type: ActionType.RESET_USER_ANSWER,
  payload: {
    reset: null,
  },
});

export const changeUserAnswerQuestionNumber = questionNumber => ({
  type: ActionType.CHANGE_USER_ANSWER_QUESTION_NUMBER,
  payload: {
    questionNumber,
  },
});

/* resultAnswer */

export const fetchResultAnswerStart = () => ({
  type: ActionType.FETCH_RESULT_ANSWER_START,
});

export const fetchResultAnswerSuccess = resultAnswer => ({
  type: ActionType.FETCH_RESULT_ANSWER_SUCCESS,
  payload: {
    resultAnswer,
  },
});

export const fetchResultAnswerError = error => ({
  type: ActionType.FETCH_RESULT_ANSWER_ERROR,
  payload: {
    error,
  },
});

export const resetResultAnswer = () => ({
  type: ActionType.RESET_RESULT_ANSWER,
  payload: {
    reset: false,
  },
});

/* nextQuestion */

export const fetchNextQuestionSuccess = nextQuestion => ({
  type: ActionType.FETCH_NEXT_QUESTION_SUCCESS,
  payload: {
    nextQuestion,
  },
});

export const resetNextQuestion = () => ({
  type: ActionType.RESET_NEXT_QUESTION,
  payload: {
    reset: null,
  },
});
