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
  background-color: white;

  h1 {
    margin-left: 6%;
    color: #0290ff;
    width: 15%;
    margin-top: 1.4%;
    font-size: 1.875rem;
  }

  ul {
    display: flex;
    list-style: none;
    width: 13%;
    justify-content: flex-start;
    margin-left: 0%;
    padding-left: 0%;

    li {
      padding-top: 9%;
      padding-left: 15%;

      .link {
        text-decoration: none;
        font-size: 0.813 rem;
        color: #121212;
        letter-spacing: 1.9px;
        
      }}}
  .profile {
    margin-left: 57%;
margin-top: 1.5%;
    
    .icon {
        width: auto;
        height: 2.313rem;
        color: #0090ff;
  }}
`;
