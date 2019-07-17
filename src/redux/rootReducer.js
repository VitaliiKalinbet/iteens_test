import { combineReducers } from 'redux';
import {
  currentLanguageIdReducer,
  userIdReducer,
  currentQuestionReducer,
  timeStartReducer,
  // loadingReducer,
  // errorReducer,
} from './languageDescrPage/languageDescrPageReducer';
// тут импортируем редюсеры

const rootReducer = combineReducers({
  currentLanguageId: currentLanguageIdReducer,
  userId: userIdReducer,
  currentQuestion: currentQuestionReducer,
  testTime: timeStartReducer,
  // loading: loadingReducer,
  // error: errorReducer,
  // тут подключаем редюсеры
});

export default rootReducer;
