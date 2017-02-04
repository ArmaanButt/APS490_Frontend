import { ADD_ITEM } from '../constants/actionTypes';

export default function addItem(payload) {
  return {
    type: ADD_ITEM,
    payload,
  };
}

