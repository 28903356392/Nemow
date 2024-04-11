import axios from "axios";

const httpInstance = axios.create({
  baseURL:"http://localhost:8081",
  timeout:5000
})

// 请求拦截器
httpInstance.interceptors.request.use(
  (response)=>{
    const res =response
    return res
  },
  (error)=>{
    return Promise.reject(error)
  }
)

// 响应拦截器
httpInstance.interceptors.response.use(
  (response)=>{
    const res =response
    return res
  },
  (error)=>{
    return Promise.reject(error)
  }
)

export {
  httpInstance as http
}