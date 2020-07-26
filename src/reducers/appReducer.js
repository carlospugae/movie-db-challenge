import { createSelector } from 'reselect';
import { filter, equals } from 'ramda';

import {
  GET_MOVIE_RECOMENDATIONS_INIT,
  GET_MOVIE_RECOMENDATIONS_SUCCESS,
  GET_MOVIE_RECOMENDATIONS_FAILURE,
  SEARCH_MOVIE_INIT,
  SEARCH_MOVIE_SUCCESS,
  SEARCH_MOVIE_FAILURE,
  GET_MOVIE_DETAILS_INIT,
  GET_MOVIE_DETAILS_SUCCESS,
  GET_MOVIE_DETAILS_FAILURE,
  SET_FILTER_RATING,
} from 'actions';

const initialState = {
  error: '',
  loading: true,
  availableMovies: [],
  movieDetails: null,
  movieDetailsLoading: true,
  movieDetailsError: '',
  filterRating: '',
  filteredMovies: [],
};

const isBetween = (voteAverage, filterValue) =>
  voteAverage >= filterValue - 2 && voteAverage <= filterValue;

const isInFilterRange = (filterValue) => (movie) => {
  return isBetween(movie.vote_average, filterValue);
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_RECOMENDATIONS_INIT:
    case SEARCH_MOVIE_INIT:
      return {
        ...state,
        loading: true,
        error: '',
        filterRating: '',
      };
    case GET_MOVIE_RECOMENDATIONS_SUCCESS:
    case SEARCH_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        availableMovies: [...action.payload.availableMovies],
      };
    case GET_MOVIE_RECOMENDATIONS_FAILURE:
    case SEARCH_MOVIE_FAILURE:
      return { ...state, error: action.error, loading: false };
    case GET_MOVIE_DETAILS_INIT:
      return {
        ...state,
        movieDetailsLoading: true,
        movieDetailsError: '',
      };
    case GET_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        movieDetailsLoading: false,
        movieDetailsError: '',
        movieDetails: { ...action.payload.availableMovieDetails },
      };
    case GET_MOVIE_DETAILS_FAILURE:
      return { ...state, movieDetailsError: action.error, movieDetailsLoading: false };
    case SET_FILTER_RATING:
      return {
        ...state,
        filterRating: equals(action.payload.filterValue, state.filterRating)
          ? ''
          : action.payload.filterValue,
        filteredMovies: equals(action.payload.filterValue, state.filterRating)
          ? []
          : filter(isInFilterRange(action.payload.filterValue), state.availableMovies),
      };
    default:
      return state;
  }
};

const getAppData = (state) => state.appData;

export const getLoading = createSelector(getAppData, (appData) => appData.loading);
export const getError = createSelector(getAppData, (appData) => appData.error);
export const getAvailableMovies = createSelector(getAppData, (appData) => appData.availableMovies);
export const getMovieDetails = createSelector(getAppData, (appData) => appData.movieDetails);
export const getMovieDetailsLoading = createSelector(
  getAppData,
  (appData) => appData.movieDetailsLoading
);
export const getMovieDetailsError = createSelector(
  getAppData,
  (appData) => appData.movieDetailsError
);
export const getFilterRating = createSelector(getAppData, (appData) => appData.filterRating);
export const getFilteredMovies = createSelector(getAppData, (appData) => appData.filteredMovies);
