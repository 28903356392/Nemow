//*元组 Tuple    数组的变种
//声明readonly只读属性

let arrr: [x:string,y?:number,z?:[string,number]]=['1',2]

//越界元素， 添加、删除 必须是元组内的类型
arrr.push(['asd',0])
arrr.pop()
console.log(arrr);
