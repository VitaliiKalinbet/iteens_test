export const ActionType = {
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
  FETCH_SKIP_QUESTION_START: 'FETCH_SKIP_QUESTION_START',
  FETCH_SKIP_QUESTION_SUCCESS: 'FETCH_SKIP_QUESTION_SUCCESS',
  FETCH_SKIP_QUESTION_ERROR: 'FETCH_SKIP_ERROR',
  FETCH_FINAL_RESULT: 'FETCH_FINAL_RESULT',
  FINISH_TEST_START: 'FINISH_TEST_START',
  FINISH_TEST_SUCCESS: 'FINISH_TEST_SUCCESS',
  FINISH_TEST_ERROR: 'FINISH_TEST_ERROR',
};

/*
 * finishTest
 */
export const finishTestStart = () => ({
  type: ActionType.FINISH_TEST_START,
});
export const finishTestSuccess = () => ({
  type: ActionType.FINISH_TEST_SUCCESS,
});
export const finishTestError = () => ({
  type: ActionType.FINISH_TEST_ERROR,
});

/* rewriteCurrentQuestion */

export const rewriteCurrentQuestion = test => ({
  type: ActionType.REWRITE_CURRENTQUESTION,
  payload: {
    test,
  },
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

/* Action skip the question */

export const fetchSkipTheQuestionStart = () => ({
  type: ActionType.FETCH_SKIP_QUESTION_START,
});

export const fetchSkipTheQuestionSuccess = test => ({
  type: ActionType.FETCH_SKIP_QUESTION_SUCCESS,
  payload: {
    test,
  },
});

export const fetchSkipTheQuestionError = error => ({
  type: ActionType.FETCH_SKIP_QUESTION_ERROR,
  payload: {
    error,
  },
});

export const fetchFinalResult = finalResult => ({
  type: ActionType.FETCH_FINAL_RESULT,
  payload: {
    finalResult,
  },
});
