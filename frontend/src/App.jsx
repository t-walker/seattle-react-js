import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import {
  Container,
} from 'reactstrap';

import Navigation from './components/shared/Navigation';
import Header from './components/shared/Header';

import config from './config';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navigation />
        <Container className="content">
          <Switch>
            {config.pages.map((page) => {
              return <Route exact path={page.path} component={page.component} />
            })}
          </Switch>
        </Container>
      </div>
    )
  }
}

export default App;
