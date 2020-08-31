import React, {Component} from 'react';
import NavBar from '../components/navbar';
import './chapterController';
import './chapter.css';
import history from '../services/history';
const axios = require('axios');

const instance = axios.create({
	baseURL: 'http://localhost:3001/dev',
	timeout: 10000,
});

class chapterView extends Component{
	constructor(props){
		super(props);
		this.state = {
			suffix: props.match.params.name,
			chapterNumber: props.match.params.chapterNumber,
			chapter: []
		};
	}
	componentDidMount(){
		this.getChapter();
	}
	async getChapter(){
		let res = null;
		const {suffix, chapterNumber} = this.state
		const info = await instance.post('book/chapter',{
			suffix,
			chapterNumber
		}).catch((e) => {
			res = e.message;
			console.log(JSON.stringify(e))
		});
		if(res == null){
			console.log(info.data)
			this.setState({
				chapter: info.data
			})
		}
	}
	render(){
		return (
			<div class= "novels scroll-list">
				<NavBar source= {this.state.source} onSourceChange = {this.handleSource} link="toc"/>
				<h1 class="display-4 col-md-12">{this.state.name}</h1>
				<div class="card w-75">
			  <div class="card-body scroll-list">
			    <h5 class="card-title">Chapter {this.props.match.params.chapterNumber}</h5>
					{this.state.chapter.map((line,i)=> {
						return(
							<p class="card-text">{line}</p>
						)
					})
					}
			  </div>
			</div>
			</div>

		);
	}
}

export default chapterView;
