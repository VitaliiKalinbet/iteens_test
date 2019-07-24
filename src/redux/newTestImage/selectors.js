export const getCurrentQuestion = state =>
  state.currentQuestion.currentQuestion;
export const getDesktopImageName = state => {
  const currentQuestion = getCurrentQuestion(state);
  return currentQuestion.question.image;
};
export const getMobileImageName = state =>
  state.currentQuestion.currentQuestion.question.imageMobile;
