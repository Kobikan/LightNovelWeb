import React, {Component} from 'react';
import NavBar from '../components/navbar';
import './homeController';
import './home.css';

class tocView extends Component{
	constructor(props){
		super(props);
		this.handleUsername = this.handleUsername.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			username : '',
			password: '',
		};
	}

	handleUsername(event){
		this.setState({
			username: event.target.value
		});
	}

	handlePassword(event){
		this.setState({
			password: event.target.value
		});
	}

	handleSubmit(event){
		event.preventDefault();
	}
	render(){
		return (
			<div>
				<NavBar/>
			</div>

		);
	}
}

export default tocView;
