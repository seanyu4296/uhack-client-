import React, {Component, PropTypes} from 'react';
import Header from './common/Header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from '../actions/authActions';
import sticky from 'jquery-sticky';
var $ = require('jquery');

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            loggedIn : this.props.loggedIn
        }

        this.logout = this.logout.bind(this);
        this.navBarStick = this.navBarStick.bind(this);
    };

   componentWillReceiveProps (nextProps) {
        if(this.props.loggedIn !== nextProps.loggedIn) {
            this.setState({  loggedIn : nextProps.loggedIn})
        }
    }

    logout(e) {
        e.preventDefault();
        this.props.actions.logout(localStorage.token)
            .then(()=> {
                this.context.router.replace('/login');
            })
            .catch((err) => {
                
                console.log(err);
            })
    }

    navBarStick() {
        $("#appbar").sticky({
            responsiveWidth: true
        });
        $("#appbar").on('sticky-start', function(){
		    
		});
		$(".navbar").on('sticky-end', function(){
           
		});
    }

    componentDidMount() {
        this.navBarStick();
    }



    render() {
        
        return (
            <div>
                {this.props.loggedIn ? <Header logout= {this.logout}loggedIn = {this.props.loggedIn} /> : "" }
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children : PropTypes.object.isRequired,
    //loading : PropTypes.bool.isRequired
};

App.contextTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(App);