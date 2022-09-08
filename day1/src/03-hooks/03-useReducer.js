import React, { useReducer } from 'react';
// 处理函数
const reducer = (prevState, next) => {
  // console.log(prevState, next);
  // let newState = prevState;
  let newState = ((a) => Object.create(a))(prevState);
  console.log(newState, prevState);
  if (next.type === 'add') {
    newState.count++;
    return newState;
  } else {
    newState.count--;
    return newState;
  }
};
// 状态定义在外面
const intialState = {
  count: 0,
};
export default function App() {
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <div>
      <button
        onClick={() => {
          // 传递给处理函数的对象在处理函数中可以接收到
          dispatch({
            type: 'add',
          });
        }}
      >
        +
      </button>
      {state.count}
      <button
        onClick={() => {
          dispatch({
            type: 'remove',
          });
        }}
      >
        1
      </button>
    </div>
  );
}
