export const ActionType = {
  FETCH_LANGUAGES_START: 'FETCH_LANGUAGES_START',
  FETCH_LANGUAGES_SUCCESS: 'FETCH_LANGUAGES_SUCCESS',
  FETCH_LANGUAGES_ERROR: 'FETCH_LANGUAGES_ERROR',
  SET_LANGUAGE: 'SET_LANGUAGE',
  COME_BACK_TO_STARTPAGE: 'COME_BACK_TO_STARTPAGE',
};

export const fetchLanguageStart = () => ({
  type: ActionType.FETCH_LANGUAGES_START,
});

export const fetchLanguageSuccess = languages => ({
  type: ActionType.FETCH_LANGUAGES_SUCCESS,
  payload: languages,
});

export const fetchLanguageError = error => ({
  type: ActionType.FETCH_LANGUAGES_ERROR,
  payload: error,
});

export const setLanguage = id => ({
  type: ActionType.SET_LANGUAGE,
  payload: id,
});
export const onComeBack = currentLanguageId => ({
  type: ActionType.COME_BACK_TO_STARTPAGE,
  payload: {
    currentLanguageId,
  },
});
