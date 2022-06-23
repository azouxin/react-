import React from 'react';
// style期望是一个对象
// 组件类一定要继承react的component
import './01-index/index.css'; //导入css
// 事件绑定this指向undefined undefined
export class App extends React.Component {
  inster1 = () => {
    let val = this.mytext.current.value;
    let id = this.state.list?.slice(-1)[0]?.id ? this.state.list?.slice(-1)[0]?.id : 0;
    // console.log(val, 'val');
    this.state.list.push({
      id: id + 1,
      value: val,
    });
    this.setState({
      list: this.state.list,
    });
  };
  removeitem = (val) => {
    console.log(this.state.list, val);
    this.state.list = this.state.list.filter((item) => item.id != val.id);
    console.log(this.state.list, val);
    this.setState({
      list: this.state.list,
    });
  };
  state = {
    list: [{ id: 1, value: '111' }],
  };

  mytext = React.createRef();
  render() {
    let bgc = {
      background: 'yellow',
    };

    return (
      <section>
        <input ref={this.mytext}></input>
        <button style={bgc} onClick={this.inster1}>
          add
        </button>
        <ul>
          {this.state.list.map((item) => (
            <li key={item.id}>
              {item.value}
              <button
                onClick={(e) => {
                  console.log(e, item);
                  this.removeitem(item);
                }}
              >
                del
              </button>
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
