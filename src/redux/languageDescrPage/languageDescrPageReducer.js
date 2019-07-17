import { ActionType } from './languageDescrPageActions';

export const currentLanguageIdReducer = (state = '', { type }) => {
  switch (type) {
    case ActionType.COME_BACK_TO_STARTPAGE:
      return '';
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
      return {
        startTime: payload.time,
      };
    default:
      return state;
  }
};
// export const loadingReducer = (state = false, { type, payload }) => {
//   switch (type) {
//     case ActionType.FETCH_TEST_START:
//       return true;

//     case ActionType.FETCH_TEST_SUCCESS:
//     case ActionType.FETCH_TEST_ERROR:
//       return false;

//     default:
//       return state;
//   }
// };

// export const errorReducer = (state = null, { type, payload }) => {
//   switch (type) {
//     case ActionType.FETCH_TEST_START:
//       return null;

//     case ActionType.FETCH_TEST_ERROR:
//       return payload.error;

//     default:
//       return state;
//   }
// };
