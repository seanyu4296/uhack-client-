import React from 'react';
var $ = require('jquery');

class GetInTouch extends React.Component {
	
	constructor(props, context) {
		super(props);
		this.state = {

		}
	}

	componentDidMount() {
		var textBoxWidth = $("#name").css('width');
        $("#msg").css('width', textBoxWidth);
	}
	componentWillMount() {

	}
	compoentDidupdate() {
		
	}

	render() {
		return (			
			<section id="section-get-in-touch">
            	<h1>GET IN TOUCH</h1>
            	<h3>Questions? Don't hesitate to ask us</h3>
            	<h4>Or view the <a href="">FAQs</a></h4>
            	<br/>
		        <form className="form-horizontal" id="contact_form">
		            <fieldset>
		                <div className="form-group">
		                    <label className="col-md-4 control-label" htmlFor="name">Name</label>
		                    <div className="col-md-5">
		                        <input id="name" name="name" type="text" placeholder="Enter your full name here" className="form-control input-md" required=""/>

		                    </div>
		                </div>
		                
		                <div className="form-group">
		                    <label className="col-md-4 control-label" htmlFor="email">Email</label>
		                    <div className="col-md-5">
		                        <input id="email" name="email" type="text" placeholder="Enter your email address here" className="form-control input-md" required=""/>

		                    </div>
		                </div>
		             
		                <div className="form-group">
		                    <label className="col-md-4 control-label" htmlFor="msg">Message</label>
		                    <div className="col-md-4">
		                        <textarea className="form-control" placeholder="Type your message here" id="msg" name="msg" cols="6" rows="6"></textarea>
		                    </div>
		                </div>
		               
		                <div className="form-group">
		                    <label className="col-md-4 control-label" htmlFor="submit"></label>
		                    <div className="col-md-5">
		                        <button name="submit" id="submit" className="how-it-work-buttons">SUBMIT</button>
		                    </div>
		                </div>
		            </fieldset>
		        </form>
        	</section>
            
        )
	}
}

GetInTouch.contextTypes = {
	router : React.PropTypes.object.isRequired
}

export default GetInTouch;