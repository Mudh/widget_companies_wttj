/* eslint-disable import/prefer-default-export */

import * as fromApi from './api';
import * as fromApp from './app';

// api
export const apiCall = () => fromApi.apiCall();

// app
export const changeMessage = message => fromApp.changeMessage(message);
