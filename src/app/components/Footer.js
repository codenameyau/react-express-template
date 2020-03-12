import React from 'react';
import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 100%;
  padding: 1.5em 1em;
  background: #393b40;
  text-align: center;

  a {
    color: #eee;
  }
`;

export const Footer = props => {
  return (
    <FooterContainer>
      <a href="https://github.com/codenameyau/react-express-template">
        https://github.com/codenameyau/react-express-template
      </a>
    </FooterContainer>
  );
};
