import React from 'react';
import {Link} from 'react-router-dom';
import {
    Container,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import config from '../../config';

import './styles/Navbar.css'

const Navigation = () => {
    const navItem = ({name, path}) => {
      return (
        <li>
          <Link to={path}>{name}</Link>
        </li>
      )
    };

    return (
      <Container>
        <nav className="main-nav">
          <ul>
            {config.pages.map(navItem)}
          </ul>        
        </nav>
      </Container>
    );
};

export default Navigation;