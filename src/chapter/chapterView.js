import React, {Component} from 'react';
import NavBar from '../components/navbar';
import './chapterController';
import './chapter.css';
import history from '../services/history';
const axios = require('axios');

const instance = axios.create({
	baseURL: 'http://localhost:3001',
	timeout: 10000,
});

class chapterView extends Component{
	constructor(props){
		super(props);
		this.state = {
			chapters: [],
			suffix: props.match.params.name
		};
	}
	componentDidMount(){
		this.getChapter();
	}
	async getChapter(){
		let res = null;
		const {suffix} = this.state
		const info = await instance.post('book/toc',{
			suffix
		}).catch((e) => {
			res = e.message;
			console.log(JSON.stringify(e))
		});
		if(res == null){
			this.setState({
				name: info.data.name,
				link: info.data.link,
				chapters: info.data.chapters
			})
		}
	}
	render(){
		return (
			<div class= "novels">
				<NavBar source= {this.state.source} onSourceChange = {this.handleSource} link="toc"/>
				<h1 class="display-4 col-sm-12">{this.state.name}</h1>

			</div>

		);
	}
}

export default chapterView;
