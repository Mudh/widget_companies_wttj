/* eslint-disable import/prefer-default-export */
import axios from 'axios';

// Widget Types
export const LOAD_DATA = 'LOAD_DATA';

// widget action
const loadData = apiExampleData => ({
  type: LOAD_DATA,
  apiExampleData,
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
