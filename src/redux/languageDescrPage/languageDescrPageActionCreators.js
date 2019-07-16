import { ActionType } from './languageDescrPageActions';

export const onComeBack = currentLanguage => ({
  type: ActionType.COME_BACK_TO_STARTPAGE,
  payload: {
    currentLanguage,
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
export const timeStart = time => ({
  type: ActionType.TIME_START,
  payload: {
    time,
  },
});
