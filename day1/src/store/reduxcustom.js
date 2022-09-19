// 订阅发布模式推出redux源码demo
// redux三大原则
// state以单一对象存储在store
// state是只读的
// 使用纯函数（对外界没有影响，同意输入到输出）reducer执行state跟新
// reducer函数逻辑太多需要进行拆分处理 combinerducers进行合并
// middleware处理异步问题

export function reducerCustom(reducer) {
  let state = reducer(undefined, {});
  let list = [];
  // 订阅
  function subscribe(cb) {
    list.push(cb);
  }
  // 发布 异步需要改变这个处理函数
  function dispatch(action) {
    state = reducer(state, action);
    list.forEach((item) => {
      item && item(action);
    });
  }
  // 获取状态
  function getState() {
    return state;
  }
  return {
    subscribe,
    dispatch,
    getState,
  };
}
