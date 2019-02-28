import { createReducer } from 'reduxsauce';

import * as actionTypes from '../actions/actionTypes';

export const INITIAL_STATE = {
  disk: null,
  loading: false,
  success: false,
};

export const start = (state = INITIAL_STATE) => ({
  ...state,
  loading: true,
});

export const success = (state = INITIAL_STATE, action) => ({
  ...state,
  disk: action.disk,
  loading: false,
  success: true,
});

export const fail = (state = INITIAL_STATE) => ({
  ...state,
  loading: true,
});

export const HANDLERS = {
  [actionTypes.CREATE_NEW_DISK_START]: start,
  [actionTypes.CREATE_NEW_DISK_SUCCESS]: success,
  [actionTypes.CREATE_NEW_DISK_FAIL]: fail,
};

export default createReducer(INITIAL_STATE, HANDLERS);
