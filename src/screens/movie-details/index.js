import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isNil } from 'ramda';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';

import { getMovieDetails, getMovieDetailsLoading } from 'reducers/appReducer';
import { getMovieDetailsAction } from 'actions';
import Loading from 'components/Loading';

const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 2rem 0;

  .movie-card-container {
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-color: #e2e8f0;
    border-width: 1px;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);


    .no-image-container {
      display: flex;
      flex-direction: column;
      height: 560px;
      width: 100%;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: 1rem;
      background-color: #EDF2F7;

      svg {
        font-size: 8rem;
        color: #4c51bf;
      }
    }
    img {
      width: 100%;
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
    }

    .content-container {
      .title-container {
        width: 100%;
        padding: 0.5rem;

        h3 {
          font-size: 1.5rem;
          font-weight: bold;
        }

        p {
          margin-top: 1rem;
          font-size: 0.9rem;
        }
      }

      .metadata-container {
        display: flex;
        font-size: 0.75rem;
        justify-content: space-between;
        width: 100%;
        margin-top: 1rem;
        background-color: #e2e8f0;
        padding: 0.5rem 2rem;

        .field {
          display: flex;

          .title {
            font-weight: bold;
            margin-right: 0.2rem;
          }
        }
      }
    }
  }
`;

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieDetailsAction(id));
  }, [dispatch, id]);

  const isLoading = useSelector(getMovieDetailsLoading);
  const movieDetails = useSelector(getMovieDetails);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <MovieDetailsContainer>
      <div className="movie-card-container">
        {isNil(movieDetails.poster_path) ? (
          <div className="no-image-container">
            <FontAwesomeIcon icon={faImage} color="black" />
            <span>No image available</span>
          </div>
        ) : (
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
        )}
        <div className="content-container">
          <div className="title-container">
            <h3>{movieDetails.title}</h3>
            <p>{movieDetails.overview}</p>
          </div>
          <div className="metadata-container">
            <div className="field">
              <span className="title">Language: </span>
              <span className="text">{movieDetails.original_language}</span>
            </div>
            <div className="field">
              <div className="title">Vote Average: </div>
              <div className="text">{movieDetails.vote_average}</div>
            </div>
            <div className="field">
              <div className="title">Release Date: </div>
              <div className="text">{movieDetails.release_date}</div>
            </div>
          </div>
        </div>
      </div>
    </MovieDetailsContainer>
  );
};

export default MovieDetails;
