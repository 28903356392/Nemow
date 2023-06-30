/***
 *! Proxy 拦截器   
 *! Reflect 元存储
*/


let xxx={
  name:'yang',
  age:18
}

const namexxx = (Y:any)=>{
  return new Proxy(Y,{
    //拦截对象的读取
    get(target,key,receiver){//获取
       return Reflect.get(target,key,receiver)
    },  

    //拦截对象设置            
    set(target,key,value,receiver){//设置    
      return Reflect.set(target,key,value,receiver)
    },	  
    
    //'eyeCount' in targetObj // true 
    has(target,key){// 检查是否含有该属性
      return Reflect.has(target,key)
    },	          
    
    //拦截对象删除该属性
    deleteProperty(target,key){//删除该属性
       return Reflect.deleteProperty(target,key)
    },	     
    
    //获取原型
    getPrototypeOf(target){
      return Reflect.getPrototypeOf(target)
    },	 
    
    //设置原型 并删除原来的 
    setPrototypeOf(target,proto){
      //proto 原型方法
      return Reflect.setPrototypeOf(target,proto)
    },	        
    
    //不可扩展对象
    isExtensible(target){
      return Reflect.isExtensible(target)
    },	  
    
    /**
     * 判断该对象是否可扩展
    */
    preventExtensions(target){
      return Reflect.preventExtensions(target)
    },	     

    //返回对象属性的描述符   可读、枚举、配置1等
    getOwnPropertyDescriptor(target,key){
      return Reflect.getOwnPropertyDescriptor(target,key)
    },

    //修改对象属性描述属性配置
    defineProperty(target,key,proto){
      return Reflect.deleteProperty(target,key)
    },    
    
    //返回对象键的数组格式
    ownKeys(target){
      return Reflect.ownKeys(target)
    },	   
    
    //拦截函数的调用
    apply(target,Arg,Array){
      return Reflect.apply(target,Arg,Array)
    },	          
    
    //拦截new操作符
    construct(target,array){
      return Reflect.construct(target,array)
    },             
  })
}
namexxx(xxx)





//元储存
let Y={
  name:"人",
  age:'asd'
}

class qa{
  get(){
    console.log('asdasd');
  }
}

const aq={
name:'22',
get(){
  console.log(this.name);
}
}


let attributes ={ 
   value: '样',
   writable: true,
   enumerable: true,
   configurable: true
  }

/**
**    Reflect.get(Y,)	                         获取对象身上某个属性的值
**    Reflect.set()	                         在对象上设置属性
**    Reflect.has()	                         判断一个对象是否存在某个属性
**    Reflect.deleteProperty()	               删除对象上的属性
**    Reflect.getPrototypeOf()	               获取指定对象原型的函数
**    Reflect.setPrototypeOf()	               设置或改变对象原型的函数
**    Reflect.isExtensible()	                 判断一个对象是否可扩展 （即是否能够添加新的属性）
**    Reflect.preventExtensions()	           阻止新属性添加到对象
**    Reflect.getOwnPropertyDescriptor()	     获取给定属性的属性描述符
**    Reflect.defineProperty()          	     定义或修改一个对象的属性
**    Reflect.ownKeys()	                     返回由目标对象自身的属性键组成的数组
**    Reflect.apply()	                       对一个函数进行调用操作，同时可以传入一个数组作为调用参数
**    Reflect.construct()	                   对构造函数进行 new操作，实现创建类的实例
 * **/


//获取
Reflect.get(Y,'age')	                 

//设置
Reflect.set(Y,'age','111')	   
console.log(Reflect.set(Y,'age','111')	);//true
              

//检查是否含有该属性
Reflect.has(Y,'name')	 
console.log(Reflect.has(Y,'name')	);//true

//删除该属性
Reflect.deleteProperty(Y,'age')	
console.log(Reflect.deleteProperty(Y,'age')	);//true

//获取原型
Reflect.getPrototypeOf(Y)

//设置原型 并删除原来的   
Reflect.setPrototypeOf(Y,qa)	 
console.log((Y as any).prototype);  //{}

//不可扩展对象
Reflect.isExtensible(Y)	           

//判断该对象是否可扩展
Reflect.preventExtensions(Y)	     

//返回对象属性的描述符   可读、枚举、配置1等
Reflect.getOwnPropertyDescriptor(Y,'name')
console.log(Reflect.getOwnPropertyDescriptor(Y,'name'));//{ value: '人', writable: true, enumerable: true, configurable: true }

//修改对象属性描述属性配置
Reflect.defineProperty(Y,'name',attributes)
console.log(Y);   //attributes{ value: '人', writable: true, enumerable: true, configurable: true }
         
//返回对象键的数组格式
Reflect.ownKeys(Y)	 

//对一个函数进行调用操作，同时可以传入一个数组作为
Reflect.apply(aq.get,aq,[1,2,3])	                 
console.log( Reflect.apply(aq.get,aq, [1,2,3]));


//
function Person12 (name:string, hobby:string){
console.log(`${name}喜欢${hobby}`);
return `${name}喜欢${hobby}`
}

// 对构造函数进行 new操作，实现创建类的实例
const person = Reflect.construct(Person12, ['一碗周','coding'],Person12)


       

/** 
*!    总结
*!    Reflect对象提供哪些静态方法，都是可以通过另一种方式来完成的，那为什么还要提供一个Reflect对象呢？
*!    
*!    这是因为前面的那十三种操作，可能来自不同的对象里面的方法，有全局的、有Object的、有Function的，但是提供了Reflect对象之后就将前面所有的操作统一到了一个对象下面 ，也统一了操作方式 。
**/

//https://blog.csdn.net/weixin_46163658/article/details/121960840?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522168794650316800225577638%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=168794650316800225577638&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-1-121960840-null-null.142^v88^control,239^v2^insert_chatgpt&utm_term=es%20Reflect&spm=1018.2226.3001.4187
