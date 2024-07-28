// src/components/Logo.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logoImage from '../assets/images/logo.png'; // Update this path if necessary

const LogoWrapper = styled(Link)`
  display: inline-block;
  padding: 10px;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`;

const LogoImage = styled.img`
  width: 150px;
  height: auto;
`;

const Logo = () => {
  return (
    <LogoWrapper to="/">
      <LogoImage src={logoImage} alt="Kufanyana Mbaya Sacco Logo" />
    </LogoWrapper>
  );
};

export default Logo;
