import { combineReducers } from 'redux';
import app from './app';
import api from './api';

export default combineReducers({
  app,
  api,
});
