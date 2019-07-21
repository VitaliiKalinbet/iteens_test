import axios from 'axios';

import {
  fetchTestStart,
  fetchTestSuccess,
  fetchTestError,
} from './languageDescrPageActionCreators';

export const fetchTest = id => dispatch => {
  dispatch(fetchTestStart());

  axios
    .get(`https://test.goit.co.ua/api/tests/${id}`)
    .then(response => {
      dispatch(fetchTestSuccess(response.data));
    })
    .catch(error => {
      dispatch(fetchTestError(error));
    });
};
export const llll = () => null;
