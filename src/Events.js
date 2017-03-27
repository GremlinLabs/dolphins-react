/**
 * Created by conalmclaughlin on 03/01/2017.
 */
import React, { Component } from 'react';
import poster from './images/contest_poster.jpg';
const $ = require('jquery');

class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="events-content container-fluid">
                <div className="events-content">
                    <div className="event-title">
                        <h3>The Aqua Factor 2017</h3>
                        <h4>Underwater Photography & Videography Contest</h4>
                    </div>
                    <div className="event-main-image">
                        <img id="contest-poster" src={poster}/>
                    </div>
                    <div className="event-info">
                        <p>
                            Online Underwater Video and Photo Contest! Share your happy moments with the rest of the world!
                            Everyone is welcome!
                            For more information and free registration contact <a href="mailto:theaquafactorteam@gmail.com">The Aqua Factor Team</a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Events;