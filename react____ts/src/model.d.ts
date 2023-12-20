declare namespace IRouteType{
  interface IMeta{
    pageTitle:string;
  }
  interface IRouter{
    path:string;
    element:JSX.Element;
    meta?:IMeta;
    chileren?:IRouter[];
  }
}