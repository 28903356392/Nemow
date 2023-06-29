let xxx={
  name:'yang',
  age:18
}

const namexxx = ()=>{
  return new Proxy(xxx,{
      get(){
        
      }
  })
}