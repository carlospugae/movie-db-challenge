import { put, all, takeLatest, call } from 'redux-saga/effects';
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
} from 'actions';

import APIService from 'service';

export function* getMoviesRecomendationFlow() {
  try {
    const availableMovies = yield call(APIService.getMovies);

    yield put({
      type: GET_MOVIE_RECOMENDATIONS_SUCCESS,
      payload: {
        availableMovies,
      },
    });
  } catch (err) {
    yield put({ type: GET_MOVIE_RECOMENDATIONS_FAILURE, error: err.message });
  }
}

export function* searchMovieFlow({ payload }) {
  try {
    const availableMovies = yield call(APIService.searchMovie, payload.movieName);

    yield put({
      type: SEARCH_MOVIE_SUCCESS,
      payload: {
        availableMovies,
      },
    });
  } catch (err) {
    yield put({ type: SEARCH_MOVIE_FAILURE, error: err.message });
  }
}

export function* movieDetailsFlow({ payload }) {
  try {
    const availableMovieDetails = yield call(APIService.getMovieDetails, payload.id);

    yield put({
      type: GET_MOVIE_DETAILS_SUCCESS,
      payload: {
        availableMovieDetails,
      },
    });
  } catch (err) {
    yield put({ type: GET_MOVIE_DETAILS_FAILURE, error: err.message });
  }
}

export default function* rootLocationsSaga() {
  yield all([
    takeLatest(GET_MOVIE_RECOMENDATIONS_INIT, getMoviesRecomendationFlow),
    takeLatest(SEARCH_MOVIE_INIT, searchMovieFlow),
    takeLatest(GET_MOVIE_DETAILS_INIT, movieDetailsFlow),
  ]);
}
