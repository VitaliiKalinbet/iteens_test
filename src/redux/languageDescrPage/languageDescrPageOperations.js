import axios from 'axios';

import {
  fetchTestStart,
  fetchTestSuccess,
  fetchTestError,
} from './languageDescrPageActionCreators';

export const fetchTest = id => {
  return async dispatch => {
    try {
      dispatch(fetchTestStart());
      const response = await axios.get(
        `https://test.goit.co.ua/api/tests/${id}`,
      );
      dispatch(fetchTestSuccess(response.data));
    } catch (error) {
      dispatch(fetchTestError(error));
      return error;
    }
    return '';
  };
};
export const llll = () => null;
