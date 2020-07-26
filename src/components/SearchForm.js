import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { isEmpty } from 'ramda';

import { searchMovie, getMovieRecomendations } from 'actions';

const SearchFormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;

  input[type='text'] {
    appearance: none;
    background-color: #fff;
    border-color: #e2e8f0;
    border-width: 1px;
    border-radius: 0.25rem;
    padding: 0.25rem 0.55rem;
    font-size: 1rem;
    line-height: 1.5;
  }

  input[type='submit'] {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    padding: 0.25rem 1rem;
    font-size: 0.875rem;
    border-width: 1px;
    border-radius: 0.25rem;
    border-color: #5a67d8;
    background-color: #4c51bf;
    color: #fff;
    margin-left: 0.5rem;
  }
`;

const SearchForm = () => {
  const dispatch = useDispatch();

  const submitHandler = (movieName) => {
    if (isEmpty(movieName)) {
      dispatch(getMovieRecomendations());
    } else {
      dispatch(searchMovie(movieName));
    }
  };

  const onChangeHandler = ({ target }) => submitHandler(target.value);

  return (
    <SearchFormContainer>
      <input
        type="text"
        name="movieName"
        placeholder="Search for a movie"
        onChange={onChangeHandler}
      />
    </SearchFormContainer>
  );
};

export default SearchForm;
