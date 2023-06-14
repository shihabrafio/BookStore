import React from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import styled from 'styled-components';

const Navbar = () => (
  <Nav>
    <h1>Bookstore CMS</h1>
    <ul>
      <li>
        <Link to="/" className="link">
          Books
        </Link>
      </li>
      <li>
        <Link to="/categories" className="link">
          {' '}
          Categories
          {' '}
        </Link>
      </li>
    </ul>
    <div className="profile">
      <CgProfile className="icon" />
    </div>
  </Nav>
);

export default Navbar;

const Nav = styled.nav`
  display: flex;

  .h1 {
  }

  ul {
    display: flex;
    align-content: space-between;
    list-style: none;
    width: 22%;
    justify-content: space-evenly;
  }

  .link {
    text-decoration: none;
    text-align: center;
  }
`;
