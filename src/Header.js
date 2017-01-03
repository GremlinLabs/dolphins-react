/**
 * Created by conalmclaughlin on 02/01/2017.
 */
import React, { Component } from 'react';
const $ = require('jquery');
import logo from './dolphins-logo.png';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="header-container">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <nav className="navbar navbar-inverse dolphins-navbar">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">Doplins SAC</a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#" onClick=''>Home</a></li>
                            <li><a href="/gallery" onClick=''>Gallery</a></li>
                            <li><a href="/events" onClick=''>Events</a></li>
                            <li><a href="/about" onClick=''>About</a></li>
                            <li><a href="/contact" onClick=''>Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;