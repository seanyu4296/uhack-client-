import React from 'react';
import TeamDiv from './TeamDiv';


class Team extends React.Component {
	
	constructor(props, context) {
		super(props);
		var image = '/build/css/images/';
		this.state = {
			team: [
				{ picture: image + 'cuevas.JPG', position: 'CEO', name: 'Vinch Cuevas'},
				{ picture: image + 'san-pedro.jpg', position: 'CBO', name: 'Matt San Pedro'},
				{ picture: image + 'seanyu.png', position: 'CTO', name: 'Sean Yu'},
				{ picture: image + 'wesley.png', position: 'CFO', name: 'Wesley Chan'},
				{ picture: image + 'enzo.png', position: 'CIO', name: 'Enzo Orbeta'},
				{ picture: image + 'john.jpg', position: 'CHRO', name: 'John Ramos'},
				{ picture: image + 'paog.jpg', position: 'COO', name: 'Paolo Gabriel'}
			]
		}; // what if array of object literals then loop with function that gets this.state.team.length as parameter JOSN parse and stringify
        context.router;
	}

	renderTeamDiv() {
		var team = [];
		for (var i = 0; i < this.state.team.length; i++) {
	        team.push(<TeamDiv key={i} picture={this.state.team[i]["picture"]} name={this.state.team[i]["name"]} position ={this.state.team[i]["position"]}/>);
	    }
	    return team;
	}

	render() {
		var h3Style = {
			lineHeight : '1.3',
			marginLeft : '20vw',
			marginRight : '20vw'
		}
		return(
			<section id="section-team">
                <h1>MEET THE TEAM</h1>
                <hr className="grayscale"/>
                <div className="team-row">
                    <h3 style={h3Style}>"Here at Plugg, we aim to be the bridge between the Shopprs in the Philippines and the costly and lengthy international shipping services that couriers usually offer, by providing an efficient and assure alternative for your buying convenience."
                    </h3>
                </div>
                <div className="team-row seven-cols ">
                {this.renderTeamDiv()}
                </div>            
	        </section>
	    )

	}
}

Team.contextTypes = {
    router : React.PropTypes.object.isRequired
};

export default Team;