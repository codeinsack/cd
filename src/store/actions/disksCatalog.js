import * as actionTypes from './actionTypes';
import axios from '../../axios-disks';

export const fetchDisksStart = () => ({
  type: actionTypes.FETCH_DISKS_START,
});

export const fetchDisksSuccess = disks => ({
  type: actionTypes.FETCH_DISKS_SUCCESS,
  disks,
});

export const fetchDisksFail = error => ({
  type: actionTypes.FETCH_DISKS_FAIL,
  error,
});

export const fetchDisks = () => (dispatch) => {
  dispatch(fetchDisksStart());
  axios.get('/disks.json')
    .then((res) => {
      console.log(res);
      dispatch(fetchDisksSuccess());
    })
    .catch((err) => {
      console.log(err);
      dispatch(fetchDisksFail());
    });
};
