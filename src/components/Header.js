import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: #e2e8f0;
  color: #4c51bf;
  
  a {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const Header = () => (
  <HeaderContainer>
    <div className="content-container">
      <Link to="/">Movie Database Explorer</Link>
    </div>
  </HeaderContainer>
);

export default Header;
