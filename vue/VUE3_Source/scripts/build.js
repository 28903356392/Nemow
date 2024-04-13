// 进行打包 monerepo
// 1 获取 打包目录

const fs =require("fs")
// 获取目录子模块
const dirs = fs.readdirSync("packages")
console.log(dirs);