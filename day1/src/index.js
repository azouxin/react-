// jsx核心包
import React from 'react';
// reactDom包
import ReactDom from 'react-dom/client';

import App from './02-state/01-select';
// App根组件
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
