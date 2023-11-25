//*类型推论 
//str1 
let str1 ='asd'  //类型string  推断的stirng 不可更换类型

let str2         //类型any     声明变量不赋值  推断为any

//*Type 类型别名  可引用其他别名

//类型别名
type str_ =string

let s:str_ ='sad'


//函数别名
type str_1 =()=>string

let s1:str_1 =()=>'dfsf'

//联合类型别名
type str_2 =string | number

let s2:str_2 = 'asd' || 89

//定义值的别名
type str_4 =1 |2|3 |str_ 
let s3:str_4=1

