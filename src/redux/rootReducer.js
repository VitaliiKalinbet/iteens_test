import { combineReducers } from 'redux';
import {
  currentQuestionReducer,
  loadingReducer,
  errorReducer,
  userAnswerReducer,
  resultAnswereReducer,
  nextQuestionAnswer,
} from './TestPage/testPageReducers';
// тут импортируем редюсеры

const rootReducer = combineReducers({
  currentQuestion: currentQuestionReducer,
  loading: loadingReducer,
  error: errorReducer,
  userAnswer: userAnswerReducer,
  resultAnswer: resultAnswereReducer,
  nextQuestion: nextQuestionAnswer,
});

export default rootReducer;
