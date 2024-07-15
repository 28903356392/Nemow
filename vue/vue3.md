# 创建项目

## Vite

vue creat vite@latest vue3

### 生命周期

setup                   相当于vue2的实例化过程
onBeforeMount()         挂载前
onMounted()             挂载后
onBeforeUpdate()        更新前
onUpdated()             更新后
onUnmounted()           销毁前
onBeforeUnmount()       销毁后

onServerPrefetch()      在服务器渲染前调用。返回Promise
onErrorCaptured()       捕获后代组件错误

* dev可用
onRenderTracked()       捕获响应式依赖
onRenderTriggered()     响应式依赖变更

* keep alive缓存
onActivated()           插入时
onDeactivated()         移除时

* 响应式
ref()                   简单数据响应
reactive()              复杂数据响应
computed()              计算属性
readonly()              深层转换为只读
watch()                 监听
watchEffent()           副作用监听

* 进阶
customRef()             自定义一个ref，可实现防抖节流
