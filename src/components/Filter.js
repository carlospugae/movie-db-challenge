import React from 'react';
import styled from 'styled-components';

import FilterButton from './FilterButton';

const FilterContainer = styled.div`
  display: flex;
  align-items: center;

  .buttons-container {
    background-color: #f7fafc;
    padding: 0.25rem;
    border: 1px solid #e2e8f0;
    border-radius: 5px;
    margin-left: 1rem;
  }
`;

const Filter = () => (
  <FilterContainer>
    <span>Filter by rating: </span>
    <div className="buttons-container">
      <FilterButton value={2} />
      <FilterButton value={4} />
      <FilterButton value={6} />
      <FilterButton value={8} />
      <FilterButton value={10} />
    </div>
  </FilterContainer>
);

export default Filter;
