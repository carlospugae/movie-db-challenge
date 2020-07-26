import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { isNil } from 'ramda';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const CardContainer = styled.div`
  max-height: 340px;
  display: flex;
  border-radius: 10px;
  background-color: #e2e8f0;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

  a {
    flex: 1;

    img {
      height: 100%;
      border-radius: 10px;
    }

    .no-image-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: 1rem;

      svg {
        font-size: 3rem;
        color: #4c51bf;
      }
    }
  }
`;

const Card = ({ id, title, poster_path }) => (
  <CardContainer>
    <Link to={`/details/${id}`} title={title}>
      {isNil(poster_path) ? (
        <div className="no-image-container">
          <FontAwesomeIcon icon={faImage} />
          <span>{title}</span>
        </div>
      ) : (
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
      )}
    </Link>
  </CardContainer>
);

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string,
};

export default Card;
