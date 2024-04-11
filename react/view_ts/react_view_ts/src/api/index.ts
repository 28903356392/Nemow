import { http } from "@/utils/http";

// 定义泛型
type ResType<T> = {
  code:number
  massage:string
  data:T
}

// 定义接口类型
export  type ChannelItem = {
  key:string
  title:string,
  List:{title:string}[]
}

// 
type ChannelRes ={
  list:ChannelItem[]
}

export const fetchChannelAPI = ()=>{
  return http.request<ResType<ChannelRes>>({
    url:"/data"
  })
}