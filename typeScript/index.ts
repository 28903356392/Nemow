//元储存
let Y={
    name:"",
    age:'asd'
}

class qa{
    get(){
      console.log('asdasd');
    }
}

//?    Reflect.get(Y,)	                         获取对象身上某个属性的值
//?    Reflect.set()	                         在对象上设置属性
//?    Reflect.has()	                         判断一个对象是否存在某个属性
//?    Reflect.deleteProperty()	               删除对象上的属性
//?    Reflect.getPrototypeOf()	               获取指定对象原型的函数
//?    Reflect.setPrototypeOf()	               设置或改变对象原型的函数
//?    Reflect.isExtensible()	                 判断一个对象是否可扩展 （即是否能够添加新的属性）
//?    Reflect.preventExtensions()	           阻止新属性添加到对象
//?    Reflect.getOwnPropertyDescriptor()	     获取给定属性的属性描述符
//?    Reflect.defineProperty()          	     定义或修改一个对象的属性
//?    Reflect.ownKeys()	                     返回由目标对象自身的属性键组成的数组
//?    Reflect.apply()	                       对一个函数进行调用操作，同时可以传入一个数组作为调用参数
//?    Reflect.construct()	                   对构造函数进行 new操作，实现创建类的实例


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
console.log(Y);

// Reflect.isExtensible()	           
// Reflect.preventExtensions()	     
// Reflect.getOwnPropertyDescriptor()
// Reflect.defineProperty()          
// Reflect.ownKeys()	               
// Reflect.apply()	                 
// Reflect.construct()	             

//https://blog.csdn.net/weixin_46163658/article/details/121960840?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522168794650316800225577638%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=168794650316800225577638&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-1-121960840-null-null.142^v88^control,239^v2^insert_chatgpt&utm_term=es%20Reflect&spm=1018.2226.3001.4187