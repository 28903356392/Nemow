
import {
  createBrowserRouter,
  // createMemoryRouter
  RouterProvider,
} from "react-router-dom";
import { lazy } from "react";
import Login from "../page/Login";
import Artice from "../page/Artice";
import Home from "../components/Home";
import Device from "../components/Device";
import Not404 from "@/page/404";
import { AuthRouter } from "@/utils/AuthRouter";
const Index =  lazy(()=>import("../components/Index"))
const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthRouter><Login/></AuthRouter>,
    // 嵌套路由
    children: [
      {
        index:true,// 默认二级路由显示
        path:"device",
        element:<Device/>
      },
      {
        path:"index",
        element:<Index/>
      }
    ],
  },
  {
    path: "/artice",
    element:<Artice/>,
  },
  {
    // 配合useParams传参
    path: "/home/:id/:name",
    element:<Home/>,
  },
  {
    path: "*",
    element:<Not404 />,
  },
]);

export {
  RouterProvider,
  router
}