import * as actionTypes from '../actions/actionTypes';

const initialState = {
  disk: null,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DISK_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FETCH_DISK_SUCCESS:
      return {
        ...state,
        disk: action.disk,
        loading: false,
      };
    case actionTypes.FETCH_DISK_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
