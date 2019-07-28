// import { combineReducers } from 'redux';
import { ActionType } from './testPageActions';

// export const loadingReducer = (state = false, { type }) => {
//   switch (type) {
//     case ActionType.FETCH_CURRENTQUESTION_START:
//     case ActionType.PUSH_USER_ANSWER_START:
//       return true;
//     case ActionType.FETCH_CURRENTQUESTION_SUCCESS:
//     case ActionType.PUSH_USER_ANSWER_SUCCESS:
//       return false;
//     default:
//       return state;
//   }
// };

// export const errorReducer = (state = null, { type, payload }) => {
//   switch (type) {
//     case ActionType.FETCH_CURRENTQUESTION_ERROR:
//     case ActionType.PUSH_USER_ANSWER_ERROR:
//       return payload.error;
//     case ActionType.FETCH_CURRENTQUESTION_START:
//     case ActionType.PUSH_USER_ANSWER_START:
//       return null;
//     default:
//       return state;
//   }
// };

export const userAnswerReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionType.CHANGE_USER_ANSWER:
      return payload.userAnswer;
    case ActionType.CHANGE_USER_ANSWER_QUESTION_NUMBER:
      return payload.questionNumber;
    case ActionType.RESET_USER_ANSWER:
      return payload.reset;
    case ActionType.FINISH_TEST_SUCCESS:
      return {};
    default:
      return state;
  }
};

export const resultAnsweredReducer = (state = false, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_RESULT_ANSWER_SUCCESS:
      return payload.resultAnswer;
    case ActionType.RESET_RESULT_ANSWER:
      return payload.reset;
    case ActionType.FINISH_TEST_SUCCESS:
      return false;
    default:
      return state;
  }
};

export const nextQuestionAnswerReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_NEXT_QUESTION_SUCCESS:
      return payload.nextQuestion;
    case ActionType.RESET_NEXT_QUESTION:
      return payload.reset;
    case ActionType.FINISH_TEST_SUCCESS:
      return {};
    default:
      return state;
  }
};

export const finalResultReducer = (state = false, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_FINAL_RESULT:
      return payload.finalResult;
    case ActionType.FINISH_TEST_SUCCESS:
      return false;
    default:
      return state;
  }
};
