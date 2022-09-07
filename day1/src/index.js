// jsx核心包
import React from 'react';
// reactDom包
import ReactDom from 'react-dom/client';
import App from './03-hooks/02-useContext';

// App根组件
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <App />,
  // </React.StrictMode>,
);
