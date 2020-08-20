import React, {Component} from 'react';
import NavBar from '../components/navbar';
import './tocController';
import './toc.css';
import history from '../services/history';
const axios = require('axios');

const instance = axios.create({
	baseURL: 'http://localhost:3001',
	timeout: 10000,
});

class tocView extends Component{
	constructor(props){
		super(props);
		this.setPage = this.setPage.bind(this);
		this.state = {
			source: props.history.location.state ? props.history.location.state.source : "rln",
			titles:[1],
			page: 1
		};
	}
	componentDidMount(){
		this.getTitles();
	}
	async getTitles(){
		let res = null;
		const info = await instance.get('/list/books/rln').catch((e) => {
			res = e.message;
			console.log(JSON.stringify(e))
		});
		if(res == null){
			this.setState({
				titles: info.data
			})
		}
	}
	setPage(pageNo){
		this.setState({
			page: pageNo
		})
	}
	render(){
		return (
			<div class= "novels">
				<NavBar source= {this.state.source} onSourceChange = {this.handleSource} link="toc"/>
				<div class="col-lg-7">
					<h1 class="display-4">Table Of Contents</h1>
					<div class="list-group novels-list">
					{this.state.titles.map((obj, i) => {
						return (
							<a href="#" class="list-group-item list-group-item-action"
							onClick = {() => {
								history.push("/chapterList",obj)
							}}>{obj.name}</a>
						)
					})
					}
				</div>
				</div>
			</div>

		);
	}
}

export default tocView;
