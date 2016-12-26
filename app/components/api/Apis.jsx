import React, { Component } from 'react';
import Admin from '../layouts/Admin';
import Api from './Api';
import css from './api.css';
import { markdown } from 'markdown';

export default class Apis extends Component {
	state = {
		api: {
		  "resource": "中层干部 自评表 查看修改",
		  "http_method": "GET",
		  "route": "/middle_managers/self_evaluation",
		  "description": "中层干部 自评表 查看 成功",
		  "explanation": null,
		  "parameters": [
		    {
		      "required": true,
		      "scope": "self_evaluation",
		      "name": "activity_year",
		      "description": "考核年度"
		    }
		  ],
		  "response_fields": [

		  ],
		  "requests": [
		    {
		      "request_method": "GET",
		      "request_path": "/middle_managers/self_evaluation?self_evaluation[activity_year]=2016",
		      "request_body": null,
		      "request_headers": {
		        "Accept": "application/json",
		        "X-User-Token": "m_qwertyuiop1",
		        "X-User-Jobnum": "middle_manager_job_num",
		        "Host": "example.org",
		        "Cookie": ""
		      },
		      "request_query_parameters": {
		        "self_evaluation": {
		          "activity_year": "2016"
		        }
		      },
		      "request_content_type": null,
		      "response_status": 200,
		      "response_status_text": "OK",
		      "response_body": "{\n  \"id\": 1,\n  \"middle_manager_id\": 1,\n  \"activity_id\": 1,\n  \"created_year\": null,\n  \"created_at\": \"2016-11-25T15:49:09.178+08:00\",\n  \"updated_at\": \"2016-11-25T15:49:09.178+08:00\",\n  \"info\": {\n    \"name\": \"谌明举\",\n    \"department_and_duty\": \"计算机应用系 党支部书记、副主任\",\n    \"job\": \"基层党建工作、学生教育与管理\"\n  },\n  \"content\": {\n    \"duties\": [\n\n    ],\n    \"self_evaluation_totality\": \"\"\n  }\n}",
		      "response_headers": {
		        "X-Frame-Options": "SAMEORIGIN",
		        "X-XSS-Protection": "1; mode=block",
		        "X-Content-Type-Options": "nosniff",
		        "Content-Type": "application/json; charset=utf-8",
		        "ETag": "W/\"3d6786b39d3d0809435b1113046b6bec\"",
		        "Cache-Control": "max-age=0, private, must-revalidate",
		        "X-Request-Id": "79de80f3-db40-471e-a314-e76d50fa5c3d",
		        "X-Runtime": "0.019254",
		        "Vary": "Origin",
		        "X-Rack-CORS": "preflight-hit; no-origin",
		        "Content-Length": "360"
		      },
		      "response_content_type": "application/json; charset=utf-8",
		      "curl": null
		    }
		  ]
		}
	}

	render() {
		return (
			<Admin>
				<div className={css.apis_container}>
					<div className={css.apis}>
						{/* api列表 */}
					</div>
					{/* api 文档 */}
					<Api api={this.state.api}/>
				</div>
			</Admin>
		);
	}
}
