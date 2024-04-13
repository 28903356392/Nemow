import { message } from 'antd'
import axios from 'axios'
// create an axios instance
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  // timeout: 5000 // request timeout
})
// request interceptor
service.interceptors.request.use(
  config => {
    // 做一些请求前置，例如添加token
    // config.headers['token'] = getToken()
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    // if the custom code is not 200, it is judged as an error.

    if (res.error != undefined) {
      message.config({
        top: 1,
        duration: 2,
        maxCount: 3,
      });

      return message.error(res.error.message)

    }

    return res
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

export default service