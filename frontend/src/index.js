import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import App from './App.jsx';
import store from './redux/store.js';
import { Provider } from "react-redux";
import './api-config';
ReactDOM.render(< React.StrictMode >
  <Provider store={store}>
    <App />
  </Provider>
</React.StrictMode>,
  document.getElementById('root')
);