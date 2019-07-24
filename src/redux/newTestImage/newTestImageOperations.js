import axios from 'axios';

import {
  fetchImageStart,
  fetchImageSuccess,
  fetchImageError,
} from './newTestImageActionCreators';

// export const fetchImage = imageName => {
//   return async dispatch => {
//     try {
//       dispatch(fetchImageStart());
//       const response = await axios.get(
//         `https://test.goit.co.ua/images/${imageName}`,
//       );
//       dispatch(fetchImageSuccess(response.data));
//       return response.data;
//     } catch (error) {
//       dispatch(fetchImageError(error));
//       return error;
//     }
//   };
// };
export const fetchImage = imageName => {
  axios
    .get(`https://test.goit.co.ua/images/${imageName}`)
    .then(response => {
      console.log(response);
      return response.data;
    })
    .catch(error => {
      return error;
    });
};
export const llll = () => null;
