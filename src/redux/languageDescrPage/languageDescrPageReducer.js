import { ActionType } from './languageDescrPageActions';

export const userIdReducer = (state = '', { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_TEST_SUCCESS:
      return payload.test.userId;
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
