import axios from 'axios';
import {
  fetchLanguageStart,
  fetchLanguageSuccess,
  fetchLanguageError,
} from './startPageActions';

// eslint-disable-next-line
export const fetchLanguages = () => dispatch => {
  dispatch(fetchLanguageStart());

  axios
    .get('https://test.goit.co.ua/api/tests')
    .then(response => {
      dispatch(fetchLanguageSuccess(response.data.languages));
    })
    .catch(error => {
      dispatch(fetchLanguageError(error));
    });
};
