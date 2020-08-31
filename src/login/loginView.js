import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import LoginController from './loginController.js';
import './login.css';
import history from '../services/history';
const axios = require('axios');

const instance = axios.create({
	baseURL: 'http://localhost:3001/dev',
	timeout: 1000,
});
class LoginView extends Component{
	constructor(props){
		super(props);
		this.handleEmail = this.handleEmail.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			email : '',
			password: '',
			isLoading: false,
		};
	}

	handleEmail(event){
		this.setState({
			email: event.target.value
		});
	}

	handlePassword(event){
		this.setState({
			password: event.target.value
		});
	}

	goToHome(credentials){
		history.push('/home',{
			email: this.state.email,
			password: this.state.password,
		});
	}

	async handleSubmit(event){
		this.setState({
			isLoading: false
		});
		let res = null;
		const { email, password} = this.state;
		const data =  await instance.post('/login/login', {
			email,
			password
		}).catch((e) => {
			res = e.response;
		});
		if(res == null){
			this.setState({
				isLoading: false
			});
			window.localStorage.setItem('credentials', {
				email: email,
				password:password
			});
			this.goToHome(null);
		}
	}
	render(){
		return (
			<div className="container">
				<div className="row">
					<div className="col-lg-10 col-xl-9 mx-auto">
						<div className="card card-signin flex-row my-5">
							<div className="card-img-left d-none d-md-flex">
							</div>
							<div className="card-body">
								<h5 className="card-title text-center">Register</h5>
								<form className="form-signin">
									<div className="form-label-group">
										<input type="text" id="inputEmail" className="form-control" placeholder="Email" onChange = {this.handleEmail} required autoFocus/>
										<label htmlFor="inputEmail">Email</label>
									</div>
									<div className="form-label-group">
										<input type="password" id="inputPassword" className="form-control" placeholder="Password" onChange = {this.handlePassword} required/>
										<label htmlFor="inputPassword">Password</label>
									</div>
										  {this.state.isLoading ? <button className="btn btn-lg btn-primary btn-block text-uppercase" type="button" disabled>
										<span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>
                        Loading...
									</button> :
										<button className="btn btn-lg btn-primary btn-block text-uppercase" type ="button" onClick = {this.handleSubmit}>Login</button>
									}
									<a className="d-block text-center mt-2 small" href="#">Register</a>
									<hr className="my-4"/>
									<button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2"></i> Login with Google</button>
									<button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2"></i> Login with Facebook</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default LoginView;
