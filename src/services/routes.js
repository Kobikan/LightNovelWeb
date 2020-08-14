import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from '../login/loginView';
import Home from '../home/homeView';
import Register from '../register/registerView';
const Routes = () => (
	<div>
		<Switch>
			<Route path ="/" exact component={Login}/>
			<Route path ="/home" exact component={Home}/>
			<Route path ="/register" exact component={Register}/>
		</Switch>
	</div>
);

export default Routes;
