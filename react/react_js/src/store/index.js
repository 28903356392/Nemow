import { configureStore } from "@reduxjs/toolkit";

//子模块导入，可自定义多个
import counterStore from "./modules/counterStore";

// 创建store组合子模块
const store = configureStore({
  reducer:{
    counterStore,
  }
})

export default store