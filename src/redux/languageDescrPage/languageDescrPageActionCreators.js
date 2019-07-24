import { ActionType } from './languageDescrPageActions';

export const fetchTestStart = () => ({
  type: ActionType.FETCH_TEST_START,
});

export const fetchTestSuccess = test => ({
  type: ActionType.FETCH_TEST_SUCCESS,
  payload: {
    test,
  },
});

export const fetchTestError = error => ({
  type: ActionType.FETCH_TEST_ERROR,
  payload: {
    error,
  },
});
export const startTime = () => ({
  type: ActionType.TIME_START,
  payload: {
    time: Date.now(),
  },
});
export const endTime = () => ({
  type: ActionType.TIME_END,
  payload: {
    time: Date.now(),
  },
});
