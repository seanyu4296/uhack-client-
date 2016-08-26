import React from 'react';
import { Route, IndexRoute } from 'react-router';


import App from './components/App';
import Homepage from './components/HomePage';
import Login from './components/Login';

import NotFoundPage from './components/NotFoundPage';



export default (
    <Route path="/" component ={App} >
        <IndexRoute component= {Homepage} />
        <Route path= "/login" component={Login} />
        <Route path= "*"  component= {NotFoundPage}></Route>
    </Route>
)