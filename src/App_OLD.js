import React, { Component } from 'react';
import logo from './img/logo.svg';
import './stylesheets/App.css';
import Cards from './Components/Cards';
import SlidePane from './Components/SlidePane';
import uuid from 'uuid';

import Modal from 'react-modal';


class App extends Component {
  constructor(){
    super();
    this.state = {
      cards: []
    }
  }

  componentDidMount() {
      Modal.setAppElement(this.el);
  }

  componentWillMount(){
    this.setState({cards: [
      {
        id: uuid.v4(),
        title: 'Retirement',
        text1: '$150,000.10'
      },
      {
        id: uuid.v4(),
        title: 'Wellness',
        text1: '80% Improvement'
      },
      {
        id: uuid.v4(),
        title: 'Time Off',
        text1: '50 hours of unused PTO'
      }
    ]})
  }

  render() {
    return (
      <div className="App" ref={ref => this.el = ref}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Next Gen</h1>
        </header>

        <SlidePane />

        <main>
          <Cards cards={this.state.cards} />
        </main>
      </div>
    );
  }
}

export default App;
