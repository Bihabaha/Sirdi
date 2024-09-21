import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #004aad; /* Blue Sky color */
  color: white;
`;

const NavLinks = styled.div`
  a {
    margin: 0 15px;
    color: white;
    text-decoration: none;
    font-weight: bold;
    &:hover {
      text-decoration: underline;
    }
  }
`;

function Header() {
  return (
    <Navbar>
      <h1>Sirdi</h1>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/prices">Prices</Link>
        <Link to="/contact">Contact</Link>
      </NavLinks>
    </Navbar>
  );
}

export default Header;
