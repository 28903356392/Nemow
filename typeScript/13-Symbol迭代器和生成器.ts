//* Symbol

//todo symbol 的值是唯一的

let s1 =Symbol()
let s2 =Symbol()
// console.log(s1==s2); false


//todo 可作为对象属性的键

let s3 =Symbol()

let obj = {
   [s3]:'value'
}
// console.log(obj[s3]);


//todo 使用Symbol定义的属性不可通过遍历获取

let s4 = Symbol('node.js')
const obj1={
  [s4]:"yang",
  age:'23'
}

//1.for in
for (const key in obj1) {
  console.log(key);// age
}

//2.Object.keys
Object.keys(obj1)
console.log(Object.keys(obj1));//[ 'age' ]

//3.getOwnPropertySymbols
Object.getOwnPropertySymbols(obj1)
console.log(Object.getOwnPropertyNames(obj1));//[ 'age' ]

//4.JSON.stringify
JSON.stringify(obj1)
console.log(JSON.stringify(obj1));//{"age":"23"}

//!可拿到Symbol属性
//1.拿到具体的symbol属性，对象有几个拿几个
Object.getOwnPropertySymbols(obj1)
console.log(Object.getOwnPropertySymbols(obj1));

//2.es6的Reflect 拿到对象所有属性
Reflect.ownKeys(obj1)
console.log(Reflect.ownKeys(obj1));


//todo Symbol迭代器
//Symbol是唯一值，用.for方法可以实现相等 .for先查询全局注册表，有就取用，没有新建 
Symbol.for('sss') === Symbol.for('sss')  //true

var s5=[1,2,3,4,5]
let iterator=s5[Symbol.iterator]()
console.log(iterator.next());   //{ value: 1, done: false }
console.log(iterator.next());   //{ value: 2, done: false }
console.log(iterator.next());   //{ value: 3, done: false }
console.log(iterator.next());   //{ value: 4, done: false }
console.log(iterator.next());   //{ value: 5, done: false }
console.log(iterator.next());   //{ value: undefined, done: true }


//todo 生成器 是一种特殊的迭代器

function* ab(){
    yield 'sadads'
    yield 'sdsaff'
    return 'ss'
}

const ab1=ab()
console.log(ab1.next());  //  { value: 'sadads', done: false } 
console.log(ab1.next());  //  { value: 'sdsaff', done: false } 
console.log(ab1.next());  //  { value: 'ss', done: true } 


//! 可迭代对象封装
interface abb2{
  name:string,
  age:string,
  frien:string[]
}
class abb implements abb2{
  name:string
  age:string
  frien: string[];
  constructor(name:string,age:string,frien:string[]){
    this.name=name
    this.age=age
    this.frien=frien
  }
  *[Symbol.iterator](){
     yield* this.frien //yield遍历
  }
}


const abb1 = new abb('1','2',['asdad','sdfsf'])

for (const key of abb1) {
  console.log(key);
}







//? 以下为这些symbols的列表：

//! Symbol.hasInstance
//? 方法，会被instanceof运算符调用。构造器对象用来识别一个对象是否是其实例。

//! Symbol.isConcatSpreadable
//? 布尔值，表示当在一个对象上调用Array.prototype.concat时，这个对象的数组元素是否可展开。

//! Symbol.iterator
//?方法，被for-of语句调用。返回对象的默认迭代器。

//! Symbol.match
//? 方法，被String.prototype.match调用。正则表达式用来匹配字符串。

//! Symbol.replace
//? 方法，被String.prototype.replace调用。正则表达式用来替换字符串中匹配的子串。

//! Symbol.search
//? 方法，被String.prototype.search调用。正则表达式返回被匹配部分在字符串中的索引。

//! Symbol.species
//? 函数值，为一个构造函数。用来创建派生对象。

//! Symbol.split
//? 方法，被String.prototype.split调用。正则表达式来用分割字符串。

//! Symbol.toPrimitive
//? 方法，被ToPrimitive抽象操作调用。把对象转换为相应的原始值。

//! Symbol.toStringTag
//? 方法，被内置方法Object.prototype.toString调用。返回创建对象时默认的字符串描述。

//! Symbol.unscopables
//? 对象，它自己拥有的属性会被with作用域排除在外。



//* 1 迭代器对象
//* 本质就是一个对象，要符合迭代器协议
//* 
//* 有自己对应的next方法，next方法则返回一组数据{done:boolean, value:any}
//* 
//* 2 可迭代对象
//* 本质就是对象，要符合可迭代对象协议
//* 
//* 有[Symbol.iterator]方法，并且调用这个方法返回一个迭代器
//* 
//* 
//* 3生成器函数
//* 可以控制函数的暂停执行和继续执行
//* 
//* 通过function* bar() {} 这种形式定义
//* 
//* 不会立马执行，而是返回一个生成器，生成器是一个特殊的迭代器对象
//* 
//* yield 关键字可以控制函数分段执行
//* 
//* 调用返回生成器的next方法进行执行
