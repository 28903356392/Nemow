import { AxiosResponse } from 'axios'
export interface userTpye {
  timer: any
  AntiShake: (arg0: any, arg1: object, arg3: number) => Promise<unknown>
  web_doc: () => Promise<AxiosResponse<any, any>>
}
