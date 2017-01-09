/**
 * Created by conalmclaughlin on 02/01/2017.
 */
import React, { Component } from 'react';
const $ = require('jquery');

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="home-content container-fluid">
                <div className="jumbotron">

                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="content-wrapper">

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
        )
    }
}

export default Home;