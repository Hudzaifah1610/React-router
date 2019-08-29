import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Home, About, Profile} from '../container';
import Navbar from '../components/Navbar';

function Routes(){
    return(
        <Router>
            <Navbar/>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/profile" component={Profile} />
        </Router>
    );
}
export default Routes;