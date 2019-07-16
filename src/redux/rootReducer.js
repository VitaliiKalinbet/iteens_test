import { combineReducers } from 'redux';
import languageDescrReducer from './languageDescrPage/languageDescrPageReducer';
// тут импортируем редюсеры

const rootReducer = combineReducers({
  myReducers: languageDescrReducer,
  // тут подключаем редюсеры
});

export default rootReducer;
