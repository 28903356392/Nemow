import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";  /*  使用redux调试工具  */
import reducers from "./reducers";

export type rootState = ReturnType<typeof reducers>;
const store = createStore(reducers, composeWithDevTools(applyMiddleware()));
export default store;

