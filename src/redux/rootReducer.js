import { combineReducers } from 'redux';
import {
  currentLanguageIdReducer,
  userIdReducer,
  currentQuestionReducer,
  timeStartReducer,
} from './languageDescrPage/languageDescrPageReducer';
// тут импортируем редюсеры

const rootReducer = combineReducers({
  currentLanguage: currentLanguageIdReducer,
  userId: userIdReducer,
  currentQuestion: currentQuestionReducer,
  testTime: timeStartReducer,
  // тут подключаем редюсеры
});

export default rootReducer;
