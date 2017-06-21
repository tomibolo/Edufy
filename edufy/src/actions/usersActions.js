import axios from 'axios';
import { GET_USERS, SET_USER } from './types';

export function getUsersAction(users) {
  return {
    type: GET_USERS,
    users: users
  };
}


export function getUsersRequest() {
  return dispatch => {
    return axios.get('http://localhost:8000/users').then(response => {
      dispatch(getUsersAction(response.data.users));
    });
  }
}




export function setUserAction(user) {
  return {
    type: SET_USER,
    user: user
  }
}


export function setUserRequest(user) {
  return dispatch => {
    return axios.post('http://localhost:8000/users', user).then(response => {
      dispatch(setUserAction(user));
      // dispatch(getUsersRequest());
    });
  }
}
