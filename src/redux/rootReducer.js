import { combineReducers } from 'redux';
import {
  userIdReducer,
  timeStartReducer,
} from './languageDescrPage/languageDescrPageReducer';
import currentQuestionReducer from './languageDescrPage/languageDescrPageCurrentQuestionReducer';
import startPageReducer from './startPageRedux/startPageReducers';
import startPageSetLanguage from './startPageRedux/startPageSetLanguage';
// тут импортируем редюсеры

const rootReducer = combineReducers({
  currentLanguageId: startPageSetLanguage,
  userId: userIdReducer,
  currentQuestion: currentQuestionReducer,
  testTime: timeStartReducer,
  languagesInfoArr: startPageReducer,
});

export default rootReducer;
