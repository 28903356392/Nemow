# 创建项目

## Vue CLI

vue creat vue2

## vue2+vuex+router

### VUE2

* 属性方法

```js
components    注册组件
computed      计算属性
watch         监听属性
methods
mixins       混入
```

* 全局api

```js
directive    添加自定义事件
set           添加响应对象键值对
delete        删除
```

* 修饰符

```js
.stop         阻止冒泡
.prevent      阻止默认事件
.capture      阻止捕获
.self         只监听触发该元素的事件
.once         只触发一次
.left         左键事件
.right        右键事件
.middle       中间滚轮事件
```

* 生命周期

```js
beforCreate     实例化前
created         实例化后
beforMount      挂载前
mounted         挂载后
beforUpdate     更新前
updated         更新后
beforDestroy    销毁前
destroyed       销毁后

errorCaptured    捕获来自后代组件的错误时被调用
activated        keep-alive缓存组件激活时调用
```

* 传参

```js
props/$emit       父子互传 父: 父@
Bus               事件总线  $on/$emit函数
Vuex              全局通信
res/refs          ref获取子组件实例
&parent           获取父组件实例
$attrs/$listeners 祖孙互传
```

### Router3

* Router路由

```js
hash / history      路由模式
beforeEach        前置守卫
afterEach         后置钩子
beforResolve      解析守卫

beforeEnter       路由独享守卫
beforeRouteEnter  渲染路由
beforeRouteUpdate 复用路由
beforeRouteLeave  切换路由
```

### Vuex

```js
state         状态
getter        计算属性
mutation      修改状态的方法
action        操作异步调用mutation提交
module        模块组件
```
