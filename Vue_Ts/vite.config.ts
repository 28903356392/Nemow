import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint' // 新增


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslint()],
})
