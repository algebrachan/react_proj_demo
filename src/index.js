import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';


/**
 * BrowserRouter react路由解决方案
 * 
 */
ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={zh_CN}>
      <BrowserRouter>
        <Provider store={store}>
          <Main />
        </Provider>
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals(console.log); // 页面加载性能
