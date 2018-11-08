import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <NavLink exact to="/" className="HeaderTitle">
          2NHWA.LOG
        </NavLink>
      </div>
    );
  }
}

export default Header;