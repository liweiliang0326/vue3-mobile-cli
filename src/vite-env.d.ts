/// <reference types="vite/client" />
declare module "*.vue" {
    import Vue from "vue";
    export default Vue;
}

interface ImportMetaEnv {
    [key: string]: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

declare var $dayjs: any;

declare var $Tools: {
    cloneDeep: any;
    showToast: any;
    getUrlParamsFun: (url: string, params: string) => any;
    telRegFun: (tel: string) => boolean;
    telEncryptFun: (tel: string) => string
    carNumberRegFun: (carNumber: string) => boolean
    getDeviceTypeFun: () => string
}; // 声明 Tools 存在于全局作用域

declare var $Ghttp: {
    httpGetProjectCount: any;
    httpPostPM10Top5: any;
};