import * as types from '../actions/api';

// initial state
const initialState = {
  data: null,
};

// reducer
const api = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.LOAD_DATA:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};

// export
export default api;
