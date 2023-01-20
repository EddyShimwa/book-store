import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <div>
        <h1>Bookstore CMS</h1>
      </div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
          {' '}
        </li>
        <li>
          <NavLink to="/categories">Categories</NavLink>
          {' '}
        </li>
      </ul>
      <div> Owner</div>
    </nav>
  </header>
);

export default Header;
