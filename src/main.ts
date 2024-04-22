import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router'; // 引入路由配置文件
import 'vant/lib/index.css'; // 全量引入Vant 组件样式
import { Button, Icon, Toast, Uploader } from 'vant'; // 按需引入Vant 组件及辅助函数
import globalComponents from '@/components/globalComponents'; // 引入自定义全局组件
import VConsole from 'vconsole';
import 'amfe-flexible'; // 根据设备宽度，设置根元素html大小，适配移动端
import '@/assets/css/global.scss'; // 引入全局css样式

// 如果是测试环境则显示 vconsole 插件
import.meta.env.VITE_ENV === 'development' && new VConsole();

const app = createApp(App);
app.use(router); // 注册路由
app.use(Button).use(Icon).use(Toast).use(Uploader); // 注册Vant 组件

// 注册自定义全局组件
for (const item in globalComponents) {
    app.component(item, globalComponents[item]);
}

app.mount('#app');
