//object、Object 以及{}的区别用法

/**
 * !  object 是一个表示非原始类型的类型。它可以包括任何非原始类型，如数组、函数、对象等。
 * !  Object 是 JavaScript 中的内置对象，它是所有对象的基类。
 * !  {} 是一种简写形式，表示一个空对象。在 TypeScript 中，{} 可以用作类型注解，表示一个空对象类型。
*/



/**
 * * object 表示对象类型  
 * */ 
let a1:object={}

/**
 * *Object是JS的内置对象，表示所有对象的原型顶层 
*/
let a2:Object= Object


/**
 * *{}空对象,类型和Object一样在ts里面 没有Object的方法属性
*/
let a3={}