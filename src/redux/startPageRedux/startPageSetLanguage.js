import { ActionType } from './startPageActions';

const languageReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ActionType.SET_LANGUAGE:
      return payload;

    default:
      return state;
  }
};

export default languageReducer;
