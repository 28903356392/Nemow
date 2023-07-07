//!weakMap，weakSet，set，map

//1.set 集合

//add(value)：添加某个值，返回 Set 结构本身。
//
//delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
//
//has(value)：返回一个布尔值，表示该值是否为 Set 的成员。
//
//clear()：清除所有成员，无返回值。
//
//size : 返回set数据结构的数据长度 

let a= new Set()
a.add('sasd')
//去重    配合扩展运算符可以去重
let b= [...new Set(['asdsa','asd'])]


//2.map 它类似于对象，也是键值对的集合

let c= new Map()

caches.delete('asd')
c.has('s')//查询是否有's'
c.clear()
c.get('ad')
c.set('asd','asd')
c.size



//WeakSet 和 WeakMap  当不引用是
//WeakSet的成员只能是对象，WeakMap只接受对象（null除外）作为键名       
//不计入垃圾回收机制    
//没有遍历操作，没有size属性，没有clear方法
//不需要时会自动GC回收
//可以放其他东西，dom 函数等， 不用回自动回收掉

let obj:any = {name:'小满zs'} //1
let aahph:any = obj //2
let wmap:WeakMap<object,string> = new WeakMap()
 
wmap.set(obj,'爱安徽潘慧') //2 他的键是弱引用不会计数的
 
obj = null // -1
aahph = null;//-1
//v8 GC 不稳定 最少200ms
 
setTimeout(()=>{
    console.log(wmap)
},500)