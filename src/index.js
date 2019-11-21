import React from 'react';
import ReactDOM from 'react-dom';

import './css/side-menu.css';
import './css/pure-min.css';
import './css/index.css';

import App from './App';
//import Contato from './views/Contato';
import Visitante from './views/Visitante';
import Morador from './views/Morador'
import Home from './views/Home';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
    <Router>
        <App>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/visitante' component={Visitante} />
                <Route path='/morador' component={Morador} />
                <Route path='/contato' component={Home} />
            </Switch>
        </App>
    </Router>)
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
