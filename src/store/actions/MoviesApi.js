import {
  FETCH_MOVIE_DATA_REQUEST,
  FETCH_MOVIE_DATA_SUCCESS,
  FETCH_MOVIE_DATA_ERROR
} from './actionType';

export const getMovies = (query) => dispatch => {
  dispatch({ type: FETCH_MOVIE_DATA_REQUEST });
  fetch(`http://www.omdbapi.com/?s=${query}&apikey=thewdb`)
    .then(res => res.json())
    .then(results =>{
      dispatch({
        type: FETCH_MOVIE_DATA_SUCCESS,
        payload: results.Search
      })
    }
    )
    .catch(error => dispatch({ type: FETCH_MOVIE_DATA_ERROR, payload: error }));
};
