import React from 'react';
import styled from 'styled-components';
import { BeatLoader } from 'react-spinners';

const LoadingContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
`;

const Loading = () => (
  <LoadingContainer>
    <BeatLoader color="#4c51bf" size={'1.5rem'}></BeatLoader>
  </LoadingContainer>
);

export default Loading;
