// jsx核心包
import React from 'react';
// reactDom包
import ReactDom from 'react-dom/client';
// class Div extends React {
//   render() {
//     return '<div>123</div>';
//   }
// }
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<div>123</div>);
