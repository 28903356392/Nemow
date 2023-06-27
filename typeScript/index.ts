//三斜杠语法 编译后才能看见  与import差不多
///<reference path="./01_基础数据类型.ts" />

//namespace 命名空间  避免全局变量造成的污染
namespace A1{
  export const c= 555
}

console.log(A1)