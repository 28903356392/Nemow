import { Navigate, Route,Link  } from 'react-router-dom'
import { lazy } from 'react'
import { JSX } from 'react/jsx-runtime'
const Login = lazy(()=>import('@/pages/Login'))
const Index = lazy(()=>import('@/pages/Index'))
const I404 = lazy(()=>import('@/pages/404'))
import Home from "@/pages/Home";
import Mobilenet from "@/pages/Mobilenet";
import Wifi from "@/pages/Wifi";
import Devices from "@/pages/Devices";
import Sms from "@/pages/Sms";
import Advanced from "@/pages/Advanced";
const name =(url:string,JSX:JSX.Element,names?:any):IRouteType.IRouter=>{
  return {
    path: url,
    element: JSX,
    chileren:names
  }
}
export const rout =[
  name('/home',<Home/>),
  name('/mobilenet',<Mobilenet/>),
  name('/wifi',<Wifi/>),
  name('/devices',<Devices/>),
  name('/sms',<Sms/>),
  name('/advanced',<Advanced/>)
]
export const router = [
    name('/login',<Login />),
    name('/*',<Index />,rout),
    name('/404',<I404 />),
    // 配置路由重定向 可配置404页面
    {
        path: '*',
        element: <Navigate to='/404' />
    }
]