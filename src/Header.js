/**
 * Created by conalmclaughlin on 02/01/2017.
 */
import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import logo from './images/dolphins-logo.png';

const $ = require('jquery');

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        $(this.refs.burger).on("click touch", function() {
            $("#mobile-menu-container").addClass("mobile-menu-container-full");
        });
    }

    render() {
        return (
            <div className="header-container">
                <div className="app-logo">

                </div>
                <div className="app-header">
                    <div className="title-container">
                        <h2></h2>
                    </div>

                <nav>
                    <div className="mobile-nav">
                        <span ref="burger" id="mobile-menu-burger" className="mob-nav-btn">Menu</span>
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

export default Header;