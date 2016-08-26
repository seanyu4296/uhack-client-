import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function authReducer(state = initialState.loggedIn, action) {
    switch(action.type) {
        case types.LOGIN_SUCCESS :
            return action.loggedIn;
        case types.LOGOUT_SUCCESS :
            //console.log(action.loggedIn, "LOGOUT SUCCESS ____");
            return action.loggedIn;
        default:
            return state;
    }
}