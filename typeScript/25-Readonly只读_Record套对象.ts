//  Readonly 只读  Record 套一层对象

/**
 * !Readonly
 * Make all properties in T optional
 * 将T中的所有属性设置为只读
 * 与ts自带的Partial冲突才加的Partialeds,可直接使用Partial
 */
  type Partialeds<T> = {
    readonly [P in keyof T]: T[P];
};

type Personed = {
  name:string,
  text:string
  age:number
}

/**
 * 转换后全部属性为只读 keyof取出属性变成再声明为只读,
 * in类似for in遍历   ,
 * readonly变为只读,
 * T[P]索引访问,
 **/
type ps =Partialeds<Personed>



/**
 * ! Record ，
 * * 作用：返回一个自定义的键包裹类型定义
 * 0:{
 *   name:"",
 *   text:'',
 *   age:1
 * }
 * 限制键值对
 **/ 

 type Records<K extends keyof any, T>={
    [P in K]:T
 }
 
 type sa=Records<0,Personed>
 
 let ssss:sa={
  0:{
    name:"",
    text:'',
    age:1
  }
 }