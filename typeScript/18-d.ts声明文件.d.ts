//todo  npm  声明文件可用npm 根据提示下载


// declare var 声明全局变量
// declare function 声明全局方法
// declare class 声明全局类
// declare enum 声明全局枚举类型
// declare namespace 声明（含有子属性的）全局对象
// interface 和 type 声明全局类型
/// <reference path="./14-泛型.ts"/> 三斜线指令


declare module 'express' {
  interface Router {
      get(path: string, cb: (req: any, res: any) => void): void
  }
  interface App {

      use(path: string, router: any): void
      listen(port: number, cb?: () => void): void
  }
  interface Express {
      (): App
      Router(): Router

  }
  const express: Express
  export default express
}

// 导入使用
// import express from 'express';
// 对着声明时导出的接口
// express.Router().get
// express().use
