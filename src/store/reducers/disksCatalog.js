import * as actionTypes from '../actions/actionTypes';

const initialState = {
  disks: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DISKS_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FETCH_DISKS_SUCCESS:
      return {
        ...state,
        disks: action.disks,
        loading: false,
      };
    case actionTypes.FETCH_DISKS_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
