import { ActionType } from './languageDescrPageActions';

export const userIdReducer = (state = '', { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_TEST_SUCCESS:
      return payload.test.userId;
    default:
      return state;
  }
};
export const timeStartReducer = (
  state = {
    startTime: null,
    endTime: null,
  },
  { type, payload },
) => {
  switch (type) {
    case ActionType.TIME_START:
      return {
        startTime: payload.time,
      };
    case ActionType.TIME_END:
      return { ...state, endTime: payload.time };
    default:
      return state;
  }
};
