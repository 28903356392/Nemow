//三斜杠语法 编译后才能看见  与import差不多   它可以告诉编译器在编译过程中要引入的额外的文件
///<reference path="./01_基础数据类型.ts" />

//namespace 命名空间  避免全局变量造成的污染  
namespace BB1{
  export const c= 555
}

console.log(BB1)


//!使用第三方文件有时需要引入第三方声明文件  d.ts    声明文件引入
//明这个文件使用了 @types/node/index.d.ts里面声明的名字
///<reference types="node" />   

