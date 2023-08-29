/**
 * 按需引入在script使用的组件需要放进来
 */
export {}
declare global {
  const ElMessage: (typeof import('element-plus'))['ElMessage']
  const ElLoading: (typeof import('element-plus'))['ElLoading']
}
