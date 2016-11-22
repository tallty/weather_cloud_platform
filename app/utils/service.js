import Agent from 'superagent';

class Service {
	get(url, headers){
		headers = headers || {};
		return new Promise((resolve, reject) => {
			Agent
			.get(url)
			.set('Accept', 'application/json')
			.set(headers)
			.end((err, res) => {
				if (!err || err === null) {
					resolve(res);
				} else {
					reject(err);
				}
			})
		})
	} 

	post(url, headers, params) {
		headers = headers || {};
		params = params || {};
		return new Promise((resolve, reject) => {
			Agent
			.post(url)
			.set('Accept', 'application/json')
			.set(headers)
			.send(params)
			.end((err, res) => {
				if (!err || err === null) {
					resolve(res);
				} else {
					reject(err);
				}
			})
		})
	}
}

export default Service;