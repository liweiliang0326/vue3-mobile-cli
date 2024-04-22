import axios from 'axios';
// import qs from 'qs';
import { closeToast, showToast, showLoadingToast, } from 'vant';

const http = axios.create({
	baseURL: import.meta.env.VITE_APP_API,
	timeout: 20000, // 请求超时时间
});

//请求拦截器
http.interceptors.request.use(
	(request: any) => {
		// if (request.method === 'delete') {
		// 	request.paramsSerializer = function (params) {
		// 		return qs.stringify(params, { arrayFormat: 'repeat' });
		// 	};
		// }

		showLoadingToast({
			duration: 0,
			forbidClick: true,
			message: '加载中...',
		});

		return request;
	},
	(err: any) => {
		//对请求错误做些处理
		return Promise.reject(err);
	},
);

//响应拦截器
http.interceptors.response.use(
	(response: any) => {
		//对响应数据处理
		closeToast();
		return response.data;
	},
	(err: any) => {
		//对响应错误 处理
		closeToast();

		// 请求超时处理
		if (err.message.includes('timeout')) {
			showToast('请求超时');
			return;
		}
		// 不同错误状态码处理
		const code = err.response.status;
		switch (code) {
			case 400:
				console.log('请求错误');
				break;
			case 401:
				console.log('未授权');
				break;
			case 403:
				console.log('禁止访问');
				break;
			case 404:
				console.log('页面消失');
				break;
			case 500:
				console.log('服务器内部错误');
				break;
			case 502:
				console.log('网关错误');
				break;
		}

		return Promise.reject(err);
	},
);
export default http;
