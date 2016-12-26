import React, { Component } from 'react';

class AdminHeader extends Component {
	render() {
		const style = {
			height: 50,
			background: '#6A92EB',
			lineHeight: '50px',
			paddingLeft: 15,
			paddingRight: 15,
			color: '#fff'
		}
		return (
			<div style={style}>
				华云实业数据开放平台
			</div>
		);
	}
}

export default AdminHeader;