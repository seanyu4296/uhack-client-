import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from '../actions/authActions';
import moment from 'moment';

//import 'react-big-calendar/lib/css/react-big-calendar.css';

var $ = require('jquery');



class MainApp extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            
        }
    };
    render() {
        return (
            <div>
                <h1>Main App</h1>
            </div>
        );
    }
}


MainApp.contextTypes = {
    router: PropTypes.object
}


function mapStateToProps(state, ownProps) {
    return {
        loggedIn : state.loggedIn
    }
}

function mapDispatchToProps(dispatch) {
 
    return {
        actions: bindActionCreators(authActions, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainApp);