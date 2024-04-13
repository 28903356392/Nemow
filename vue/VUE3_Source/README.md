# day1
## 1.初始化项目，创建项目架构目录
yarn init -y
![alt text](image.png)
## 2.配置package.json
  * "private": true,//启动
  "workspaces": [
    "package/*"
  ],// 配作用域，写代码的地方
  * 在每个单独作用域添加@vue/声明
  ![alt text](image-1.png)
## 3.安装ts
  yarn add typescript -W -D

## 4.使用命令生成tsconfig.json文件
  npx tsc --init

