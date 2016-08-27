import React from 'react';
import {Link} from 'react-router';

import {NavLink} from '../helpers/NavLink';
import SignInModal from '../SignInModal';
import sticky from 'jquery-sticky';
import jqueryScrollTo from 'jquery.scrollto';
import {Navbar, Nav, NavItem, Button, DropdownButton, ButtonGroup, MenuItem, Modal, Input, Row, Col} from 'react-bootstrap';



var $ = require('jquery');


class NavbarReact extends React.Component {
	
	constructor(props, context) {
		super(props);
		this.state = {
			showModal : false,
			name : ''
		};
        context.router;
		this.signInModal = this.signInModal.bind(this);
		this.signInModalClose = this.signInModalClose.bind(this);
	}

	navBarResizing() {
		/*$(".navbar").sticky({
		    getWidthFrom: '.animsition',
		    responsiveWidth: true
		});*/
		$(".navbar").on('sticky-start', function(){
		    $(".navbar-logo").css("width", 85).attr('src', '/build/css/images/logo-white.png');
		    $(".navbar-default .navbar-nav>li>a").css('font-size','12px');
		    $(".navbar-default .navbar-nav>li>div>button").css('font-size','12px');
		});
		$(".navbar").on('sticky-end', function(){
		    $(".navbar-logo").css("width", 120);
		    $(".navbar-logo").attr('src', '/build/css/images/logo.png');
		    $(".navbar-default .navbar-nav>li>a").css('font-size','14px');
		    $(".navbar-default .navbar-nav>li>div>button").css('font-size','14px');
		});
	}

	componentDidMount() {
		
		this.navBarResizing();
		 
        $(".top-link a").on("click", function(e) {
            e.preventDefault();
            $(".top-link a").css('color','white');
            var targetPage = $(this).attr("href");
            $(window).scrollTo(targetPage, 400);

        });
        $(".indexheader a").on("click", function(e) {
            e.preventDefault();
            var targetPage = $(this).attr("href");
            $(window).scrollTo(targetPage, 300);

        });

        $(".sign-in-modal").parent().css({
			display: 'flex',
			'flex-direction' : 'column',
			'justify-content': 'center',
			'align-items': 'center'
        });
	}

	componentWillMount() {
		if(this.props.loggedIn) {

		}
	}
	
	
	signUpMuvr(e) {
		e.preventDefault();
		this.context.router.replace('/muvrsignup');
		console.log('signup');
	}
	
	
	signUpShoppr(e) {
		e.preventDefault();
		this.context.router.replace('/shopprsignup');
	}
	
	
	signInModal(e) {
		e.preventDefault();
		this.setState({showModal: true});
		console.log("Sign In Modal");

	}
	
	
	signInModalClose(e) {
		this.setState({showModal: false});
	}
	
	
	dashBoardRedirect(e) {
		console.log(this.props.accountType);
		if(this.props.accountType == 'muvr') {
			this.context.router.replace('/muvr');
		} else {
			console.log(this.props.accountType);
			this.context.router.replace('/shoppr');
		}
	}



	render() {
		var buttonPadding = {
			paddingTop : '5px',
			paddingLeft : '12px'
		};
		var name = this.props.name ?
		<span>{this.props.name}</span> : <span>Loading..</span>
		/*var signInOrDashboard = this.props.loggedIn ? 'DASHBOARD' : 'SIGN IN'; 
		var signUpOrName = this.props.loggedIn ? this.props.name : 'SIGN UP';*/
		var signInOrDashboard = this.props.loggedIn ? 
			<NavItem eventKey={6} className="top-link index" onClick={this.dashBoardRedirect}>DASHBOARD</NavItem> : 
			<NavItem eventKey={6} className="top-link index" onClick={this.signInModal}>SIGN IN</NavItem>;
		
		var signUpOrUser = this.props.loggedIn ?
			<NavItem eventKey={7} className="top-link index"></NavItem> :
			<li className="top-link index" style ={buttonPadding}>
				<div id="button-sign-up-padding" >
					{/*<Button id="nav-sign-up" type="button" className= "" onClick={this.signUp}>SIGN UP</Button>*/}
					<DropdownButton id="nav-sign-up" title="SIGN UP">
						<MenuItem eventKey="1" onClick={this.signUpMuvr}>Muvr</MenuItem>
						<MenuItem eventKey="2"  onClick={this.signUpShoppr}>Shoppr</MenuItem>
					</DropdownButton>
				</div>
			</li>;
		var errors = this.state.error ? <p> {this.state.error} </p> : '';
		return (
			<div>
			<SignInModal location={this.props.location} showModal={this.state.showModal} closeModal={this.signInModalClose}/>
			
			<header className="navbar">
            <Navbar className="menu">
				<Navbar.Header className="navbar-header indexheader" >
					<Navbar.Brand className="navbar-brand ">
						<a href="#banner-carousel"><img className="navbar-logo" src="/build/css/images/logo.png"/></a>
					</Navbar.Brand>
					<Navbar.Toggle/>
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav className = "landing-nav nav navbar-nav navbar-right" id = "top-nav-collapse" >
						<NavItem eventKey={1} href="#section-overview" className="top-link index" >OVERVIEW</NavItem>
						<NavItem eventKey={2} href="#section-how-it-works" className="top-link index" >HOW IT WORKS</NavItem>
						<NavItem eventKey={5} className="top-link index">FAQs</NavItem>
						{signInOrDashboard}
						
					</Nav>
				</Navbar.Collapse>
            </Navbar>
            </header>
            <div>
            
            </div>
         </div>
		)

	}
}


NavbarReact.contextTypes = {
    router : React.PropTypes.object.isRequired
};

export default NavbarReact;