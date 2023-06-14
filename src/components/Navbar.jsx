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
  background-color: aliceblue;
  h1 {
    margin-left: 2%;
  }

  ul {
    display: flex;
    list-style: none;
    width: 22%;
    justify-content: flex-start;
    margin-left: 2%;

    li {
      padding-top: 1%;
      padding-left: 15%;

      .link {
        text-decoration: none;
        font-size: 20px;
        color: #367bb8;
      }}}
  .profile {
    margin-left: 57%;
    margin-top: 1%;
    
    .icon {
        width: auto;
        height: 2.313rem;
        color: #0090ff;
  }}
`;
