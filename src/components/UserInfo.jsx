import React, {Component, PropTypes} from 'react';

class UserInfo extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
			userInput : {
                name : '',
                college: '',
                year: ''
            },
			passwordValue : '',
			error : false
		};
        
        this.updateUserInput = this.updateUserInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    };

    handleSubmit(e) {
        e.preventDefault();
        let email = this.state.userInput.username;
        let password = this.state.userInput.password;
		var userInput =  {
			email : email,
			password: password
	   }
    }

    updateUserInput(event) {
        const field = event.target.name;
        let userInput = this.state.userInput;
        userInput[field] = event.target.value;
        return this.setState({userInput : userInput});

    }

    render() {
        	let {name, college, year} = this.state.userInput;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                        <TextInput
                            name="name"
                            label="name"
                            value={name.length ? name : ""}
                            onChange = {this.updateUserInput}
                        ></TextInput>
                        <TextInput
                            name="college"
                            label="college"
                            value={college.length ? college : ""}
                            onChange = {this.updateUserInput}
                        ></TextInput>
                        <TextInput
                            name="year"
                            label="year"
                            value={year.length ? year : ""}
                            onChange={this.updateUserInput}
                        ></TextInput>
                
                </form>

            </div>
        );
    }
}

UserInfo.propTypes = {

};

UserInfo.contextTypes = {
    router: PropTypes.object
}

export default UserInfo;