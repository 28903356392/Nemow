//*tsc --init    tsc -w       把ts转换成js引入html

let canav = document.querySelector('#myCanvas') as HTMLCanvasElement

//创建画布
let ctx=canav.getContext('2d') as CanvasRenderingContext2D

let str = 'ABCDEFGHMNOPQRSTUVWXYZ0123456789'.split('')

//设置满屏宽高
canav.width = screen.availWidth
canav.height = screen.availHeight


//数组填充  fill填充      Math.ceil向上取整
let arrs =Array(Math.ceil(canav.width / 1)).fill(0)

let main =()=>{
  //ctx重上到下执行，切分开，所以fillStyle是分别填充背景和text
  ctx.fillStyle='rgba(0,0,0,0.1)'//设置背景色
  ctx.fillRect(0,0,canav.width,canav.height)
  ctx.fillStyle='#0f0'//设置文字颜色
  arrs.forEach((item,i)=>{
    ctx.fillText(str[Math.floor(Math.random() * str.length)],i*10,item+10) 
    arrs[i]=item>=canav.height ||item> 10000 * Math.random() ? 0 : item + 10 //设置下次arrs的item为+=10 大于随机数后从0开始
  })
}

setInterval(main,40)