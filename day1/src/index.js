// jsx核心包
import React from 'react';
// reactDom包
import ReactDom from 'react-dom/client';
import App from './04-router5/01-router';

console.log(createStore, 'redux');

// App根组件
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <App />,
  // </React.StrictMode>,
);
