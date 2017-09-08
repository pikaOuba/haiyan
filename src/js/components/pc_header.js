import React from 'react';
import {Form} from 'antd';
import {BrowserRouter as Router, Route,HashRouter,hashHistroy, Link, browserHistory} from 'react-router-dom'
class PCHeader extends React.Component {
	constructor(){
		super();
		this.state = {
			data:[],
			key:'海燕'
		}
	}
	componentDidMount(){
		
		fetch('https://api.github.com/search/repositories?q=repo')
		.then(response=>response.json()).then(json=>{
			this.setState({
				data:json
			});
			//document.title = this.state.newsItem.title + ' - React News | React'
		})
	}
	handleGenderChange(event){
		this.setState({
			key: event.target.value
	});
	}

	handleSearch(){
		
		fetch(`https://api.github.com/search/repositories?q=${this.state.key}`)
		.then(response=>response.json()).then(json=>{
			this.setState({
				data:json
			});
			console.log('gaibian'+this.state)
			//document.title = this.state.newsItem.title + ' - React News | React'
		})
	}

	render() {
		let list = this.state.data.items || []
		return (		
			<div>
				<header>
					<input defaultValue={this.state.key}  onChange={this.handleGenderChange.bind(this)}/>
					<button onClick={this.handleSearch.bind(this)}>搜索</button>
				</header>
				 <table>
        <thead>
        <tr>
          <th width='20%'>Name</th>
					<th width='30%'>Description</th>
					<th>Owner</th>
					<th>Stars </th>
        </tr>
	
        </thead>
        <tbody>
				{	
					list.map((item,index)=>{
						return (
							<tr key={index}>
								<td>{item.name}</td>
								<td>{item.description}</td>
								<td><img src={item.owner.avatar_url} height='50'/></td>
								<td>{item.stargazers_count}</td>
							</tr>
						)
					})
				}
        </tbody>
      </table>
			</div>
		);
	};
}
export default PCHeader = Form.create({})(PCHeader);
