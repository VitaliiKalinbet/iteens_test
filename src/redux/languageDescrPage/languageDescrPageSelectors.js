export const getCurrentLanguageId = state => state.currentLanguageId;
export const getLanguageArr = state => state.languagesInfoArr.languages;

export const getLanguageById = state => {
  const id = getCurrentLanguageId(state);
  const languages = getLanguageArr(state);
  return languages.find(item => item.languageId === id);
};
export const loading = state => state.currentQuestion.loading;

export const error = state => state.currentQuestion.error;
