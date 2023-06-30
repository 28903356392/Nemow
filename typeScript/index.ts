type Arr = [1, 2, 3, 4]
 
/**
 * [infer First, ...infer rest]  [...ReveArr<rest>, First]
 * 将第一个First放在后面，反复调用每次会自动减少
*/
type ReveArr<T extends any[]> = T extends [infer First, ...infer rest] ?[...ReveArr<rest>, First] : T
 
type Res = ReveArr<Arr>