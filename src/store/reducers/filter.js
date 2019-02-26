import * as actionTypes from '../actions/actionTypes';

const reducer = (state = { text: '' }, action) => {
  switch (action.type) {
    case actionTypes.FILTER_TEXT:
      return {
        ...state,
        text: action.text,
      };
    default:
      return state;
  }
};

export default reducer;
