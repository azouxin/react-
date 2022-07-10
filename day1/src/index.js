// jsx核心包
import React from 'react';
// reactDom包
import ReactDom from 'react-dom/client';

import App from './01-base/04-选项卡';
// App根组件
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
