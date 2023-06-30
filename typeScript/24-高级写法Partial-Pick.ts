//*进阶用法 Partial   Pick

/**
 * Make all properties in T optional
  将T中的所有属性设置为可选
 */
  type Partialed<T> = {
    [P in keyof T]?: T[P];
};


type Person = {
  name:string,
  text:string
  age:number
}

/**
 * 转换后全部属性为可选 keyof取出属性变成联合类型  ,
 * in类似for in遍历   ,
 * ?变为可选,
 * T[P]索引访问,
 **/
type p =Partialed<Person>


//!

/**
 * From T, pick a set of properties whose keys are in the union K,
 * 从类型定义T的属性中，选取指定一组属性，返回一个新的类型定义。
 * 返回"text" | "age" 并组成新类型定义
 */
type Picked<T, K extends keyof T> = {
  [P in K]: T[P];
};


type Ex = "text" | "age"

type A =Picked<Person,Ex>

