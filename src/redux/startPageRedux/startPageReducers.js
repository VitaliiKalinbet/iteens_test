import { combineReducers } from 'redux';
import { ActionType } from './startPageActions';
import { ActionType as TestType } from '../testPage/testPageActions';

const languageReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_LANGUAGES_SUCCESS:
      return payload;
    case TestType.FINISH_TEST_SUCCESS:
      return [];
    default:
      return state;
  }
};

const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case ActionType.FETCH_LANGUAGES_START:
      return true;

    case ActionType.FETCH_LANGUAGES_SUCCESS:
    case ActionType.FETCH_LANGUAGES_ERROR:
      return false;

    case TestType.FINISH_TEST_SUCCESS:
      return false;
    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_LANGUAGES_START:
    case ActionType.FETCH_LANGUAGES_SUCCESS:
      return null;

    case ActionType.FETCH_LANGUAGES_ERROR:
      return payload;

    case TestType.FINISH_TEST_SUCCESS:
      return null;
    default:
      return state;
  }
};

export default combineReducers({
  languages: languageReducer,
  loading: loadingReducer,
  error: errorReducer,
});
