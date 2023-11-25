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
/**导出*/
export {B1,AB1}

//默认导出
export default{B1,AB1}

import * as Mod from './16-namespace命名空间';
import a=Mod.B1.A2.a