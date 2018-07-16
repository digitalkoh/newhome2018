import React, { Component } from 'react';
import Logo from './Logo';
import Nav from './Nav';
import Message from './Message';
import Profile from './Profile';
import Search from './Search';

class HeaderBar extends Component {
  render() {

    return (
        <header>
            <div>
                <Logo />
                <Nav />
                <Message />
                <Profile />
                <Search />
            </div>
        </header>
    );
  }
}

export default HeaderBar;
