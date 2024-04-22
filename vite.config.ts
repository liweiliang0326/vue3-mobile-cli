import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";
import postCssPxToRem from "postcss-pxtorem";
import rollupPluginInject from '@rollup/plugin-inject';
// import rollupPluginNoderesolve from '@rollup/plugin-node-resolve';

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/lk-city-governance-h5/code-supervise/",
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          // 配置在将px转化为rem时 1rem等于多少px(因为我们搭配使用了amfe-flexible插件 此处我们需要设置的值应是UI设计稿全屏基准宽度的十分之一)
          // 当UI设计稿的全屏基准宽度是750px时 此处设置的值为75 但项目中使用了vant组件库 vant的设计稿总宽度是375px 其十分之一应是37.5(需要区分设置)
          rootValue({ file }: any) {
            return file.indexOf('vant') !== -1 ? 37.5 : 75
          },
          // 所有px均转化为rem
          propList: ["*"]
          // 若想设置部分样式不转化 可以在配置项中写出
          // eg: 除 border和font-size外 所有px均转化为rem
          // propList: ["*", "!border","!font-size"], 
        })
      ]
    },
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/css/mixins.scss";'
      }
    },
  },
  plugins: [
    vue(),
    rollupPluginInject({
      $dayjs: 'dayjs',
      $Tools: resolve('./src/utils/Tools.ts'), // 注册全局方法
      $Ghttp: resolve('./src/api/globalService.ts') // 注册全局接口
    }),
    // rollupPluginNoderesolve()
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  },
  server: {
    host: true,
    open: true,
    port: 9000,
    proxy: {
      "/dev-api": {
        target: "测试环境接口域名",
        changeOrigin: true,
        secure: false,
        // rewrite: (path) => path.replace(/^\/dev-api/, "")
      },
    }
  }
})
