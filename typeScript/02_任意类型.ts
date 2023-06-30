//所有类型都可分配给 any所有 | unknown未声明   unknown更加安全、严格

//unknown 可赋值对象只有 unknown any 

//没有这个属性 不会报错
let b:any={a:"sada"}
console.log(b.a);

//如果是unknow 是不能调用属性和方法
let b1:unknown={a1a:"sada"}
//console.log(b1.a1a);//报错



//类型分配优先级

//1. any 、 unknown
//2. Object    包含下面的
//3. Numbel、String、Boolean
//4. numbel、string boolean
//5. "asd" 0 false 字面量
