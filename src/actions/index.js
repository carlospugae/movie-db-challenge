export const GET_MOVIE_RECOMENDATIONS_INIT = '@app/GET_MOVIE_RECOMENDATIONS_INIT';
export const GET_MOVIE_RECOMENDATIONS_SUCCESS = '@app/GET_MOVIE_RECOMENDATIONS_SUCCESS';
export const GET_MOVIE_RECOMENDATIONS_FAILURE = '@app/GET_MOVIE_RECOMENDATIONS_FAILURE';

export const SEARCH_MOVIE_INIT = '@app/SEARCH_MOVIE_INIT';
export const SEARCH_MOVIE_SUCCESS = '@app/SEARCH_MOVIE_SUCCESS';
export const SEARCH_MOVIE_FAILURE = '@app/SEARCH_MOVIE_FAILURE';

export const GET_MOVIE_DETAILS_INIT = '@app/GET_MOVIE_DETAILS_INIT';
export const GET_MOVIE_DETAILS_SUCCESS = '@app/GET_MOVIE_DETAILS_SUCCESS';
export const GET_MOVIE_DETAILS_FAILURE = '@app/GET_MOVIE_DETAILS_FAILURE';

export const SET_FILTER_RATING = '@app/SET_FILTER_RATING';

export const getMovieRecomendations = () => ({
  type: GET_MOVIE_RECOMENDATIONS_INIT,
});

export const searchMovie = (movieName) => ({
  type: SEARCH_MOVIE_INIT,
  payload: {
    movieName,
  },
});

export const getMovieDetailsAction = (id) => ({
  type: GET_MOVIE_DETAILS_INIT,
  payload: {
    id,
  },
});

export const setFilterRating = (filterValue) => ({
  type: SET_FILTER_RATING,
  payload: { filterValue },
});
