import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'; 

class Nav extends Component {
  render() {

    return (
        <nav>
            <ul>
              <li><NavLink exact activeClassName={"active"} to='/'>Home</NavLink></li>
              <li><NavLink exact activeStyle={{color:'green'}} to='/dashboard'>Dashboard</NavLink></li>
              <li><NavLink exact activeStyle={{color:'green'}} to='/test'>Test</NavLink></li>
            </ul>
        </nav>
    );
  }
}

export default Nav;
