//函数传参一一对应
//声明 ? 后为可选参数
//参数默认值 = 声明 
const fn =(name:string='1',data?:number)=>{
  return name + data
}

fn('12',4)


//接口定义函数
interface add{
    (num:number,data:number):number
}

const A:add=(num,num2):number=>{
    return num + num2
}

A(1,2)

interface User{
    admin:string,
    name:number
}

const aaa=(user:User):User=>{
    return user
}

aaa({admin:'sss',name:23})





//定义剩余函数
const fns=(async:Array<number>,...item:string[]):any[]=>{
   return item
}

let asy:Array<number>=[1,2,3]
fns(asy,'3','4','5','6')




//函数重载 参数类型限制在重载的过程中，参数可选 
function tion(params:number):void
function tion(params:string,params2:number):void
function tion(params:any,params2?:any):void{
    console.log(params,params2);
    
}

tion(12)
tion('123',23)