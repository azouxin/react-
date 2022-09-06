import React, { Component } from 'react';
export default class App extends Component {
  // componentWillMount() {
  //   // 初始化数据 16.8被废除componentWillMount有副作用不推荐使用
  //   //  fiber架构
  //   // 优先级低可能会被打断
  //   console.log('Dom加载前上树之前的最后一次状态更改');
  // }
  state = { list: [] };
  // return 出来的对象和state进行合并 初始化和更新状态都执行的逻辑
  static getDerivedStateFromProps(nextProps, nextstate) {
    console.log(nextProps, nextstate, '1');
    return {
      list: [1],
    };
  }
  componentDidMount() {
    // 可以做axios请求YYDS
    // 订阅函数
    console.log('已经执行');
  }
  render() {
    console.log('render');
    return 1;
  }
}
