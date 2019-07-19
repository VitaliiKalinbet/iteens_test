import { combineReducers } from 'redux';
import { ActionType } from './startPageActions';

const languageReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_LANGUAGES_SUCCESS:
      return payload;

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

    default:
      return state;
  }
};

export default combineReducers({
  languages: languageReducer,
  loading: loadingReducer,
  error: errorReducer,
});
