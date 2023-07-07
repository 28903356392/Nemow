let a = new Date().toLocaleString()

interface time{
   outtme:string
}


type Key=string

interface Result { //返回值类型
  message: string,
  value: object
}

interface setvalue{
  set:<T>(key:Key,value:T,time?:number)=>void
  get:<T>(key:Key)=>void
  remove:(key:Key)=>void
  clear:()=>void
}
enum out{
  yes,
  no
}
class Storages implements setvalue{
   get(key:Key){
      if(key){
         let keys= JSON.parse(localStorage.getItem(key) as string)
         console.log();
         if(new Date().getTime() / 1000 < keys.value){
           return keys
         }else{
          return{
            message:`已过期，请重新设置`,
          }
         }
        
      }
   } 
   set(key:Key,value:any,time?:out|number){
      if(value!=undefined && value!=null ){
         let va ={
          value:value,
          time:(typeof time=='number'?time:0) +Number(new Date().getTime()) / 1000  //毫秒转秒
         }
         if(time!=0){
            
            localStorage.setItem(key,JSON.stringify(va))
            return{
              message:`过期设置`,
              value:value
            }
         }else if(time==0){
            localStorage.setItem(key,JSON.stringify(va))
            return{
              message:`永不过期设置`,
              value:value
            }
         }
      }else{
         return {
           message:`设置${key}错误，是个空值或或没声明的值`
         }
      }
   }
   remove(key:Key){
     localStorage.removeItem(key)
   }
   clear(){
     localStorage.clear()
   }
}
const times =new Storages()
console.log(times.set('start',123,21));
console.log(times.get('start'));
