/**
 * Created by conalmclaughlin on 02/01/2017.
 */
import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
const $ = require('jquery');
import banner from './images/logo.svg';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="header-container">
                <div className="app-header">
                    <img src={banner} className="app-logo" alt="" />
                </div>
                <div className="mobile-nav">
                    <span className="mob-nav-btn">Menu</span>
                </div>
                <nav className="navbar navbar dolphins-navbar">
                    <div className="container-fluid">
                        <ul className="nav navbar-nav">
                            <li className="menu-item"><Link to="/">Home</Link></li>
                            <li className="menu-item"><Link to="/gallery">Gallery</Link></li>
                            <li className="menu-item"><Link to="/events">What's Happening?</Link></li>
                            <li className="menu-item"><Link to="/about">About Us</Link></li>
                            <li className="menu-item"><Link to="/contact">Want to dive?</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;