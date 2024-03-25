import { useReducer } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
/**
 * 声明式导航 Link to="/artice" 跳转到路由artice页面
 * 编程式导航 useNavigate() hooks 
*/
function Login() {
  var navigate = useNavigate()
  console.log(useLocation())
  const aaa=useReducer((e,i)=>{console.log(e,i);},0)
  console.log(aaa);
  return (
    <div>
      Login
      <Link to="/artice">button</Link>
      <button onClick={()=>navigate("/artice")}>编程式导航</button>
      <button onClick={()=>navigate("/artice?id=100&name=yang")}>传参</button>
      {/* useParams传参 */}
      <button onClick={()=>navigate("/home/1001/yang11")}>useParams传参</button>
      <div>
        <Link to="/device">device</Link>|
        <Link to="/index">index</Link>
        <Outlet/>
      </div>
    </div>
  )
}

export default Login;