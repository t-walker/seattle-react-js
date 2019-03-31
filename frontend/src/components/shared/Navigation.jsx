import React from 'react';

import {
  Link
} from 'react-router-dom';

import {
    Container,
} from 'reactstrap';

import config from '../../config';

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
        <nav className="navigation">
          <ul>
            {config.pages.map(navItem)}
          </ul>        
        </nav>
      </Container>
    );
};

export default Navigation;