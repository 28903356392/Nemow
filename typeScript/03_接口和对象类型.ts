
//定义接口数据类型
interface T{

  //readonly 只读属性
  readonly a:string,

  //？ 可以没有这个属性
  b?:number,

  //[propName: string] 定义任意属性
  [propName: string]:any
  
  //定义函数
  cb:()=>void
}

//重名的会合并
interface T{
  d:undefined
}

//S继承T的数据类型
interface S extends T{
  c:true,
}


const dataT:S={
  a:'asdasd',
  b:0,
  c:true,
  d:undefined,
  s:true,
  cb:()=>{
    console.log(dataT.b);
  }
}

dataT.cb()