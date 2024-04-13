import request from '../util/request'
type str=string
type obj=object
interface data{
  id:str,
  jsonrpc:str,
  method:str,
  params:obj
}

export const POST = (id:str,method:str,params?:obj,jsonrpc?:str)=>{
  const data:data={
    id,
    jsonrpc:jsonrpc||"2.0",
    method,
    params:params||{}
  }
  return new Promise((r,q)=>{
    request.post('/fibo/webapi',data).then(res=>{
      r(res)
    }).catch(err=>{
      q(err)
    })
  })
}