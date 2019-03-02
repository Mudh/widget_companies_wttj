// npm import
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';

// local import
import reducer from './reducers';

// middlewares
const middlewares = [ReduxThunk];
const appliedMiddlewares = applyMiddleware(...middlewares);

// devTools
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? [window.__REDUX_DEVTOOLS_EXTENSION__()]
  : [];

// combine middlewares + devtools
const enhancers = compose(
  appliedMiddlewares,
  ...devTools
);

/**
 * store
 */

// createStore
const store = createStore(reducer, enhancers);

/**
 * Export
 */
export default store;
