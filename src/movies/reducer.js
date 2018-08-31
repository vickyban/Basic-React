import { GET_MOVIES } from './actions';

const initialState = {
  movies: [],
};

// if use arrow function, then name is required
export default function (state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case GET_MOVIES:
      return { ...state, movies: data };
    default:
      return state;
  }
}
