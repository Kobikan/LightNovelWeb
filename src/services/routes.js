import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from '../login/loginView';
import Home from '../home/homeView';
import TableOfContents from '../toc/tocView';
import ChapterList from '../chapterList/chapterListView';
import Register from '../register/registerView';
const Routes = () => (
	<div>
		<Switch>
			<Route path ="/" exact component={Login}/>
			<Route path ="/home" exact component={Home}/>
			<Route path ="/toc" exact component={TableOfContents}/>
			<Route path ="/chapterList" exact component={ChapterList}/>
			<Route path ="/register" exact component={Register}/>
		</Switch>
	</div>
);

export default Routes;
