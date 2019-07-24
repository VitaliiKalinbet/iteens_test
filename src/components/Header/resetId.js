import axios from 'axios';

const resetUserId = id =>
  axios
    .post(`https://test.goit.co.ua/api/tests/cancel/${id}`)
    // eslint-disable-next-line
    .catch(error => console.log(error));

export default resetUserId;
