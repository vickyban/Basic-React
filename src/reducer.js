import { TOGGLE_MESSAGE } from './actions';

const initialState = {
  messageVisibility: false,
};

// if use arrow function, then name is required
export default function (state = initialState, action) {
  const { type } = action;
  switch (type) {
    case TOGGLE_MESSAGE:
      return { ...state, messageVisibility: !state.messageVisibility };
    default:
      return state;
  }
}
