//*进阶用法 Partial   Pick

/**
 * Make all properties in T optional
 * 将T中的所有属性设置为可选
 * 与ts自带的Partial冲突才加的Partialed,可直接使用Partial
 */
  type Partialed<T> = {
    [P in keyof T]?: T[P];
};


type PersonS = {
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
type p =Partialed<PersonS>


//!

/**
 * From T, pick a set of properties whose keys are in the union K,
 * 从类型定义T的属性中，选取指定一组属性，返回一个新的类型定义。
 * 返回"text" | "age" 并组成新类型定义
 * 与ts自带的Pick冲突才加的Picked,可直接使用Pick
 */
type Picked<T, K extends keyof T> = {
  [P in K]: T[P];
};


type Ex = "text" | "age"

type C =Picked<PersonS,Ex>

