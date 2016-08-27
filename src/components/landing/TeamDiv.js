import React from 'react';

class TeamDiv extends React.Component {
	constructor(props, context) {
		super(props);
		this.state = {

		};
        context.router;
	}
	

	render() {
		var h3Style = {
			marginTop : '-7px'
		}

		return (
			<div className="col-md-1 col-centered" >
                <div className="overview-card">
                    <div className="about-text">
                        <img className='img-circle'src={this.props.picture}/>
                        <h3 style= {{marginTop: '2px'}}>{this.props.name}</h3>
                        <h3 style= {h3Style}>{this.props.position} </h3>
                    </div>
                </div>
            </div>
		)
	}

}

export default TeamDiv;




