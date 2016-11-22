import React, { Component } from 'react';
import css from './Demo.css';
import Service from '../utils/service.js';

class Demo extends Component {

	componentDidMount() {
		new Service().get('http://114.55.172.35:3232/home_info')
			.then(res => {console.dir(res.body)})
			.then(err => {console.dir(err)})
	}

	render() {
		return (
			<div>
				<h1 className={css.size}>Hello World</h1>	
				<img src="images/bitmap.png" alt=""/>
			</div>
		);
	}
}

export default Demo;