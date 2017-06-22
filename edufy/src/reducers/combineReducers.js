import { combineReducers } from 'redux';

// import flashMessages from '../reducers/flashMessages';
import auth from './authReducer';
import users from './usersReducer';
import modal from './modalReducer';

export default combineReducers({
  // flashMessages,
  auth,
  users,
  modal
});
