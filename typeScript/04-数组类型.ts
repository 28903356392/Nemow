//数组内的值只能是数字
var arr:number[] = [1,2]

//数组内的值只能是字符串
var arr1:string[] = ['1','2']

//数组内的值为任意值
var arr2:any[] = ['1',1, true]



//泛型
var arr3:Array<number>=arr
var arr4:Array<string>=arr1



//接口描述数组
interface DA{
  [index:number]:number
}
var aar5:DA=[1,2,3,4]

//多维套娃
var arr6:number[][][]=[[[1]]]


//内置方法把传入的值变为一个类数组
function Arr(...args:any){
    let a:IArguments = arguments
    console.log(a);//[Arguments] { '0': '11', '1': 22, '2': true }
    
}
Arr('11',22,true)

