import { ActionType } from './startPageActions';

const languageReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ActionType.SET_LANGUAGE:
      return payload;
    case ActionType.COME_BACK_TO_STARTPAGE:
      return '';
    default:
      return state;
  }
};

export default languageReducer;
