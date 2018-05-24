import { OPEN_ITEM_MODAL } from './actionType';

export const openModal = item => {
  return {
    type: OPEN_ITEM_MODAL,
    item
  };
};
