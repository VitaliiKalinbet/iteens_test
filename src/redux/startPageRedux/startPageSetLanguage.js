import { ActionType } from './startPageActions';
import { ActionType as TestType } from '../testPage/testPageActions';

const languageReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ActionType.SET_LANGUAGE:
      return payload;
    case ActionType.COME_BACK_TO_STARTPAGE:
      return '';
    case TestType.FINISH_TEST_SUCCESS:
      return null;
    default:
      return state;
  }
};

export default languageReducer;
