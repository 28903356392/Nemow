import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';   /*  redux使用  */
import store from './store';  /*  redux使用  */
import App from './App'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}> 
  <React.StrictMode>
    <Router>
      {/* 添加Suspense解决router报错懒加载错误 */}
      <Suspense>
         <App />
      </Suspense>
    </Router>
  </React.StrictMode>
  </Provider>
)
