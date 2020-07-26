import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-size: 0.75rem;
  background-color: #e2e8f0;
  color: #718096;
`;

const Footer = () => (
  <FooterContainer>
    <div className="content-container">
      <span>Carlos Puga 2020. All rights reserved.</span>
    </div>
  </FooterContainer>
);

export default Footer;
