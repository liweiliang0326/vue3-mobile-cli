 Vue 3 + TypeScript + Vite

## 开发规范

1、页面：页面以小写驼峰命名方式命名页面文件夹，命名要求简洁、语义化 例如 用户信息页面 '/src/views/userInfo/userInfo.vue'，内部vue文件与文件夹名字相同，页面内部根元素calss以小写驼峰转为下划线分割，以 '_page' 结尾，例如 'user_info_page';

2、组件：
    2.1、全局组件以 'Global' 开头命名，内部根元素class以 'global_' 命名，置于 '/src/components/' 文件夹，然后在 '/src/components/globalComponentsts' 文件内引入;
    2.2、局部组件以 'Local' 开头命名，内部根元素class以 'local_' 命名，置于 '/src/views/当前页面/components/' 文件夹;

3、方法：全局方法置于 '/src/utils/Tools.ts' 文件内，然后在 vite.config.ts 内注册为全局变量 $Tools, 在 '/src/vite-env.d.ts' 内声明方法类型;

4、接口：
    接口以 'http' 开头，其次为接口方法、接口主要作用;

    例如：表示这是一个以get请求获取用户列表的接口
 	httpGetUserListFun(params) {
 		return http({
 			method: 'get',
 			url: '/test/user-list',
 			params,
 		});
 	}

    4.1、全局接口置于 '/src/api/module/' 文件夹内, 然后在 '/src/api/globalService.ts' 文件内统一引入;
    在 vite.config.ts 内注册为全局变量 $Ghttp, 在 '/src/vite-env.d.ts' 内声明方法类型;

    4.2、局部接口置于 '/src/views/当前页面/localService.ts' 文件内;
    局部接口以 "import $Lhttp from './localService.ts'" 的形式引入;


5、hooks: 
    4.1、全局hooks以 'useGlobal' 开头命名，置于 '/src/hooks/' 文件夹内;
    4.2、局部hooks以 'useLocal' 开头命名，置于 '/src/views/当前页面/hooks/' 文件夹内;

6、types: 
    5.1、全局type以 'GlobalType' 开头命名，置于 '/src/types/globalTypes.ts' 文件内;
    5.2、局部type以 'LocalType' 开头命名，置于 '/src/views/当前页面/localTypes.ts' 文件内;

## 代码规范

DOM元素 按指令、属性、方法和 a -> z的顺序排列，例如：
<div v-for v-if v-model v-show  name='..' :src='..' type='..' @click @delete @touch ></div>

引入组件时，如果组件有 slot，则包含闭合标签，例如：<test></test>; 如果组件没有slot，则不包含闭合标签，例如：<test/>;

调用方法时，如果方法需要传参时，调用时则传对应参数，例如：@click='testFun('..')'; 如果方法不需要传参时，调用时则不包含括号，例如：@click='testFun';

声明方法以箭头函数形式声明，以 'Fun' 结尾，例如：const testFun = () => {};


## 注册及使用全局组件和方法

main.ts 内引入全局方法：
import { Button, showToast, Toast } from 'vant';
import { cloneDeep } from 'lodash-es';
import { carNumberRegFun, getUrlParamsFun, telRegFun,  } from '@/utils/Tools';

main.ts 内注册全局方法：
app.config.globalProperties.$vantApi = { showToast };
app.config.globalProperties.$lodash = { cloneDeep };
app.config.globalProperties.$Tools = { carNumberRegFun, getUrlParamsFun, telRegFun };

页面/组件 调用全局方法示例：
import { getCurrentInstance } from 'vue';
const { proxy } = getCurrentInstance() as any;
const { $vantApi, $lodash, $Tools } = proxy;


## 部署相关


1、安装依赖包: pnpm i ;
2、运行项目: pnpm dev 或 pnpm serve ;
3、测试环境打包: pnpm build:dev ;
4、生产环境打包: pnpm build:prod ;
打包后会执行 ./build/createZip.js 文件，将 dist 文件夹压缩为 zip 格式压缩包，然后将压缩包上传到对应的堡垒机环境路径 ;
上传到对应的堡垒机环境路径后可执行下面两种方式解压部署(执行解压部署命令前，先手动删除 assets、dist、index.html、vite.svg 4个文件/文件夹，命令行删除不了):

方式一、分步部署:
unzip 压缩包名称.zip ;
cd ./dist ;
cp -r 项目线上部署路径/dist/* ../ ;
cd .. ;

方式二、多命令一次性部署:
unzip 压缩包名称.zip && cd ./dist && cp -r -f 项目线上部署路径/dist/* ../ && cd .. ;


