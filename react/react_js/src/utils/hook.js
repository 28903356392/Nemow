import { useState } from "react";
// 自定义hooks
export function useHook(){
  const [a,seta] = useState(true)
  const toggle = ()=>seta(!a)
  return{
    a,
    toggle
  }
}

