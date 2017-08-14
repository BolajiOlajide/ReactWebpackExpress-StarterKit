import * as types from '../constant';
import DetailApi from '../api/mockApi';
import axios from 'axios';

const getDetailSuccess = (details) => {
  return {type: types.GET_DETAIL, details};
};

const saveDetailSuccess = (detail) => {
  return { type: types.SAVE_DETAIL, detail};
}

const getGitSuccess = (details) => {
  return { type: types.GET_GIT, details };
}

export const saveDetails = (detail) => {
  return (dispatch) => DetailApi.saveDetail(detail)
    .then((newDetail) => {
      dispatch(saveDetailSuccess(newDetail));
    }).catch((error) => {
      throw(error)
    });
}

export const getDetail = () => {
  return (dispatch) => DetailApi.getAllDetails()
    .then((details) => {
      dispatch(getDetailSuccess(details));
    })
}

export const getGit = () => {
  return dispatch => axios.get('https://api.github.com/users')
    .then((result) => {
      dispatch(getGitSuccess(result.data));
    });
}
