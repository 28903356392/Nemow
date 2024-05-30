import axios from 'axios'
import type { AxiosRequestConfig, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios'
import { showMessage } from './status'
import { IResponse } from './types'
import { getToken } from '@/utils/aunt'
interface api {
  url: string
  method: 'get' | 'post' | 'delete' | 'put'
  data?: object
}

interface HTTP {
  interceptorsRequest(): void
}

class Requests implements HTTP {
  service = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    // timeout: 10000,
  })
  constructor() {
    this.interceptorsRequest()
    this.interceptorsResponse()
  }
  // axios实例拦截请求
  interceptorsRequest() {
    this.service.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const token = getToken()
        if (token) {
          config.headers.authorization = `${token}`
        }
        return config
      },
      (error: AxiosError) => {
        return Promise.reject(error)
      }
    )
  }

  // axios实例拦截响应
  interceptorsResponse() {
    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        if (response.status === 200) {
          return response
        }
        ElMessage.error(showMessage(response.status))
        return response
      },
      // 请求失败
      (error: any) => {
        const { response } = error
        if (response) {
          // 请求已发出，但是不在2xx的范围
          ElMessage.error(showMessage(response.status))
          return Promise.reject(response.data)
        }
        ElMessage.error(showMessage('网络连接异常,请稍后再试!'))
      }
    )
  }
  request(config: AxiosRequestConfig) {
    return new Promise(resolve => {
      this.service.request<any, AxiosResponse<IResponse>>(config).then((res: AxiosResponse<IResponse>) => {
        const { data } = res
        resolve(data)
      })
    })
  }
}

export const request = (data: api) => {
  return new Requests().request(data)
}
