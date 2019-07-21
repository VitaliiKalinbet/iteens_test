import { combineReducers } from 'redux';
import {
  loadingReducer,
  errorReducer,
  userAnswerReducer,
  resultAnswereReducer,
  nextQuestionAnswer,
} from './TestPage/testPageReducers';
import currentQuestionReducer from './languageDescrPage/languageDescrPageCurrentQuestionReducer';
import startPageReducer from './startPageRedux/startPageReducers';
import startPageSetLanguage from './startPageRedux/startPageSetLanguage';
import {
  userIdReducer,
  timeStartReducer,
} from './languageDescrPage/languageDescrPageReducer';
// тут импортируем редюсеры

const rootReducer = combineReducers({
  loading: loadingReducer,
  error: errorReducer,
  userAnswer: userAnswerReducer,
  resultAnswer: resultAnswereReducer,
  nextQuestion: nextQuestionAnswer,
  currentLanguageId: startPageSetLanguage,
  userId: userIdReducer,
  currentQuestion: currentQuestionReducer,
  testTime: timeStartReducer,
  languagesInfoArr: startPageReducer,
});

export default rootReducer;
