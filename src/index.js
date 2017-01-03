import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
//import { default as Router, Route } from 'react-router'
import App from './App';
import './index.css';

ReactDOM.render(
    <div>
        <Router history={browserHistory}>
            <Route path="/" component={App}>

            </Route>
        </Router>
    </div>,
    document.getElementById('root')
);
