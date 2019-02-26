import * as actionTypes from './actionTypes';

export const filterText = text => ({
  type: actionTypes.FILTER_TEXT,
  text,
});
