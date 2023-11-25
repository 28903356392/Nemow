
//*数字枚举 \\ 字符串枚举
//存储了正向（名称到值的映射）和反向（值到名称的映射）的映射关系
//当定义后 后面的自增
enum tpe{
    red,     //0
    grent =2,   //1  2
    num   ='asd'   //2 | 3
}

//或者混合使用 
enum tpe1{
    red ='asd',     //0
    grent ='asd',   //1  2
    num   ='asd'   //2 | 3
}

/** 接口枚举*/
enum tpe2{
    yyds,
    dd
}

interface a1{
    n1:tpe2.dd
}

let Obj:a1={
    n1:tpe2.dd  //1
}

//*const 枚举
const enum Types{
    red,
    grent

 }

// *反向映射  正向映射  
// aa为0 所以包含正反向映射， 字符串枚举没有反向映射
enum tpe3{
    reds
}

let aa=tpe3.reds
console.log(aa);  //0

let aa1=tpe3[aa]
console.log(aa1);  //reds
console.log(0);  //reds