//命名空间  嵌套  抽离  简化  合并

//简化  嵌套
namespace B1{
  export namespace A2{
    export const a=<T>(age:T):T=>{return age}
    a<string>('asd')
  }
}

//合并
namespace AB1{
  export const a=<T>(age:T):T=>{return age}

  a<string>('asd')
}

namespace AB1{
  export const b=<T>(age:T):T=>{return age}

  a<string>('asd')
}