import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, IndexLink, Link, browserHistory } from 'react-router';
import App from './App';
import Home from './Home';
import Gallery from './Gallery';
import Events from './Events';
import About from './About';
import Contact from './Contact';
import './index.css';

ReactDOM.render(
    <div>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="gallery" component={Gallery} />
                <Route path="events" component={Events} />
                <Route path="about" component={About} />
                <Route path="contact" component={Contact} />
            </Route>
        </Router>
    </div>,
    document.getElementById('root')
);
