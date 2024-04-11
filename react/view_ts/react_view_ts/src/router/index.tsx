import { RouteObject, createBrowserRouter } from "react-router-dom";
import Device from "@/components/Device";
import Home from "@/components/Home";
const routers: RouteObject[] = [
  {
    path: "/",
    element: <Home />
  }, {
    path: "Device",
    element: <Device List={[]} />
  }
]
const router = createBrowserRouter(routers)
export {
  router
}