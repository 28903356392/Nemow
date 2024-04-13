import { useMemo, useState } from "react"
import { useBearStore } from "../zustand/index";
const fib=(n)=>{
  console.log('计算函数执行了');
  if(n<3)
  return 1
return fib(n - 2) + fib( n - 1)
}
function Index() {
  const [count1,setCount1]=useState(0)
  const result =useMemo(()=>{
    fib(count1)
  },[count1])
  const [count2,setCount2]=useState(0)
  console.log("组件重新渲染了，111111111111111111111111111111111");

  const a = useBearStore(state=>state.bears)
  const a1 = useBearStore(state=>state.increasePopulation)
  return (
    <div style={{color:'red'}}>
      Index
      <button type="" onClick={()=>setCount1(count1 +1)}>{count1}</button>
      <button type="" onClick={()=>setCount2(count2 +1)}>{count2}</button>
      <button type="" onClick={a1}>{a}</button>
      {result}
    </div>
  )
}

export default Index;