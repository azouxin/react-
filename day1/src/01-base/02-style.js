import React from 'react';
// style期望是一个对象
// 组件类一定要继承react的component
import './01-index/index.css'; //导入css
export class App extends React.Component {
  render() {
    let bgc = {
      background: 'yellow',
    };
    return (
      <section>
        {/* react推荐行内式注释也要用{}包裹起来 */}
        <div style={bgc}>{10 + 20}</div>

        <div className="active">red</div>
        <Myfn />
        {/* for 和 class jsx语法不支持 */}
        <label htmlFor="username">用户名：</label>
        <input type="text" id="username"></input>
      </section>
    );
  }
}
// 函数式组件
function Myfn() {
  return <div>函数式组件</div>;
}
