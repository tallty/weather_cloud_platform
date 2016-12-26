import React, { Component } from 'react';
import AdminHeader from '../share/AdminHeader';

export default class Admin extends Component {
	render() {
		return (
			<div>
				<AdminHeader/>
				{this.props.children}
			</div>
		);
	}
}
