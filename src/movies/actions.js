// action creator == function that return an action object
export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE = 'GET_MOVIE';
export const RESET_MOVIE = 'RESET_MOVIE';

export function getMovies() {
  return async function (dispatch) {
    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=ebdaf01ed8d5831bedeb284c4c75a84b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
    const res = await fetch(url);
    const movies = await res.json();
    return dispatch({
      type: 'GET_MOVIES',
      data: movies.results,
    });
  };
}

export function getMovie(id) {
  return async function (dispatch) {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=ebdaf01ed8d5831bedeb284c4c75a84b&language=en-US`;
    const res = await fetch(url);
    const movie = await res.json();
    return dispatch({
      type: 'GET_MOVIE',
      data: movie,
    });
  };
}

export function resetMovie() {
  return {
    type: 'RESET_MOVIE',
  };
}
