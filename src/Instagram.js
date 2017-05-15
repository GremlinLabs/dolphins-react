/**
 * Created by conalmclaughlin on 21/04/2017.
 */
import React, { Component } from 'react';
import Instafeed from 'instafeed.js';
const $ = require('jquery');

class Instagram extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.initInstaFeed();
    }

    initInstaFeed() {
        var feed = new Instafeed({
            get: 'tagged',
            tagName: 'awesome',
            clientId: '6ee1f9546b9448aca24873409b6f1269',
            accessToken: '55d02d6594d04f5b8bb5d2c7e0a78c98'
        });
        feed.run();
    };

    render() {
        return(
            <div id="instafeed"/>
        );
    }
}export default Instagram;