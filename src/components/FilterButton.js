import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faAltStar } from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';

import { getFilterRating } from 'reducers/appReducer';
import { setFilterRating } from 'actions';

const Button = styled.button`
  margin: 0 0.25rem;
  color: gold;
`;

const FilterButton = ({ value }) => {
  const dispatch = useDispatch();

  const selectedFilter = useSelector(getFilterRating);

  const filterHandler = () => {
    dispatch(setFilterRating(value));
  };

  return (
    <Button onClick={filterHandler}>
      {selectedFilter >= value ? (
        <FontAwesomeIcon icon={faStar} />
      ) : (
        <FontAwesomeIcon icon={faAltStar} />
      )}
    </Button>
  );
};

FilterButton.propTypes = {
  value: PropTypes.number.isRequired,
};

export default FilterButton;
