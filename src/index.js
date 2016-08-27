// Set up your application entry point here...

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue500, blue700} from 'material-ui/styles/colors';

import routes from './routes';
import configureStore from './store/configureStore';
require('./favicon.ico');
import './styles/styles.css';

import { Route, IndexRoute } from 'react-router';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import App from './components/App';
import Homepage from './components/HomePage';
import Login from './components/Login';
import Logout from './components/Logout';

import NotFoundPage from './components/NotFoundPage';

import { getAuth } from './actions/authActions';



injectTapEventPlugin();


const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
const muiTheme = getMuiTheme({
    palette: {
        primary1Color: blue500,
        primary2Color: blue700
  }
});

function app() {

    function requireAuth(nextState, replace) {
        console.log(store.getState());
        let {loggedIn} = store.getState();
        /*console.log(loggedIn);*/
        if(!loggedIn) {
            replace({
                pathname: '/login',
                state: { nextPathname : nextState.location.pathname }
            })
        }
    }



    render(
        <MuiThemeProvider muiTheme={muiTheme} >
            <Provider store={store} >
                <Router history={history} >
                    <Route path="/" component ={App} >
                        <IndexRoute component= {Homepage} onEnter={requireAuth}/>
                        <Route path= "/login" component={Login}  />
                        <Route path="/logout" component={Logout}></Route>
                        <Route path= "*"  component= {NotFoundPage}></Route>
                        
                    </Route>
                </Router>
            </Provider>
        </MuiThemeProvider>
    , document.getElementById('app'));
}

if(localStorage.token) {
    store.dispatch(getAuth(localStorage.token))
        .then(() => {
            console.log("LOCALSTORAGE TOKEN IS VALID");
            app();
        })
        .catch((err) => {
            console.log(err.message);
            app();
        });

} else {
    app();
}


