import { defineConfig , loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
import createVitePlugins from './vite/plugins'
// https://vitejs.dev/config/
export default defineConfig(({mode, command })=>{
  const env = loadEnv(mode, process.cwd())
  return {
     plugins: createVitePlugins(env, command === 'build'),
     resolve: {
      // https://cn.vitejs.dev/config/#resolve-alias
      alias: {
        // 设置路径
        '~': resolve(__dirname, '.', './'),
        // 设置别名
        '/@': resolve(__dirname,'.', './src/')
      },
      // https://cn.vitejs.dev/config/#resolve-extensions
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
    // vite 相关配置
    server: {
      port: env.VITE_PORT,
      strictPort: false,  //设为true时端口被占用则直接退出，不会尝试下一个可用端口
      host: "localhost",
      https: false,
      cors: true,//为开发服务器配置 CORS , 默认启用并允许任何源
      open: true,//服务启动时自动在浏览器中打开应用
      force: true,//是否强制依赖预构建
      hmr: false,//禁用或配置 HMR 连接
      proxy: {
        // https://cn.vitejs.dev/config/#server-proxy
        '/dev-api': {
          target: 'http://localhost:8080',
          changeOrigin: true,
          rewrite: (p) => p.replace(/^\/dev-api/, '')
        }
      },
    },
    //静态资源服务的文件夹
      publicDir: "public",
      base: command === 'build'?env.VITE_PUBLIC_PATH:'',
      //静态资源处理
      assetsInclude: "",
      //控制台输出的级别 info 、warn、error、silent
      logLevel: "info",
      // 设为false 可以避免 vite 清屏而错过在终端中打印某些关键信息
      clearScreen:true,
      //打包配置
      build: {
       //浏览器兼容性  "esnext"|"modules"
       target: "modules",
       //指定输出路径
       outDir: "dist",
       //生成静态资源的存放路径
       assetsDir: "assets",
       //小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项
       assetsInlineLimit: 4096,
       //启用/禁用 CSS 代码拆分
       cssCodeSplit: true,
       //构建后是否生成 source map 文件
       sourcemap: false,
       //自定义底层的 Rollup 打包配置
       rollupOptions: {
         output: {
			    	entryFileNames: `assets/[name].${new Date().getTime()}.js`,
			    	chunkFileNames: `assets/[name].${new Date().getTime()}.js`,
			    	assetFileNames: `assets/[name].${new Date().getTime()}.[ext]`,
			    },
       },
       //@rollup/plugin-commonjs 插件的选项
        //  commonjsOptions: {
        //  },
       //构建的库
      //  lib: {
      //  },
       //当设置为 true，构建后将会生成 manifest.json 文件
       manifest: true,
       // 设置为 false 可以禁用最小化混淆，
       // 或是用来指定使用哪种混淆器
       // boolean | 'terser' | 'esbuild'
       minify: "terser", //terser 构建后文件体积更小
       //传递给 Terser 的更多 minify 选项。
       terserOptions: {
       },
       //设置为 false 来禁用将构建后的文件写入磁盘
       write: true,
       //默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录。
       emptyOutDir: true,
       //启用/禁用 brotli 压缩大小报告
       brotliSize: true,
       //chunk 大小警告的限制
       chunkSizeWarningLimit: 1000
      }
  }
})
