import { combineReducers } from 'redux';
import { ActionType } from './languageDescrPageActions';

const currentQuestionReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_TEST_SUCCESS:
      return payload.test;
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
      return false;

    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_TEST_START:
    case ActionType.FETCH_TEST_SUCCESS:
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
