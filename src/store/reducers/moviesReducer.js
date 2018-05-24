import {
  FETCH_MOVIE_DATA_REQUEST,
  FETCH_MOVIE_DATA_SUCCESS,
  FETCH_MOVIE_DATA_ERROR
} from '../actions/actionType';

const initialState = {
  currentMovies: [],
  loading: false,
  err: null
};

const reducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case FETCH_MOVIE_DATA_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_MOVIE_DATA_SUCCESS:
      return {
        ...state,
        currentMovies: action.payload
      };
    case FETCH_MOVIE_DATA_ERROR:
      return {
        ...state,
        err: action.payload
      };

    default:
      return {
        ...state
      };
  }
};

export default reducer;
