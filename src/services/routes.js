import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from '../login/loginView';
import TableOfContents from '../toc/tocView';
import Register from '../register/registerView';
const Routes = () => (
	<div>
		<Switch>
			<Route path ="/" exact component={Login}/>
			<Route path ="/toc" exact component={TableOfContents}/>
			<Route path ="/register" exact component={Register}/>
		</Switch>
	</div>
);

export default Routes;
