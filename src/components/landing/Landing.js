import React from 'react';

import Overview from './Overview';
import HowItWorks from './HowItWorks';
import GetInTouch from './GetInTouch';
import NavbarReact from  './NavbarReact';
import OwlCarousel from 'react-owl-carousel';

var $ = require('jquery');


class Landing extends React.Component {
	
	constructor(props, context) {
		super(props);
		this.state = {
            loggedIn : ''
		};
        context.router;
	}

	componentWillMount() {

	}

	componentDidMount() {
        $(".owl-item").each( function(index, element) {
            if(index == 0) {
                $(element).css({
                    "background": "url(/build/css/images/shoppr-banner.jpg) no-repeat fixed center center",
                    "background-size" : "cover",
                    "box-shadow": "rgba(0,0,0,.4) 3px 5px 5px"
                });
            } else if(index == 1) {
                $(element).css({
                    "background": "url(/build/css/images/muvr-banner.jpg) no-repeat center center",
                    "background-size" : "cover",
                    "box-shadow": "rgba(0,0,0,.4) 3px 5px 5px"
                });
            }
        });

        $(".owl-prev").html("<i class=\"material-icons navigation-arrow \">keyboard_arrow_left</i>");
        
        
	}

    viewMuvrs(e) {
        e.preventDefault();
    }

    signUpAsMuvr(e) {
        e.preventDefault();
        this.context.router.replace('/muvrsignup')
    }

	render() {

		return(
        <div id="app-container">   
			
            <NavbarReact location = {this.props.location} loggedIn = {this.props.loggedIn} uid = {this.props.uid} name = {this.props.name} accountType = {this.props.accountType} />
            <div className="wrapper">   
                {/*<div id="banner-carousel" className="owl-carousel owl-theme">
                <div className="shoppr-banner" >
                    <h1>MINIMISE DISTANCE</h1>
                    <h3>Shop like you're on the other side of the world with Plugg</h3>
                    <h5 >LEARN MORE</h5>
                    <button id="view-muvrs" type="button" className="ghost-btn">VIEW MUVRS</button>
                </div>
                <div className="muvr-banner" >
                    <h1>MAXIMISE TRAVEL</h1>
                    <h3>Extra luggage space can mean extra earnings with Plugg</h3>
                    <h5 >LEARN MORE</h5>
                    <button id="sign-up-as-muvr" type="button" className="ghost-btn">SIGN UP AS A <br/>MUVR</button>
                </div>
                </div>*/}
                <OwlCarousel id="banner-carousel" slideSpeed={600} navigation singleItem autoPlay stopOnHover>
                  <div className="shoppr-banner" >
                    <h1>MINIMISE DISTANCE</h1>
                    <h3>Shop like you're on the other side of the world with Plugg</h3>
                    <h5 >LEARN MORE</h5>
                    <button id="view-muvrs" type="button" onClick={this.viewMuvrs} className="ghost-btn">VIEW MUVRS</button>
                </div>
                <div className="muvr-banner" >
                    <h1>MAXIMISE TRAVEL</h1>
                    <h3>Extra luggage space can mean extra earnings with Plugg</h3>
                    <h5 >LEARN MORE</h5>
                    <button id="sign-up-as-muvr" type="button" onClick= {this.signUpAsMuvr} className="ghost-btn">SIGN UP AS A <br/>MUVR</button>
                </div>
                </OwlCarousel>

                <Overview/>
                <HowItWorks/>
                <GetInTouch/>
            </div>
            
        </div>      
		)
	}
}

Landing.contextTypes = {
    router : React.PropTypes.object.isRequired
};

export default Landing;

