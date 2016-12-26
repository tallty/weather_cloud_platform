import React, { Component, PropTypes } from 'react';
import { Router, Route } from 'react-router';
// 页面
import Demo from './components/Demo';
import Home from './components/home/Home';
import Apis from './components/api/Apis';

export default class Routes extends Component {
	render() {
		return (
			<Router history={this.props.history}>
				<Route path="/" component={Home}/>
				<Route path="/apis" component={Apis}>
					<Route path="apis/:id" component={Home}/>
				</Route>
			</Router>
		);
	}
}

Routes.defaultProps = {
	
}

Routes.propTypes = {
  history: PropTypes.any,
}