import React from 'react';


var $ = require('jquery');


class HowItWorks extends React.Component {
	
	constructor(props, context) {
		super(props);
		this.state = {

		};
        context.router;
	}

	componentDidMount() {


        //On-click feature for how-it-works-section
        $("#how-it-works-muvr-list").find('li').css('display', 'none');
        var delayTimeFadeIn = 450; //ms
        $("#how-it-works-muvr").on('click', function(){
            $("#how-it-works-muvr").css({
                "background" : "#516880",
                "color": "white"
            });
            $("#how-it-works-shoppr").css({
                "background" : "transparent",
                "color": "#516880"
            });
            $("#how-it-works-shoppr-list").find("li").fadeOut();
            $("#how-it-works-muvr-list").delay(250).show();
            $("#how-it-works-muvr-list").find('li').delay(delayTimeFadeIn).fadeIn();
            $(".shoppr-header").fadeOut();
            $(".muvr-header").delay(delayTimeFadeIn).fadeIn();

        });
        $("#how-it-works-shoppr").on('click', function(){
            $("#how-it-works-shoppr").css({
                "background" : "#516880",
                "color": "white"
            });
            $("#how-it-works-muvr").css({
                "background" : "transparent",
                "color": "#516880"
            });
            $("#how-it-works-muvr-list").find('li').hide();
            $("#how-it-works-muvr-list").hide();
            $("#how-it-works-shoppr-list").find("li").delay(delayTimeFadeIn).fadeIn();
            $(".muvr-header").css("display", 'none');
            $(".shoppr-header").fadeIn();

        });
	}
    handleSignUp() {
        console.log($(".muvr-header").css("display"));
        if($(".muvr-header").css("display") == 'none') {
            this.context.router.replace('/shopprsignup');
        } else {
            this.context.router.replace('/muvrsignup');
        }
    }
	render() {
        var divStyle = {
            height : '50px'
        };
		return (
			<section id="section-how-it-works">

                <h1>HOW IT WORKS</h1>
                <button id="how-it-works-shoppr" className="how-it-work-buttons">SHOPPR</button>
                <button id="how-it-works-muvr" className="how-it-work-buttons">MUVR</button>
                <div style= {divStyle}>
                    <h3 className="shoppr-header">I am a Shoppr who wants my item delivered to the Philippines</h3>
                    <h3 className="muvr-header">I am a Muvr who wants to deliver a parcel to the Philippines</h3>
                </div>
                <div className="how-it-works-container">
                    <ol id="how-it-works-shoppr-list" className="how-it-works-list">
                        <li>Select a Muvr who fits your desired schedule and point of delivery.</li>
                        <li>Purchase your desired parcel.</li>
                        <li>Connect with a Muvr</li>
                        <li>Purchase your item from any website</li>
                        <li>Confirm delivery details with Muvr</li>
                        <li>Receive your parcel</li>
                    </ol>
                    <ol id="how-it-works-muvr-list" className="how-it-works-list">
                        <li>Post your travel listing</li>
                        <li>Connect with a Shoppr</li>
                        <li>Confirm received items with Shoppr</li>
                        <li>Muv the parcel</li>
                        <li>Deliver to Shoppr</li>
                        <li>Receive your premium</li>
                    </ol>
                </div>
                <button id="get-started" onClick={this.handleSignUp} className="how-it-work-buttons">GET STARTED</button>
            </section>
		)

	}
}


HowItWorks.contextTypes = {
    router : React.PropTypes.object.isRequired
};

export default HowItWorks;