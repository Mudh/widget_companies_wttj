// Types
export const CHANGE_MESSAGE = 'CHANGE_MESSAGE';

// action creator
export const changeMessage = message => ({
  type: CHANGE_MESSAGE,
  message,
});
