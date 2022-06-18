import React from 'react';
// style期望是一个对象
// 组件类一定要继承react的component
import './01-index/index.css'; //导入css
// 事件绑定this指向undefined undefined
export class App extends React.Component {
  inster() {
    console.log(this);
  }
  inster1 = () => {
    console.log(this.mytext.current.value);
  };
  inster2 = (val) => {
    console.log(val);
  };
  list = ['123'];
  mytext = React.createRef();
  render() {
    let bgc = {
      background: 'yellow',
    };

    return (
      <section>
        <input ref={this.mytext}></input>
        <button onClick={this.inster.bind(this)}>add</button>
        <button onClick={this.inster1}>add1</button>
        <button
          style={bgc}
          onClick={(e) => {
            console.log(e, 'e');
            this.inster2(bgc);
          }}
        >
          add2
        </button>
        <ul>
          {this.list.map((item) => (
            <li key={item}>
              {item}
              <button>del</button>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
// 函数式组件
function Myfn() {
  return <div>函数式组件</div>;
}
