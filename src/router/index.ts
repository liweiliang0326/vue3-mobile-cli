import { createRouter, createWebHashHistory } from 'vue-router';

// 路由配置
export const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			// 首页
			path: '/',
			redirect: '/home'
		},
		{
			// 首页
			path: '/home',
			name: 'home',
			meta: {
				title: '首页',
			},
			component: () => import('@/views/home/home.vue'),
		},
		{
			// 二级
			path: '/second',
			name: 'second',
			meta: {
				title: '二级页面',
			},
			component: () => import('@/views/second/second.vue'),
		},
	],
});

router.beforeEach((to) => {
	document.title = to.meta.title as string;
	console.log('当前页面地址：', to.fullPath);
});