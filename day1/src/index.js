// jsx核心包
import React from 'react';
// reactDom包
import ReactDom from 'react-dom/client';

class Divs extends React.Component {
  render() {
    return <div>123</div>;
  }
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<Divs />);
