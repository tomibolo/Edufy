import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { SET_CURRENT_USER } from './types';
import { getUsersRequest } from './usersActions';

export function setCurrentUserAction(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function userLoginRequest(userData) {
  return dispatch =>
    {
      return axios.post('http://localhost:8000/login', userData).then(response => {
        const token = response.data.access_token;
        localStorage.setItem('jwtToken', token);
        setAuthorizationToken(token);
        dispatch(setCurrentUserAction(jwtDecode(token)));
        dispatch(getUsersRequest());
      });
    }
}

export function userLogoutAction() {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUserAction({}));
  }
}

export function userLogoutRequest(userData) {
  return dispatch =>
    {
      return axios.post('http://localhost:8000/logout').then(response => {
        localStorage.removeItem('jwtToken');
        setAuthorizationToken(false);
        dispatch(setCurrentUserAction({}));
      });
    }
}
