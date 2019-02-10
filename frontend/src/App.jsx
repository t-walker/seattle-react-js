import React, { Component } from 'react';
import {Container} from 'reactstrap';
import Navigation from './components/shared/Navigation';
import Header from './components/shared/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Navigation />
      </div>
    )
  }
}

export default App;
