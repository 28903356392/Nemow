//* Mixin 混入


//!   1.对象混入

interface name{
  name:string
}
interface name1{
  age:number
}


let na:name={
  name:'ASD'
}
let na1:name1={
  age:22
}

const nn=Object.assign(na,na1)
console.log(nn);


//!  2.类的混入


 class A1 {
  type: boolean = false;
  changeType() {
      this.type = !this.type
  }
}


 class A2 {
  name: string = '张三';
  getName(): string {
      return this.name;
  }
}


//?1

class C2 implements A1,A2 {
    type:boolean=false
    changeType(): void {}
    name: string='张三';
    getName(): string {return this.name}
}
console.log(Object.getOwnPropertyNames(Object.create(A2).prototype));


//?2
//获取A1,A2的原型到C2上  prototype原型


Mixins(C2, [A1, A2])

function Mixins(curCls:any,itemCls:any[]){
  itemCls.forEach(item=>{
    //Object.getOwnPropertyNames()可以获取对象自身的属性，除去他继承来的属性，
    Object.getOwnPropertyNames(item.prototype).forEach(name=>{
      curCls.prototype[name]=item.prototype[name]
    })
  })
}


