import React, { Component } from 'react';
import css from './api.css';

class Api extends Component {

	componentDidMount() {
		// todo json 转成  markdown形式输出
		var parser = new DOMParser();
		let s = markdown.toHTML(`\`\`\`**你好**\`\`\``);
		let dom = document.getElementById("content");
		dom.innerHTML = s;
	}

	render() {
		return (
			<div className={css.api}>
				<div className={css.api_content}>
					{/* api内容 */}
					<div className={css.content} id="content"></div>
				</div>
				<div className={css.api_markdown}>
					{/* api 返回 */}
					<div className={css.content}></div>
				</div>
			</div>
		);
	}
}

export default Api;