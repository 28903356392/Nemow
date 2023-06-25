//联合类型

var Phone:number | string='1234-23423'
Phone=1232342

function Data(stage:boolean | number):boolean{
    return !!stage
}
Data(true)
Data(1)



//交叉类型

interface Man{
    number:number
}
interface Mta{
    bable:string
}
const xiao =(data:Man & Mta)=>{
    // console.log(data);
    
}
xiao({number:12,bable:'32'})


//类型断言   as
//语法：　　值 as 类型　　或　　<类型>值  value as string  <string>value

interface A{
    run:string
}
interface B{
    build:string
}

const yu=(type:A | B ):string=>{
    //添加不存在的属性用 any断言
    (type as any).abc=123
    return (type as B).build
}
yu({build:'sda'})


// let names = 'sda' as const
// names = 'asd'

let as1=[1,2] as const
const as2=[1,2]

// as1.unshift(30) //断言 as const 后数组为只读
as2.unshift(3)
console.log(as1,as2);


//断言在编译后会删除，不具备影响
function sa(tru:any):boolean{
    console.log(tru as true);//返回 23
    return tru as true
}

sa(23)




