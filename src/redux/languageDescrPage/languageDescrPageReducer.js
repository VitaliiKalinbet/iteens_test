import { ActionType } from './languageDescrPageActions';

export const currentLanguageIdReducer = (state = '', { type, payload }) => {
  switch (type) {
    case ActionType.COME_BACK_TO_STARTPAGE:
      return state.filter(item => item !== payload.currentLanguage);
    default:
      return state;
  }
};
export const userIdReducer = (state = '', { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_TEST_SUCCESS:
      return payload.test.userId;
    default:
      return state;
  }
};
export const currentQuestionReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_TEST_SUCCESS:
      return payload.test;
    default:
      return state;
  }
};
export const timeStartReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case ActionType.TIME_START:
      return payload.time;
    default:
      return state;
  }
};
