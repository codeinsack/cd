import * as actionTypes from './actionTypes';
import axios from '../../axios-disks';

export const createDiskStart = () => ({
  type: actionTypes.CREATE_NEW_DISK_START,
});

export const createDiskSuccess = disk => ({
  type: actionTypes.CREATE_NEW_DISK_SUCCESS,
  disk,
});

export const createDiskFail = error => ({
  type: actionTypes.CREATE_NEW_DISK_FAIL,
  error,
});

export const createNewDisk = diskData => (dispatch) => {
  dispatch(createDiskStart());
  axios.post('/disks.json', diskData)
    .then((res) => {
      dispatch(createDiskSuccess(res.data));
    })
    .catch((err) => {
      console.log(err);
      dispatch(createDiskFail(err));
    });
};
