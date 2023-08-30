import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'

/** JSX reate开发的语法*/
import vueJsx from '@vitejs/plugin-vue-jsx'

/** element plus 按需引入 */
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResover from 'unplugin-icons/resolver'

/** 路径配置 自带的path */
import { resolve } from 'path'
// 路径

// 配置快捷路径
const alias: Record<string, string> = {
  '@': resolve(__dirname, './src'),
}
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    base: '/',
    resolve: { alias },
    server: {
      hmr: {
        overlay: false,
      },
      proxy: {
        [env.VITE_BASE_API]: {
          target: env.VITE_BASE_URL,
          changeOrigin: true,
          rewrite: path => path.replace('^' + env.VITE_BASE_API, ''),
        },
      },
    },
    plugins: [
      vue(),
      eslintPlugin(),
      vueJsx({}),
      AutoImport({
        imports: ['vue', 'vue-router'],
        dts: './src/types/auto-import.d.ts',
        resolvers: [ElementPlusResolver(), IconsResover({ prefix: 'Icon' })],
      }),
      Components({
        resolvers: [ElementPlusResolver(), IconsResover({ enabledCollections: ['eq'] })],
        dts: './src/types/components.d.ts',
      }),
      Icons({
        autoInstall: true,
      }),
    ],
    // 配置打包
    build: {
      outDir: 'dist', // 相对根目录下的路径
      sourcemap: false, // 是否生成源map
      chunkSizeWarningLimit: 1500, // 触发chunk警告大小
      assetsDir: 'assets',
      minify: 'terser',
      rollupOptions: {
        output: {
          // 输出文件  https://rollupjs.org/guide/en/#big-list-of-options
          entryFileNames: `static/js/[name]-entry-[hash].${new Date().getTime()}.js`, // 用于从入口点创建的块的模式
          chunkFileNames: `static/js/[name]-chunk-[hash].${new Date().getTime()}.js`, // 用于命名代码拆分时创建的共享块的模式
          assetFileNames: `static/[ext]/[name]-asset-[hash].${new Date().getTime()}.[ext]`, // 用于命名自定义发射资产以包含在构建输出中的模式
          compact: true, // 这将缩小汇总生成的包装器代码。请注意，这不会影响用户编写的代码。此选项在捆绑预压缩代码时很有用
          manualChunks: {
            /** 创建自定义共享公共块 */
            vue: ['vue'],
          },
        },
      },
      terserOptions: {
        /** 删除console.*的代码   删除断点 */
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
        ie8: true,
        output: {
          /** 保留所有注释*/
          comments: true,
        },
      },
    },
    css: {
      preprocessorOptions: {
        // 给 sass-loader 传递选项
        scss: {
          // additionalData 的值就是要注入的字符串 注入变量
          // additionalData: '@import "@/style.scss";',
        },
      },
    },
  }
})
