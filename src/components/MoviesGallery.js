import React from 'react';
import styled from 'styled-components';
import { isEmpty } from 'ramda';
import PropTypes from 'prop-types';

import Card from './Card';

const MoviesGalleryContainer = styled.div`
  display: flex;
  width: 50%;
  flex: 1;

  .grid-container {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 1.25rem 1.25rem;
  }

  .no-results-container {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
  }
`;

const MoviesGallery = ({ data }) => (
  <MoviesGalleryContainer>
    {isEmpty(data) ? (
      <div className="no-results-container">No results</div>
    ) : (
      <div className="grid-container">
        {data.map((movie) => (
          <Card {...movie} />
        ))}
      </div>
    )}
  </MoviesGalleryContainer>
);

MoviesGallery.propTypes = {
  data: PropTypes.array.isRequired,
};

export default MoviesGallery;
