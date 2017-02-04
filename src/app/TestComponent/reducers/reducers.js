import { ADD_ITEM } from '../constants/actionTypes';

function addItem(state, item) {
  const newState = Object.assign({}, state, {
    item,
  });
  return newState;
}

export default function (state = {}, action) {
  switch (action.type) {
    case ADD_ITEM:
      return addItem(state, action.payload);
    default:
      return state;
  }
}
