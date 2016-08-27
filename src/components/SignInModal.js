import React from 'react';
import {Navbar, Nav, NavItem, Button, DropdownButton, ButtonGroup, MenuItem, Modal, Input, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router';
var $ = require('jquery');
import * as authActions from '../actions/authActions';
import {connect} from 'react-redux';
import auth from '../api/authApi';
import {bindActionCreators} from 'redux';

import TextInput from './common/TextInput';
import RaisedButton from 'material-ui/RaisedButton';

class SignInModal extends React.Component {

	constructor(props, context) {
		super(props);
		this.state = {
			userInput : {
                username: '',
                password: ''
            },
			passwordValue : '',
			error : false
		};
        context.router;
		this.updateUserInput = this.updateUserInput.bind(this);
        this.handleSignIn = this.handleSignIn.bind(this);
	}

	 handleSignIn(e) {
        e.preventDefault();
        let email = this.state.userInput.username;
        let password = this.state.userInput.password;
		var userInput =  {
			email : email,
			password: password
	   }
        this.props.actions.login(userInput/*, function (err, message) {
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
            this.context.router.replace('/app');
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
		var buttonPadding = {
			paddingTop : '5px',
			paddingLeft : '12px'
		};
		var rowStyle = {
			
		}
		var linkStyle = {
			textAlign :'right'
		}
		var colStyle = {
			padding: '0px 0px 0px 2px',
			textAlign: 'right'
			
		}
		var colStyle2 = {
			fontSize: '15px'
		}
		var buttonStyle = {
			background:'#F4F4F4',
  			color: '#516880'
		}
		var errors = this.state.error ? <p> {this.state.error} </p> : '';

		let {username, password} = this.state.userInput;
		return (
			
			<Modal show={this.props.showModal} onHide={this.props.closeModal} dialogClassName="sign-in-modal" >
				<Modal.Header closeButton></Modal.Header>
            	<Modal.Body closeButton>
            		
            		<br/>
            		<h3>Sign in to Preperroni</h3>
            		<br/>
            		<div id="sign-in-form-container">
            		<form onSubmit={this.handleSignIn}>
         {/*   			<Input ref="email" type="email" placeholder="Enter your email" className="sign-in-input"/>
            			<Input 
            				ref ="password" type="password" placeholder="Password" className="sign-in-input" 
            				onChange ={this.handlePasswordChange} bsStyle={this.validationState()}/>
            			
						<Button type="submit" bsSize="large" bsStyle="primary" block>SIGN IN</Button>
	*/}
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
					</div>
					{errors}
					
            	</Modal.Body>
            	
            </Modal>
            
		)
	}
}


SignInModal.contextTypes = {
    router : React.PropTypes.object.isRequired
};

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


export default connect(mapStateToProps, mapDispatchToProps)(SignInModal);

