import React, { Component } from 'react';
import './TopContainer.scss';
import Header from '../../components/Header/Header';
import MenuBar from '../../components/MenuBar/MenuBar';

class TopContainer extends Component {
  render() {
    return (
      <div className="TopContainer">
        <Header />
        <MenuBar />
      </div>
    );
  }
}

export default TopContainer;