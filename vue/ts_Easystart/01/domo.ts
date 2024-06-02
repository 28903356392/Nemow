const a = ()=>{
  let flag: boolean = true
  let num: number = 1
  let str: string = '1'
  let obj: object = {}
  let arr: Array<string> = []
  let any: any = 2
  let un: undefined = undefined
  let n: null = null

  let n1: number = 100
  // n1 = '200'

  //*1 联合类型 定义多种类型
  let id: string | number = 1
  id = '200'

  // 任意类型
  let x1: any = 100
  x1 = '200'
  x1 = true

  //*2 数字类型的定义 类型+[] number[]
  let arr1: number[] = [1, 2]
  let arr2: string[] = ['1']
  let arr3: (number | string)[] = ['1', 2]

  // 数组泛型
  let arr4: Array<number | string> = ['1', 2]

  //*3 object 对象的类型定义
  let o1 = {
    id: 1,
    user: 'o1',
    age: 18
  }

  /**
   *!  4 interface
   ** 在面向对象语言中，接口（Interfaces）是一个重要概念，是对行为的抽象
   ** 可用于对[对象的形状（Shape）]进行描述
   *! 添加前缀I 方便识别为接口
  */
  interface IPerson {
    age: number; // 确定属性
    name?: string; // 可选属性
    [propName:string]:any // 任意属性 propName可任意命名，效果一样
  }
  let o2: IPerson = {
    age: 1,
    id:'2',
    action:(e:any)=>{
      return e
    }
  }

  // 函数 function 输入类型 输出类型
  function sun(n1:number,n2:number){
    return n1+n2
  }
  sun(1,2) // 3

  function fn(n1:number,n2:number):void{
    if(n1>n2){
      console.log('ok');
      
    }
  }
  fn(2,1) // 'ok'

  // 扩展提
  interface IUser{
    id:number,
    user:string,
    titel:string
  }
  let items:Array<IUser>=[
    {id:1,user:'1',titel:'1'}
  ]

  // 泛型（Generics) 指在定义函数、接口或者类的时候，不要预先指定具体的类型，而是使用的时候再指定类型的一种特性
  function f1(id:number,count:number):number[]{
    return [id,count]
  }
  f1(10,100)
  function f2(a:string,b:string):string[]{
    return [a,b]
  }
  f2('1','20')

  // 泛型变量T T表示任何类型
  function f3<T>(a:T,b:T):T[]{
    return [a,b]
  }
  f3('1','20')
  f3(1,20)

  //T表示任何类型
  // 泛型约束
  interface ILength{
    length:number
  }

  function f4<T extends ILength>(s:T):number{
    return s.length
  }
  f4<string>('Hello')
  f4([1,2,3,4,5])
  
  // 可以在接口后或者函数前定义T
  interface Iinspostion<T>{
    <T>(a:T,b:T):boolean
  }
  // 扩展提 简化代码 三元和全等简化函数
  // 定义一个函数，判断传入的参数是否一样
  // function fn1<T>(s1:T,s2:T):boolean{
  //   return s1===s2
  // }
  // fn1(1,1)

  let fn1:Iinspostion<string>=(s1,s2)=>s1===s2 

  // function fn2<T>(s1:T,s2:T):boolean{
  //   if(s1>s2){
  //     return true
  //   }else{
  //     return false
  //   }
  // }

  let fn2=<T>(s1:T,s2:T):boolean=>s1>s2?true:false
}
a() 