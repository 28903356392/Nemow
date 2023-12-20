import { useState } from 'react'
import { useRoutes } from "react-router-dom";
import {router} from '@/routes'

function App() {
  const element = useRoutes(router)
  return (
    <>
      {/* 实现路由引用，地址栏可输入 */}
      {element}
    </>
  )
}

export default App
