import React, { Component } from 'react';
import './App.scss';
import TopContainer from './containers/TopContainer/TopContainer';
import MainContainer from './containers/MainContainer/MainContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopContainer />
        <MainContainer />
      </div>
    );
  }
}

export default App;