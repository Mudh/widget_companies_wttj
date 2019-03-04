import * as types from '../actions/widget';
import data from '../../data/company';

// initial state
const initialState = {
  apiDataExample: undefined,
  dataCompany: data,
};

// reducer
const widget = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.LOAD_DATA:
      return {
        ...state,
        apiDataExample: action.apiExampleData,
        toto: data,
      };
    default:
      return state;
  }
};

// export
export default widget;
