export const getCurrentLanguageId = state => state.currentLanguageId;
export const getLanguageArr = state => state.languagesInfoArr;

export const getLanguageById = state => {
  const id = getCurrentLanguageId(state);
  const languages = getLanguageArr(state);
  return languages.find(item => item.languageId === id);
};
