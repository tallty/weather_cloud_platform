import React, { Component, PropTypes } from 'react';
import { Router, Route } from 'react-router';
// 页面
import Demo from './components/Demo';

export default class Routes extends Component {
	render() {
		return (
			<Router history={this.props.history}>
				<Route path="/" component={Demo}/>
			</Router>
		);
	}
}

Routes.defaultProps = {
	
}

Routes.propTypes = {
  history: PropTypes.any,
}