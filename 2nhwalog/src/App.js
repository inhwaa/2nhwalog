import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';

import TopContainer from './containers/TopContainer/TopContainer';
import MainContainer from './containers/MainContainer/MainContainer';

import Home from './components/Home/Home';
import Lifelog from './components/Lifelog/Lifelog';
import Devlog from './components/Devlog/Devlog';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <TopContainer />
          <MainContainer>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/lifelog" component={Lifelog} />
              <Route path="/devlog" component={Devlog} />
            </Switch>
          </MainContainer>
        </div>
      </Router>
    );
  }
}

export default App;