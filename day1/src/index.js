// jsx核心包
import React from 'react';
// reactDom包
import ReactDom from 'react-dom/client';
import App from './03-hooks/01-hooks';

const GlobalContext = React.createContext();

// App根组件
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <GlobalContext.Provider value={{ name: 123 }}>
    <App />
  </GlobalContext.Provider>,
  // </React.StrictMode>,
);
