import { combineReducers } from 'redux';
import startPageReducer from './startPageRedux/startPageReducers';
import startPageSetLanguage from './startPageRedux/startPageSetLanguage';
// тут импортируем редюсеры

const rootReducer = combineReducers({
  languagesInfoArr: startPageReducer,
  currentLanguageId: startPageSetLanguage,
  // тут подключаем редюсеры
});

export default rootReducer;
