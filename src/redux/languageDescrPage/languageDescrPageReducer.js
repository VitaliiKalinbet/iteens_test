import { combineReducers } from 'redux';
import { ActionType } from './languageDescrPageActions';


const currentLanguageReducer = (state = '', { type, payload }) => {
  switch (type) {
    case ActionType.COME_BACK_TO_STARTPAGE:
      return state.filter(item => item !== payload.currentLanguage);
    default:
      return state;
  }
};
// const currentLanguage = (state = '', { type, payload }) => {
//   switch (type) {
//     case ActionType.SET_CL:
//       return [...state, payload];
//     default:
//       return state;
//   }
// };
export default combineReducers({
  currentLanguageBack: currentLanguageReducer,
  currentLanguage,
});
