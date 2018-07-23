import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'; 
import Route from 'react-router-dom/Route';
// import uuid from 'uuid';
// import $ from 'jquery';

import Modal from 'react-modal';
import data from './data/cardContent.json';

import './stylesheets/App.css';
import Cards from './Components/Card/Cards';
import Related from './Components/Related/Related';
import SlidePane from './Components/SlidePane';
import HeaderBar from './Components/Header/HeaderBar';
import Banner from './Components/Header/Banner';
import Footer from './Components/Footer/Footer';

let contentStyle = {
  position: 'absolute',
  margin: 'auto',
  width: '100%',
  transform: 'translate(0%, -6%)'
}

class App extends Component {

  constructor(){
    super();
    this.state = {
      cards: [],
      cardsdata: []
    }
  }

  getCardContent(){
    this.setState({cardsdata: data})
  }

  componentWillMount(){
    this.getCardContent();

    // More ways to fetch external data...
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(res => res.json())
    //   .then(data => console.log(data));

  }

  componentDidMount() {
    Modal.setAppElement(this.el);
}

  render() {
    return (
      <Router>
        <div className="App" id="wrapper" ref={ref => this.el = ref}>

          {/* <Route path='/' component={Nav} /> */}

          <Route path='/' component={HeaderBar} />

          <Route exact strict path='/dashboard' render={
            ()=> {
              return(
                <div>
                  <main>

                    <Banner />

                    <div className="content" style={contentStyle}>

                      <Cards cardsdata={this.state.cardsdata} />

                      <div className="Related-block"><Related /></div>
                      
                      <Footer />
                      
                    </div>

                  </main>
                </div>
              )
            }
          } />

          <Route exact strict path='/test' component={SlidePane} />
        </div>
      </Router>
    );
  }
}

export default App;
