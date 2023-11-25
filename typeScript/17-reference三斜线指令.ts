/**
 * 导出的东西不可修改，只能在源文件修改
 * 三斜杠语法 编译后才能看见  与import差不多   它可以告诉编译器在编译过程中要引入的额外的文件
 * import 导入
 * export 导出
 * */
///<reference path="./01_基础数据类型.ts" />

//namespace 命名空间  避免全局变量造成的污染  
namespace BB1{
  export const c= 555
}

console.log(BB1)


//!使用第三方文件有时需要引入第三方声明文件  d.ts    声明文件引入
//明这个文件使用了 @types/node/index.d.ts里面声明的名字
///<reference types="node" />   



//对象时的导入模块，ts基本使用，配合export导出
import * as Mods from './16-namespace命名空间';

//默认导入，配合export default才可使用，不然会报错
import Modss from './16-namespace命名空间';

//函数，数据类型的导入模块
import Mod = require('./16-namespace命名空间');

//部分导入
import {
  B1,
  AB1 as beta,
} from './16-namespace命名空间';



//默认导出
export default 123

//声明一个导出一个
export var a=1

//写完最后引用导出 as可重命名
export {BB1 as SD}

//部分导出
export {
  B1,
  AB1 as beta,
} from './16-namespace命名空间';


//命名空间的导入导出
namespace AB1{
  export const a=<T>(age:T):T=>{return age}
  
  a<string>('asd')
}

namespace AB{
  //导入命名空间并导出到外层
  export import  A =AB1;
}

import * as express from "express"
express.get

