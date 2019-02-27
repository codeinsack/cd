import * as actionTypes from './actionTypes';
import axios from '../../axios-disks';

export const fetchDiskStart = () => ({
  type: actionTypes.FETCH_DISK_START,
});

export const fetchDiskSuccess = disk => ({
  type: actionTypes.FETCH_DISK_SUCCESS,
  disk,
});

export const fetchDiskFail = error => ({
  type: actionTypes.FETCH_DISK_FAIL,
  error,
});

export const fetchDisk = id => (dispatch) => {
  dispatch(fetchDiskStart());
  axios.get(`/disks/${id}.json`)
    .then((res) => {
      const fetchedDisk = {
        ...res.data,
        id,
      };
      dispatch(fetchDiskSuccess(fetchedDisk));
    })
    .catch((err) => {
      console.log(err);
      dispatch(fetchDiskFail(err));
    });
};
