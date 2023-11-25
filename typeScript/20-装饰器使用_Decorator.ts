//1.类装饰器    ClassDecorator
//2.属性装饰器  PropertyDecorator
//3.参数装饰器  ParameterDecorator
//4.方法装饰器  MethodDecorator  PropertyDescriptor
//5.元数据      import 'reflect-metadata'




//class类装饰器

const vv:ClassDecorator=(tag:Function)=>{
  tag.prototype.getTime=<T>(age:T):T=>{
    return age
  }
}

@vv
class a11{
  constructor(){
    
  }
}

//别名any 否则报错
console.log((new a11() as any).getTime('123'));




//装饰器工厂
const vvv=<T>(name?:T):ClassDecorator=>{
  // console.log(name);
  return (tag:Function)=>{
    tag.prototype.getTime=<T>(age:T):T=>{
      return age
    }
  }
}

@vvv('asd')
@vvv('asdasd')
@vvv()
class a22{
  constructor(){

  }
}

//别名any 否则报错

console.log((new a22() as any).getTime(1223));




//方法装饰器  属性装饰器

const met:MethodDecorator=(...args)=>{//方法
   console.log(args);
}


const pro:PropertyDecorator=(...args)=>{//属性
  console.log(args);
}

const par:ParameterDecorator=(...args)=>{//参数
  console.log(args);
}

class aaa2{
  @pro
  name:string = 'ss'
  constructor(){

  }
  @met
  getName(@par age:string ='123'):string{
    return age
  }
}

console.log(new aaa2());
//?方法
// [
//   {},
//   'getName',
//   {
//     value: [Function: getName],
//     writable: true,      是否可读写
//     enumerable: false,   是否可枚举
//     configurable: true   是否可配置
//   }
// ]

//?属性   [ {}, 'name', undefined ]
//       构造函数或实例 名字  

//?参数   [ {}, 'getName', 0 ]
//       构造函数或实例 名字  索引






