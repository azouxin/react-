// applyMiddleware应用中间件
import { createStore, applyMiddleware } from '@reduxjs/toolkit';
// 解决dispatch异步问题
import reduxThunk from 'redux-thunk';
const reducer = (prevState, action) => {
  return {};
};
export const store = createStore(reducer, applyMiddleware(reduxThunk));
// store.dispatch(action:对象) 发布
// store.subscribe(()=>{}) 订阅
