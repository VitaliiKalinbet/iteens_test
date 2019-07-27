import { ActionType } from './languageDescrPageActions';
import { ActionType as TestType } from '../testPage/testPageActions';

export const userIdReducer = (state = '', { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_TEST_SUCCESS:
      return payload.test.userId;
    case TestType.FINISH_TEST_SUCCESS:
      return '';
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

    case TestType.FINISH_TEST_SUCCESS:
      return {
        startTime: null,
        endTime: null,
      };
    default:
      return state;
  }
};
