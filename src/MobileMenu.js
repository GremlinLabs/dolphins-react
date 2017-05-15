/**
 * Created by conalmclaughlin on 15/05/2017.
 */
import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
const $ = require('jquery');

class MobileMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        $(this.refs.exit).on("click touch", function() {
            $("#mobile-menu-container").removeClass("mobile-menu-container-full");
        });
    }

    render() {
        return (
            <div id="mobile-menu-container">
                <div className="mobile-menu-background"/>
                <div className="mobile-menu">
                    <div className="mobile-menu-holder">
                        <div className="mobile-menu-header">
                            <div ref="exit" className="icon">
                                <div className="image-container"/>
                            </div>
                            <a className="title" href="/">
                                <span>D.S.A.C</span>
                            </a>
                        </div>
                        <div className="mobile-menu-content">
                            <span>
                                <nav className="mobile-menu-nav">
                                    <ul className="mobile-nav-list">
                                        <span>
                                            <li className="mobile-nav-item">
                                                <Link className="mobile-nav-link" to="/gallery" activeClassName="nav-active">Gallery</Link>
                                            </li>
                                            <li className="mobile-nav-item">
                                                <Link className="mobile-nav-link" to="/events" activeClassName="nav-active">What's Happening?</Link>
                                            </li>
                                            <li className="mobile-nav-item">
                                                <Link className="mobile-nav-link" to="/about" activeClassName="nav-active">About Us</Link>
                                            </li>
                                            <li className="mobile-nav-item">
                                                <Link className="mobile-nav-link" to="/contact" activeClassName="nav-active">Want to dive?</Link>
                                            </li>
                                        </span>
                                    </ul>
                                </nav>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MobileMenu;