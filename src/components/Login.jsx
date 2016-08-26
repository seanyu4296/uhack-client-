import React, {PropTypes, Component} from 'react';

import { Input } from 'react-bootstrap';
import TextInput from './common/TextInput';
import RaisedButton from 'material-ui/RaisedButton';

import * as authActions from '../actions/authActions';
import {connect} from 'react-redux';
import auth from '../api/authApi';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';


class Login extends Component {
    constructor(props, context) {
        super(props, context);
        
        this.state = {
            userInput : {
                username: '',
                password: ''
            },
            err : ''
        };
        this.updateUserInput = this.updateUserInput.bind(this);
        this.handleSignIn = this.handleSignIn.bind(this);
        this.logout = this.logout.bind(this);
    };

    componentDidMount() {
        
    }

   /* componentWillReceiveProps(nextProps) {
        if(nextProps.loggedIn) {
            this.context.router.replace('/');
        }
    }
    

    login() {
        if(this.props.loggedIn) {
            this.context.router.replace('/');
        }
    }*/

    logout(e) {
        e.preventDefault();
        console.log("RAAAAN", localStorage.token);
        this.props.actions.logout(localStorage.token)
            .catch((err) => {
                toastr.error(`${err}`);
                console.log(err);
            })
    }

    handleSignIn(e) {
        e.preventDefault();
        let username = this.state.userInput.username;
        let password = this.state.userInput.password;
        this.props.actions.login(this.state.userInput/*, function (err, message) {
            console.log("LOGIN");
            if(!err) {
               var location = this.props.location;
                //console.log(this.context.router);
                console.log(location.state.nextPathname);
                if(location.state && location.state.nextPathname) {
                    this.context.router.replace(location.state.nextPathname)
                }   
                else {
                    this.context.router.replace('/');
                }
            }
            else {
                console.log(err);
                this.setState({err : message});
            }

        }.bind(this)*/)
        .then((hello) => {
            console.log(hello);
            this.context.router.replace('/');
        })
        .catch((err)=> {
            console.log("=======");
            this.setState({err: err.message})
            /*toastr.error(err.message);*/ //res.message
        });

    }

    updateUserInput(event) {
        const field = event.target.name;
        let userInput = this.state.userInput;
        userInput[field] = event.target.value;
        return this.setState({userInput : userInput});

    }
    render() {
        let {username, password} = this.state.userInput;
        return (
            <div id="login-wrapper" >
                <form onSubmit={this.handleSignIn}>
                        <div className="center"> <h1>UHACK</h1>{/*<img style= {{width: "125px"}}src={require('../images/logo.png')} alt=""/>*/}</div>
                        <video className="main-bg-video" src={require('../images/sky.mp4')} id="bgvid" autoPlay loop></video>
                        <TextInput
                            name="username"
                            label="Username"
                            value={username.length ? username : ""}
                            onChange = {this.updateUserInput}
                        ></TextInput>
                        <TextInput
                            name="password"
                            label="Password"
                            type="password"
                            value={password.length ? password : ""}
                            onChange={this.updateUserInput}
                        ></TextInput>
                        <h6>{this.state.err}</h6>
                        <div className="center">
                        <RaisedButton
                            type="submit"
                            label="Login"
                            primary={true}
                            
                            />
                        </div>
                        
                </form>
                
                {/*<button onClick={this.logout}> LOGOUT</button>*/}
            </div>
        );
    }
}

Login.contextTypes = {
    router : PropTypes.object
}

function mapStateToProps(state, ownProps) {
    return {
        loggedIn : state.loggedIn
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions : bindActionCreators(authActions, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);