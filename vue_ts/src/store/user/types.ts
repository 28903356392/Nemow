// 类型定义
export interface userTpye {
  ProductType: Ref<string>
  productType: () => Promise<unknown>
  timer: any
  AntiShake: (arg0: any, arg1: object, arg3: number) => Promise<unknown>
}
