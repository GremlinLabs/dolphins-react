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

    componentDidMount() {


    }

    render() {
        return (
            <div className="home-content container-fluid">
                <div className="main-title">
                    <span>Dolphins</span>
                    <span>Sub Aqua Club</span>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="content-wrapper">
                            <p>
                                Dolphins S.A.C is a scuba diving club based in Belfast, Northern Ireland. We are an active and well equipped club, training divers through a series of internationally recognised qualifications and skill development courses.
                                Our club is a branch of the British Sub Aqua Club, the worlds largest diving club.
                            </p>
                            <iframe id="main-video" src="https://player.vimeo.com/video/197543527" width="640" height="360" frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="content-wrapper">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
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
                <div className="row">
                    <p>  Like all BSAC branches, it is run entirely by volunteers as a not-for-profit organisation.
                        We organise dives for members locally around Strangford Lough (an area of outstanding natural beauty), all around the coast of Ireland, as well as overseas trips.
                        Whether you are an experienced diver or new to the sport - Dolphin SAC would be delighted to meet you!
                    </p>
                </div>
            </div>
        )
    }
}


export default Home;