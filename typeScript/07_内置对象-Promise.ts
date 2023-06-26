//*内置对象

let yes:Boolean =new Boolean()

let yes1:Number =new Number(2)

let yes2:String =new String(1)

let yes3:RegExp =/^123/

let yes4:Date = new Date()

let yes5:Error = new Error("error")


//* DOM和BOM 

// let ye:HTMLElement = document.body

// //NodeList列表相当于forEach循环div
// let ye1:NodeListOf<HTMLDivElement | HTMLTitleElement> = document.querySelectorAll('div title')

// let sad:HTMLElement=document.querySelector('div') as HTMLDivElement
// document.addEventListener('click',(e:MouseEvent)=>{
 
// })



//*Promise ts化 指定返回的类型 
interface TY {
  code:number,
  msg:string,
  data:object
}

let promise:Promise<TY> = new Promise((r,e)=>{
  r({
    code:200,
    msg:'',
    data:{}
  })
  // e('error:')
})

promise.then(res=>{
 console.log(res);
 
}).catch(err=>{
  console.log(err);
  
})