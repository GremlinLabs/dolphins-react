/**
 * Created by conalmclaughlin on 02/01/2017.
 */
import React, { Component } from 'react';
import footerbackground from './images/footer-background.png';
const $ = require('jquery');

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="footer-background-container">
                <div className="footer-bar">
                    <ul className="footer-menu">
                        <li className="footer-menu-item">
                            <img src="" alt="fb" />
                        </li>
                        <li className="footer-menu-item">
                            <img src="" alt="insta" />
                        </li>
                        <li className="footer-menu-item">
                            <img src="" alt="" />
                        </li>
                        <li className="footer-menu-item">
                            <img src="" alt="fb" />
                        </li>
                        <li className="footer-menu-item">
                            <img src="" alt="fb" />
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer;