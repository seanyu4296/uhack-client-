// Set up your root reducer here...
import { combineReducers } from 'redux';
import loggedIn from './authReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
    loggedIn : loggedIn,
    routing : routerReducer
})


 export default rootReducer;