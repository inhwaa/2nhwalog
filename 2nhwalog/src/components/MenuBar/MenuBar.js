import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './MenuBar.scss';

class MenuBar extends Component {
  render() {
    return (
      <div className="MenuContainer">
        <NavLink to="/lifelog" className="Menu" activeClassName="ActiveMenu">
          LIFE.LOG
        </NavLink>
        <NavLink to="/devlog" className="Menu" activeClassName="ActiveMenu">
          DEV.LOG
        </NavLink>
      </div>
    );
  }
}

export default MenuBar;