import { GET_MOVIES } from './actions';

const initialState = {
  movies: [],
  moviesLoaded: false,
};

// if use arrow function, then name is required
export default function (state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: data,
        moviesLoaded: true,
      };
    default:
      return state;
  }
}
