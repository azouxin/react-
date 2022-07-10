import React from 'react';
import './css/01.css';
// style期望是一个对象
// 组件类一定要继承react的component
import './01-index/index.css'; //导入css
// 事件绑定this指向undefined undefined
export class App extends React.Component {
  inster1 = () => {
    let val = this.mytext.current.value;
    let id = this.state.list?.slice(-1)[0]?.id ? this.state.list?.slice(-1)[0]?.id : 0;
    let newarr = [...this.state.list];
    newarr.push({
      id: id + 1,
      value: val,
    });
    this.setState({
      list: newarr,
    });
    this.mytext.current.value = '';
  };
  removeitem = (val) => {
    let newarr = this.state.list.filter((item) => item.id != val.id);
    this.setState({
      list: newarr,
    });
  };
  state = {
    list: [],
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
        {this.state.list.length > 0 ? (
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
        ) : (
          <Myfn></Myfn>
        )}
      </section>
    );
  }
}
// 函数式组件
function Myfn() {
  return <div>暂无数据</div>;
}
// xss代码防护禁止代码注入<span><span/>会以字符串形式
// 富文本展示dangerouslySetInnerHTML={{__html:<></>}}
