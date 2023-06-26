//*never类型和void区别

//void类型只是没有返回值 但本身不会出错
function Void():void {
    console.log();
}

//只会抛出异常没有返回值 死循环或抛出异常
function Never():never {
throw new Error('aaa') 
}

//差异  会直接删除never类型
type A11= void | number | never