import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #0056b3;
  padding: 1rem;
  color: white;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <NavLink to="/">Kufanyana Mbaya Sacco</NavLink>
        <div>
          {/* <NavLink to="/about">About</NavLink> */}
          <NavLink to="/our-story">Our Story</NavLink>
          {/* <NavLink to="/membership">Membership</NavLink> */}
          {/* <NavLink to="/savings-and-loans">Savings & Loans</NavLink> */}
          <NavLink to="/news">News</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/login">Login</NavLink>
          {/* <NavLink to="/terms">Terms</NavLink> */}
        </div>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;