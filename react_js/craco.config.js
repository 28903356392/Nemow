//path是nodejs内置模块
const path = require('path');
 
module.exports = {
  webpack: {
    alias: {
      // 使用 @ 表示 src 文件所在路径
      '@': path.resolve(__dirname, 'src')
    }
  }
}