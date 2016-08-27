import React from 'react';


class Overview extends React.Component {
	
	constructor(props, context) {
		super(props);
		this.state = {

		};
        context.router;
	}

	componentWillMount() {

	}
	render() {
		return (
			<section id="section-overview">
            <h2>Plugg is the peer-to-peer shipping solution for the modern Filipino</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4" >
                            <div className="overview-card"/>
                                <div className="about-text">
                                <img src="/build/css/images/p2p.png"/>
                                <h3>P2P</h3>
                                <p>Plugg is a network of Shopprs (aka buyers) and Muvrs (aka travellers)</p>
                            </div>
                        </div>
                        <div className="col-md-4" >
                            <div className="overview-card">
                                <div className="about-text">
                                    <img src="/build/css/images/plane.png"/>
                                    <h3>DELIVERY</h3>
                                    <p>Muvrs going to the Philippines bring with them purchases made by Shopprs</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4" >
                            <div className="overview-card">
                            <div className="about-text">
                                <img src="/build/css/images/hassle-free.png"/>
                            <h3>HASSLE FREE</h3>
                            <p>Plugg is an efficient and effective way to get purchases at your convenience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
		)

	}
}


Overview.contextTypes = {
    router : React.PropTypes.object.isRequired
};

export default Overview;
