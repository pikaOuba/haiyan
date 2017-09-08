import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router ,HashRouter,Route,Link,hashHistory} from 'react-router-dom';
import MediaQuery from 'react-responsive';

import PCIndex from './components/pc_index';
class Root extends React.Component{
	render(){
		return (<div>
				<MediaQuery query = '(min-device-width:1224px)'>
					<HashRouter history={hashHistory} >
						<div>
							<Route exact path='/' component={PCIndex}></Route>
						</div>
					</HashRouter>
				</MediaQuery>
				
			</div>)
	}
}

ReactDOM.render(<Root/>,document.getElementById('app'))