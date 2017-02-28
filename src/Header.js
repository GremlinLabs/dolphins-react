/**
 * Created by conalmclaughlin on 02/01/2017.
 */
import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
const $ = require('jquery');
import logo from './images/dolphins-logo.png';

class Header_new extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="header-container">
                <div className="app-header">
                    <img src={logo} className="app-logo" alt="" />
                    <div className="title-container">
                        <h2></h2>
                    </div>

                <nav>
                    <div className="mobile-nav">
                        <span className="mob-nav-btn">Menu</span>
                    </div>
                    <div id="navigation-container">
                        <div id="menu-container">
                            <ul id="menu-header_menu" className="menu">
                                <li className="menu-item"><IndexLink to="/" activeClassName="nav-active">Home</IndexLink></li>
                                <li className="menu-item"><Link to="/gallery" activeClassName="nav-active">Gallery</Link></li>
                                <li className="menu-item"><Link to="/events" activeClassName="nav-active">What's Happening?</Link></li>
                                <li className="menu-item"><Link to="/about" activeClassName="nav-active">About Us</Link></li>
                                <li className="menu-item"><Link to="/contact" activeClassName="nav-active">Want to dive?</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                    </div>
                <div className="clear" />
            </div>
        )
    }
}

export default Header_new;