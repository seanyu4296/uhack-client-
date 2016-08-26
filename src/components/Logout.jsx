import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import auth from '../api/authApi';
import * as authActions from '../actions/authActions';
import toastr from 'toastr';


class Logout extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
        
        }
        this.logout = this.logout.bind(this);
    };

    logout() {
        //e.preventDefault();
        this.props.actions.logout(localStorage.token)
            .then(()=> {
                this.context.router.replace('/login');
            })
            .catch((err) => {
                toastr.error(`${err}`);
                console.log(err);
            })
    }
    
    componentWillMount() {
        this.logout();
    }
    
    render() {
        return (
            <div>
                <h1>LOGOUT</h1>

            </div>
        );
    }
}

Logout.contextTypes = {
    router: PropTypes.object
}

function mapStateToProps(state, ownProps) {
    return {
        
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions : bindActionCreators(authActions, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Logout);