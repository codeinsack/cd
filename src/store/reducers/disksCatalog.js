import { createReducer } from 'reduxsauce';

import * as actionTypes from '../actions/actionTypes';

export const INITIAL_STATE = {
  disks: [],
  loading: false,
};

export const start = (state = INITIAL_STATE) => ({
  ...state,
  loading: true,
});

export const success = (state = INITIAL_STATE, action) => ({
  ...state,
  disks: action.disks,
  loading: false,
});

export const fail = (state = INITIAL_STATE) => ({
  ...state,
  loading: true,
});

export const HANDLERS = {
  [actionTypes.FETCH_DISKS_START]: start,
  [actionTypes.FETCH_DISKS_SUCCESS]: success,
  [actionTypes.FETCH_DISKS_FAIL]: fail,
};

export default createReducer(INITIAL_STATE, HANDLERS);
