import * as types from '../actions/app';

// initial state
const initialState = {
  message: 'React starter',
};

// reducer
const app = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.CHANGE_MESSAGE:
      return {
        ...state,
        message: action.message,
      };
    default:
      return state;
  }
};

// export
export default app;
