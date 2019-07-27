import axios from 'axios';
import {
  fetchLanguageStart,
  fetchLanguageSuccess,
  fetchLanguageError,
} from './startPageActions';

// eslint-disable-next-line
export const fetchLanguages = () => {
  return async dispatch => {
    try {
      dispatch(fetchLanguageStart());
      const response = await axios.get('https://test.goit.co.ua/api/tests');
      dispatch(fetchLanguageSuccess(response.data.languages));
      return null;
    } catch (error) {
      dispatch(fetchLanguageError(error));
      return error;
    }
  };
};
