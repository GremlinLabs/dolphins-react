import React, { Component } from 'react';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import './App.css';
const $ = require('jquery');

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            home: 'active',
            gallery: 'inactive',
            events: 'inactive',
            about: 'inactive',
            contact: 'inactive'
        };
    }

  render() {
    return (
      <div className="page-wrapper">
          <Header/>
          <div className="content">
              {this.props.children}
          </div>
          <Footer/>
      </div>
    );
  }
}

export default App;
