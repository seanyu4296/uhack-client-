import authApi from '../api/authApi';
//import {beginAjaxCall, ajaxStatusError} from './ajaxStatusActions';
import * as types from '../constants/actionTypes';

export function loginSuccess(loggedIn) {
    return { type: types.LOGIN_SUCCESS, loggedIn : loggedIn};
}

export function logoutSuccess(loggedIn) {
    return { type: types.LOGOUT_SUCCESS, loggedIn : loggedIn};
}


export function login(userInput, cb) {
    return function(dispatch) {
        //dispatch(beginAjaxCall());
        return authApi.login(userInput, cb).then(loggedIn => {
            console.log(loggedIn);
            dispatch(loginSuccess(loggedIn));
            return "Login success (this is a return for login thunk promise from api promise)";
        }).catch(error => {
            //dispatch(ajaxStatusError());
            throw(error);
        });
    };
}

export function getAuth(sessionToken) {
    return function(dispatch) {
        //dispatch(beginAjaxCall());
        return authApi.getAuth(sessionToken).then(loggedIn => {
            //console.log(loggedIn);
            dispatch(loginSuccess(loggedIn));
        }).catch(error => {
            //dispatch(ajaxStatusError());
            throw(error);
        });
    };
}


export function logout(sessionToken) {
    return function(dispatch) {
        //dispatch(beginAjaxCall());
        return authApi.logout(sessionToken).then(loggedIn => {
            dispatch(logoutSuccess(loggedIn));
        })
        .catch(error => {
            //dispatch(ajaxStatusError());
            throw(error);
        });
    };
}