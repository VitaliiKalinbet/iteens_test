import { ActionType } from './languageDescrPageActions';

export const onComeBack = currentLanguageId => ({
  type: ActionType.COME_BACK_TO_STARTPAGE,
  payload: {
    currentLanguageId,
  },
});
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
export const startTime = time => ({
  type: ActionType.TIME_START,
  payload: {
    time,
  },
});
