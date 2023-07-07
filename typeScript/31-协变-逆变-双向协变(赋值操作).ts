//!协变

//当属性多的一个包含属性少的变量时，可以产生协变  赋值操作

  //*多赋少
  
interface A {
  name:string
}

interface B {
  name:string
  age:number
  sex:string
}

let a:A = {
  name:"老墨我想吃鱼了",
}

let b:B = {
  name:"老墨我不想吃鱼",
  age:33,
  sex:"女"
}

a = b

console.log(a);
console.log(b);

//!逆变

//函数上 函数赋值 少赋多

let fna = (params:A) => {
 
}
let fnb = (params:B) => {
    
}
 
// fna = fnb //错误
 
fnb = fna //正确


//!双向协变


//设置tsconfig.json   属性strictFunctionTypes=false,可进行双向赋值操作 双向协变