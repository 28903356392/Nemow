//  Readonly 只读  Record 套一层对象

/**
 * !Readonly
 * Make all properties in T optional
  将T中的所有属性设置为可选
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
 * 转换后全部属性为可选 keyof取出属性变成联合类型  ,
 * in类似for in遍历   ,
 * ?变为可选,
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




