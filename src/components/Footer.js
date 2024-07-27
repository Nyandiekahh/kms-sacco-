import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Kufanyana Mbaya Sacco. All Rights Reserved.</p>
      <p>Designed & Developed by Gravity Devs</p>
    </FooterContainer>
  );
};

export default Footer;
