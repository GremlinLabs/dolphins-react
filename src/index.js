import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, IndexLink, Link, browserHistory } from 'react-router';
import App from './App';
import Home from './Home';
import './index.css';

ReactDOM.render(
    <div>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
            </Route>
        </Router>
    </div>,
    document.getElementById('root')
);
