/**
 * Created by conalmclaughlin on 03/01/2017.
 */
import React, { Component } from 'react';
import nic from './images/portrait-nic.jpg';
import jen from './images/portrait-jen.jpg';
import simon from './images/portrait-simon.jpg';
import mal from './images/portrait-mal.jpg';
import conal from './images/portrait-conal.jpg';
import jordan from './images/portrait-jordan.jpg';
import gt from './images/portrait-gt.jpg';

const $ = require('jquery');

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="about-content container-fluid">
                <div className="row">
                    <div className="row member-row">
                        <div className="member-list seven-cols">
                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12"><span><img src={nic} alt="Nicolas Lane"/></span></div>
                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12"><span><img src={mal} alt="Mal Gribbon"/></span></div>
                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12"><span><img src={jen} alt="Jenelle Carr"/></span></div>
                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12"><span><img src={gt} alt="Gintaras Jakutis"/></span></div>
                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12"><span><img src={jordan} alt="The One & Only"/></span></div>
                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12"><span><img src={conal} alt="Conal McLaughlin"/></span></div>
                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12"><span><img src={simon} alt="Simon Wood"/></span></div>
                        </div>
                    </div>
                    <div className="row member-row">
                        <div className="member-container">
                            <div className="container-fluid member-list">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" >
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
        )
    }
}

export default About;