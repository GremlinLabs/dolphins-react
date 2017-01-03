import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Bubbles from './Bubbles';
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
      <div className="App">
          <Header />
          <div className="content">
           <div className="dolphins-content container-fluid">
            <div className="row">
                <div className="col-md-8">
                    <div className="content-wrapper">
                        <iframe src="https://player.vimeo.com/video/197543527" width="640" height="360" frameBorder="0" allowFullScreen></iframe>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="content-wrapper">

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="content-wrapper">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="content-wrapper">

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="content-wrapper">

                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
