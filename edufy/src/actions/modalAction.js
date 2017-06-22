import { SHOW_MODAL } from './types';

export function toggleModal(modal) {
  return {
    type: SHOW_MODAL,
    modal: modal
  };
}
