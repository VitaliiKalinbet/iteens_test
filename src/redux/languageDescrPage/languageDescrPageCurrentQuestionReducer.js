import { combineReducers } from 'redux';
import { ActionType } from './languageDescrPageActions';
import {
  ActionType as ActionTypeTestPage,
  ActionType as TestType,
} from '../testPage/testPageActions';

const currentQuestionReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_TEST_SUCCESS:
      return payload.test;
    case ActionTypeTestPage.REWRITE_CURRENTQUESTION:
      return payload.test;
    case ActionTypeTestPage.FETCH_SKIP_QUESTION_SUCCESS:
      return payload.test;
    case TestType.FINISH_TEST_SUCCESS:
      return null;
    default:
      return state;
  }
};
const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case ActionType.FETCH_TEST_START:
      return true;

    case ActionType.FETCH_TEST_SUCCESS:
    case ActionType.FETCH_TEST_ERROR:
    case TestType.FINISH_TEST_SUCCESS:
      return false;

    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_TEST_START:
    case ActionType.FETCH_TEST_SUCCESS:
    case TestType.FINISH_TEST_SUCCESS:
      return null;

    case ActionType.FETCH_TEST_ERROR:
      return payload.error;

    default:
      return state;
  }
};

export default combineReducers({
  currentQuestion: currentQuestionReducer,
  loading: loadingReducer,
  error: errorReducer,
});
