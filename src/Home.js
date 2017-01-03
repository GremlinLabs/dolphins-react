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
        )
    }
}

export default Home;