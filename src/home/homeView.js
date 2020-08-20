import React, {Component} from 'react';
import NavBar from '../components/navbar';
import './homeController';
import './home.css';

class tocView extends Component{
	constructor(props){
		super(props);
		this.handleUsername = this.handleUsername.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
		this.handleSource = this.handleSource.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			username : '',
			password: '',
			source: 'rln',

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

	handleSource(event){
		this.setState({
			source: event.target.value
		});
	}

	handleSubmit(event){
		event.preventDefault();
	}
	render(){
		return (
			<div>
				<NavBar source= {this.state.source} onSourceChange = {this.handleSource} link="home"/>
			</div>

		);
	}
}

export default tocView;
