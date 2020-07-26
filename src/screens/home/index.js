import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { isEmpty } from 'ramda';

import MoviesGallery from 'components/MoviesGallery';
import Filter from 'components/Filter';
import SearchForm from 'components/SearchForm';
import Loading from 'components/Loading';

import { getMovieRecomendations } from 'actions';
import {
  getAvailableMovies,
  getLoading,
  getFilterRating,
  getFilteredMovies,
} from 'reducers/appReducer';

const HomescreenContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;

  .topbar-container {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0.5rem;
    background-color: #E2E8F0;
    margin-bottom: 1rem;
    border-radius: 5px;
  }
`;

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieRecomendations());
  }, [dispatch]);

  const availableMovies = useSelector(getAvailableMovies);
  const filterRating = useSelector(getFilterRating);
  const filteredMovies = useSelector(getFilteredMovies);

  const isLoading = useSelector(getLoading);

  return (
    <HomescreenContainer>
      <div className="topbar-container">
        <SearchForm />
        <Filter />
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <MoviesGallery
          data={isEmpty(filterRating) ? availableMovies : filteredMovies}
        ></MoviesGallery>
      )}
    </HomescreenContainer>
  );
};

export default HomeScreen;
