//类型提取 Infer 

type Arrs = ['a','b','c']
 /**
  * 返回头或尾
 */
type First<T extends any[]> =  T extends [...any[],infer First] ? First : []  

/** 
 * 返回删除头或尾后的数组
 * unknown声明
*/
type Firsts<T extends any[]> =  T extends [...infer First,unknown] ? First : []
type a = First<Arrs>
type aa = Firsts<Arrs>