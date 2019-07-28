import { combineReducers } from 'redux';
import {
  userIdReducer,
  timeStartReducer,
} from './languageDescrPage/languageDescrPageReducer';
import currentQuestionReducer from './languageDescrPage/languageDescrPageCurrentQuestionReducer';
import startPageReducer from './startPageRedux/startPageReducers';
import startPageSetLanguage from './startPageRedux/startPageSetLanguage';
import {
  userAnswerReducer,
  resultAnsweredReducer,
  nextQuestionAnswerReducer,
  finalResultReducer,
} from './testPage/testPageReducers';

// тут импортируем редюсеры

const rootReducer = combineReducers({
  currentLanguageId: startPageSetLanguage,
  userId: userIdReducer,
  currentQuestion: currentQuestionReducer,
  testTime: timeStartReducer,
  languagesInfoArr: startPageReducer,
  userAnswer: userAnswerReducer,
  resultAnswered: resultAnsweredReducer,
  nextQuestion: nextQuestionAnswerReducer,
  finalResult: finalResultReducer,
});

export default rootReducer;
