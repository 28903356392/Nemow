import { useSelector,useDispatch } from "react-redux";
import { inscrement,decrement } from "./store/modules/counterStore";

import './App.css';

import Home from "./components/Home";
function App() {
  // react-redux中间件导入 useSelector() 函数获取store参数
  const {count} = useSelector(state=>state.counterStore)
  // react-redux中间件导入 useSelector() 函数获取store函数使用
  const dispach = useDispatch()
  return (
    <div 
    className="App active"
    > 
      {count}
      <button type="" onClick={()=>dispach(inscrement(10))}>++</button>
      <button type="" onClick={()=>dispach(decrement(10))}>--</button>
      <Home>
        <span>12222</span>
      </Home>
    </div>
  );
}

export default App;
