//*定义类
class Person{
  num:string
  constructor(num:string){
      this.num=num
  }
  run(){

  }
}


//*类的修饰符
class Person1{
  public num:string      //默认的 内部外部都可访问
  private num1:string    //只能在内部访问  私有变量
  protected num2:string  //只能在内部和子类中访问
  static nb:string       //只能在外部调用类.nb（Person1.nb） 静态属性方法
  constructor(num:string,num1:string,num2:string){
      this.num=num
      this.num1=num1
      this.num2=num2
  }
  static run(){         //函数添加后两个静态函数可以this.调用，外部类名可.出
    return console.log('run');
    
  }
}

class Person2 extends Person1{
  constructor(){
    super('num','num1','num2')
      this.num2=this.num
  }
  static run1(){
     return this.run()
     
  }
}
// Person1.nb
// Person2.nb
// Person2.run1()




//* interface 定义 类

interface Per{
  name1:string
  name2:number
  ser():void
}

interface Per1{
  name3:string
  name4:number
}

//抽像类 不可实例化，需要借助派生类
abstract class Pe{
  name5:string
  constructor(){
    this.name5='name'
  }
}

//派生类 继承 使用接口
class Pe1 extends Pe implements Per{
    name1:string
    name2:number
    constructor(){//类的方法
      super()
      this.name1='1'
      this.name2=0
    }
    ser(){

    }
}

