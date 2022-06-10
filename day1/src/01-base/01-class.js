import React from 'react';
// 组件类一定要继承react的component
export class App extends React.Component {
  render() {
    return (
      <section>
        <div>123</div>
        <Myfn />
      </section>
    );
  }
}
// 函数式组件
function Myfn() {
  return <div>函数式组件</div>;
}
