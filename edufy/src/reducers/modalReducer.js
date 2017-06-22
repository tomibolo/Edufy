import { SHOW_MODAL } from '../actions/types';

const initialState = {
  show: false
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case SHOW_MODAL:
      return action.modal
    default: return state;
  }
}
