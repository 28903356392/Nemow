import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    host: 'localhost',
    port: 9090,
    open: true,
    proxy: {
      '/api': {
        target: 'http://192.168.1.1:80',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  },
  // 配置打包
  build: {
    outDir: 'dist', // 相对根目录下的路径
    chunkSizeWarningLimit: 1500, // 触发chunk警告大小
    rollupOptions: {
      output:{
		  entryFileNames: `static/js/[name].${new Date().getTime()}.js`,
	      chunkFileNames: `static/js/[name].${new Date().getTime()}.js`,
	      // css文件名
	      assetFileNames: `static/[ext]/[name].${new Date().getTime()}.[ext]`
	      // 比如你想构建出来的css为dist/index.css，那么你可以这样
	      //  assetFileNames: `index.[ext]`
	  },
	}
  
  },
})
