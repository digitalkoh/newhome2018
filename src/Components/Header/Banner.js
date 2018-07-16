import React, { Component } from 'react';
import logo from '../../img/logo.svg';


class Banner extends Component {
  render() {

    return (
        <div className="App-banner">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Next Gen</h1>
        </div>
    );
  }
}

export default Banner;
