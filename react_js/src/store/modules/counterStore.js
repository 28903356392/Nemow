import { createSlice } from "@reduxjs/toolkit";

const counterStore = createSlice({
  name: "todos",
  // 存储数据
  initialState: {
    count:0
  },
  // 方法逻辑函数
  reducers: {
    inscrement(state,action) {
      state.count-=action.payload
    },
    decrement(state,{payload}) {
      state.count+=payload
    },
  },
});

// 导出
export const { decrement, inscrement } = counterStore.actions;
export default counterStore.reducer;