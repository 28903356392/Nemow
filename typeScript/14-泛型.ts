//*  泛型

function Sub<T>(a:T):Array<T> {
  const params:Array<T> = [a]
  return params
}

console.log(Sub<Boolean>(false));[ false]

//函数泛型
function num<A>(a:A,b:A):Array<A>{
    return [a,b]
}
num<number>(1,2)

//接口泛型
interface num1<A>{
  name:A
}
function num2<A>(age:A):A{
  return age
}
const num3:num1<string>=num2

//字面量泛型
let num4:{<T>(age:T):T}
num4=function <T>(age:T):T{
  return age
}
num4<number>(123)


//泛型约束
interface len{
  length:number
}
//约束其为具有length属性的类型  A 继承 len得
function getlength<A extends len>(age:A){
  return age.length
}
console.log(getlength<string>('123'));


//其中使用了TS泛型和泛型约束。首先定义了T类型并使用extends关键字继承object类型的子类型，然后使用keyof操作符获取T类型的所有键，它的返回 类型是联合 类型，最后利用extends关键字约束 K类型必须为keyof T联合类型的子类型
function prop<A,K extends keyof A>(obj:A,key:K){
  return console.log(obj[key]);
  
}

let o = { a: 1, b: 2, c: 3 }

prop(o,'c')



//泛型类
class get<T>{
  att:T[]=[]
  add(a:T):T[]{
    return [a]
  }
}
const ass =new get<number|string>()
ass.att=['1',2,'3',4]
ass.add('123')
