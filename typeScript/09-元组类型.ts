//*元组 Tuple    数组的变种
//声明readonly只读属性,声明后不可添加修改，只可读取

let arrr: readonly [x:string,y?:number,z?:[string,number]]=['1',2]

//越界元素， 添加、删除 必须是元组内的类型
arrr.push(['asd',0])
arrr.pop()
console.log(arrr);

//解构赋值
let [user,name1,a] =arrr
console.log(user); //log  '1'

