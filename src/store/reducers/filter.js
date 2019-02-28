import { createReducer } from 'reduxsauce';

import * as actionTypes from '../actions/actionTypes';

export const INITIAL_STATE = { text: '' };

export const filter = (state = INITIAL_STATE, action) => ({
  ...state,
  text: action.text,
});

export const HANDLERS = {
  [actionTypes.FILTER_TEXT]: filter,
};

export default createReducer(INITIAL_STATE, HANDLERS);
