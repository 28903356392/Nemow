interface Option{
  el:string |HTMLElement
}

interface VueCls{
  init():void,
  option:Option
}

interface Vnode {
  tag: string
  text?: string
  props?: {
      id?: number | string
      key?: number | string | object
  }
  children?: Vnode[]
}

class Dom{
   constructor(){

   }
   //创建dom
   createElement(el:string):HTMLElement{
      return document.createElement(el)
   }
   //设置dom的text
   setText(el:HTMLElement,text:string|null){
      el.textContent=text
   }
   //生成dom元素
   render(createElement:Vnode):HTMLElement{
     //原生渲染dom， 挂载到id app上
     const el =this.createElement(createElement.tag)
         el.innerText=createElement.text as string
     if(createElement.children && Array.isArray(createElement.children)){
       createElement.children.forEach(item=>{
           const child = this.render(item)
           this.setText(child,item.text?? null)
           el.appendChild(child)
       })
     }else{
      this.setText(el,createElement.text?? null)
     }
     return el
   }
}

//继承Dom派生类
class Vue extends Dom implements VueCls{
   option: Option;
   constructor(option:Option){
    super()
    this.option=option
    this.init()
   }
   init(){
      
      let app = typeof this.option.el == 'string' ? document.querySelector(this.option.el) :this.option.el
      let data={
        tag:'div',
        text:"asd",
        children:[{
          tag:'div',
          text:"子"
        }]
      }   

      app?.appendChild(this.render(data))
      
      this.mount(app as HTMLDivElement)
   }
   mount(app:HTMLDivElement){
    return document.body.append(app)
   }
}

//调用方法
Vue



