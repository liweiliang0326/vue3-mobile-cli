
import { useRouter } from "vue-router";

import { cloneDeep } from 'lodash-es';
const lodash = { cloneDeep }; // 按需引入lodash方法

import { showToast } from 'vant'; // 按需引入Vant辅助函数
const vantFuns = { showToast };

export default {
	...lodash,
	...vantFuns,

	/**
	 * 获取指定url的指定参数
	 * @param url 指定url
	 * @param params 指定参数的key
	 */
	getUrlParamsFun: (url: string, params: string): any => {
		let getParams = null;
		if (url.indexOf('?') > url.indexOf('#')) {
			const router = useRouter();
			getParams = router.currentRoute.value.query[params];
		} else {
			const newUrl = new URL(url);
			getParams = newUrl.searchParams.get(params);
		}
		return getParams === undefined ? null : getParams;
	},

	/**
	 * 手机号正则校验
	 * @param tel 手机号
	 */
	telRegFun: (tel: string): boolean => /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(tel),

	/**
	 * 前端加密手机号
	 * @param tel 手机号
	 */
	telEncryptFun: (tel: string): string => tel.slice(0, 3) + '****' + tel.slice(7),

	/**
	 * 车牌号正则校验
	 * @param carNumber 车牌号
	 */
	carNumberRegFun: (carNumber: string): boolean => /^(([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z](([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]))$/.test(carNumber),


	/**
	 * 获取设备类型
	 */
	getDeviceTypeFun: (): string => {
		const userAgent = window.navigator.userAgent;
		if (userAgent.indexOf("Android") > -1) {
			return 'android';
		} else if (userAgent.indexOf("iPhone") > -1 || userAgent.indexOf("iPod") > -1) {
			return 'ios';
		} else if (userAgent.indexOf("Mac") > -1 || userAgent.indexOf("Windows") > -1) {
			return 'pc';
		} else if (userAgent.indexOf("iPad") > -1) {
			return 'ipad'
		} else {
			return '未知设备'
		}
	},
}

