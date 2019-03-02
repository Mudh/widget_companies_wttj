/* eslint-disable import/prefer-default-export */
import axios from 'axios';

// Api Types
export const LOAD_DATA = 'LOAD_DATA';

// api actions
const loadData = data => ({
  type: LOAD_DATA,
  data,
});

export const apiCall = () => {
  return async dispatch => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      return dispatch(loadData(response.data));
    } catch (error) {
      return console.error(error);
    }
  };
};
