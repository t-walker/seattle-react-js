import React from 'react';

import {
    Container,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import './styles/Navbar.css'

const Navigation = () => {
    const paths = [
      {name: 'Home', path: '/'},
      {name: 'Events', path: '/events'},
      {name: 'Speak', path: '/speak'},
      {name: 'Host', path: '/host'},
      {name: 'Past Events', path: '/past-events'},
      {name: 'Code of Conduct', path: '/code-of-conduct'},
    ]

    const navItem = ({name, path}) => {
      return (
        <li><a href={path}>{name}</a></li>
      )
    };

    return (
      <Container>
        <nav className="main-nav">
          <ul>
            {paths.map(navItem)}
          </ul>        
        </nav>
      </Container>
    );
};

export default Navigation;