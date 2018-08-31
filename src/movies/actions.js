// action creator == function that return an action object
export const GET_MOVIES = 'GET_MOVIES';

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
