/**tsc --init    tsc -w
 * tsc 文件名     // //把ts转换成js引入html
*/
var canav = document.querySelector('#myCanvas');
//创建画布
var ctx = canav.getContext('2d');
var str = 'ABCDEFGHMNOPQRSTUVWXYZ0123456789'.split('');
//设置满屏宽高
canav.width = screen.availWidth;
canav.height = screen.availHeight;
//数组填充  fill填充      Math.ceil向上取整
var arrs = Array(Math.ceil(canav.width / 1)).fill(0); //实现字符向下移动的逻辑，fill(0)赋值
/** 每执行一次，半透明背景叠加，逐渐变深，形成字符雨的效果*/
var main = function () {
    //ctx重上到下执行，切分开，所以fillStyle是分别填充背景和text
    ctx.fillStyle = 'rgba(0,0,0,0.1)'; //设置背景色
    ctx.fillRect(0, 0, canav.width, canav.height); //设置满屏canavs
    ctx.fillStyle = '#0f0'; //设置文字颜色
    console.log(arrs);
    arrs.forEach(function (item, i) {
        ctx.fillText(str[Math.floor(Math.random() * str.length)], i * 10, item); //内容、x、y     //设置最上方的固定一排，并随机内容
        arrs[i] = item >= canav.height || item > 10000 * Math.random() ? 0 : item + 10; //设置下次arrs的item为+=10 大于随机数后从0开始  //一次下易
        console.log(item);
    });
};
setInterval(main, 100); //定时
