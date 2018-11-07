import React, { Component } from 'react';
import './Menu.scss';

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        {this.props.children}
      </div>
    );
  }
}

export default Menu;