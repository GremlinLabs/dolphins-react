/**
 * Created by conalmclaughlin on 02/01/2017.
 */
import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
const $ = require('jquery');
import banner from './images/logo.svg';

class Header_new extends Component {
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
                <div id="navigation-container">
                    <div id="menu-container">
                        <div id="menu">
                            <div className="menu-header_menu-container">
                                <ul id="menu-header_menu" className="menu">
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-268"><Link to="/">Home</Link></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2181"><Link to="/gallery">Gallery</Link></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-262"><Link to="/events">What's Happening?</Link></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-260"><Link to="/about">About Us</Link></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1507"><Link to="/contact">Want to dive?</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clear" />
            </div>
        )
    }
}

export default Header_new;