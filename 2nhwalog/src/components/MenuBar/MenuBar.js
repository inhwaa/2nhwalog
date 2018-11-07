import React, { Component } from 'react';
import './MenuBar.scss';
import Menu from '../Menu/Menu';

class MenuBar extends Component {
  render() {
    return (
      <div className="MenuContainer">
        <Menu>LIFE.LOG</Menu>
        <Menu>DEV.LOG</Menu>
      </div>
    );
  }
}

export default MenuBar;