import React, {Component} from 'react';
import NavBar from '../components/navbar';
import './chapterListController';
import './chapterList.css';
import history from '../services/history';
const axios = require('axios');

const instance = axios.create({
	baseURL: 'http://localhost:3001/dev',
	timeout: 10000,
});

class chapterListView extends Component{
	constructor(props){
		super(props);
		console.log(props)
		this.state = {
			chapters: [],
			suffix: window.location.pathname.replace('/chapterList/','')
		};
	}
	componentDidMount(){
		this.getChapters();
	}
	async getChapters(){
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
				<div class="col-lg-7">
					<div class="list-group novels-list">
					{this.state.chapters.map((number, i) => {
						return (
							<a href="" class="list-group-item list-group-item-action"onClick = {() => {
								history.push("" + this.state.suffix +"/"+ number)
							}}>Chapter {number}</a>
						)
					})
					}
				</div>
				</div>
			</div>

		);
	}
}

export default chapterListView;
