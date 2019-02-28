import { createReducer } from 'reduxsauce';

import * as actionTypes from '../actions/actionTypes';

export const INITIAL_STATE = {
  token: null,
  userId: null,
  error: null,
  loading: false,
};

export const start = (state = INITIAL_STATE) => ({
  ...state,
  error: null,
  loading: true,
});

export const success = (state = INITIAL_STATE, action) => ({
  ...state,
  token: action.idToken,
  userId: action.userId,
  error: null,
  loading: false,
});

export const fail = (state = INITIAL_STATE, action) => ({
  ...state,
  error: action.error,
  loading: false,
});

export const logout = (state = INITIAL_STATE) => ({
  ...state,
  token: null,
  userId: null,
});

export const HANDLERS = {
  [actionTypes.AUTH_START]: start,
  [actionTypes.AUTH_SUCCESS]: success,
  [actionTypes.AUTH_FAIL]: fail,
  [actionTypes.AUTH_LOGOUT]: logout,
};

export default createReducer(INITIAL_STATE, HANDLERS);
