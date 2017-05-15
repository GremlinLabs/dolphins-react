import React, { Component } from 'react';
import Header from './Header';
import MobileMenu from './MobileMenu';
import Footer from './Footer';
import Instagram from './Instagram';
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
      <div>
          <Header/>
          <div className="content">
              {this.props.children}
          </div>
          <Instagram/>
          <Footer/>
          <MobileMenu/>
      </div>
    );
  }
}

export default App;
