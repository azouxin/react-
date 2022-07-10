# react
## 声明式设计
## 高效灵活
## 组件化
## 单向数据流
## 虚拟Dom
# react技术栈
 react 项目创建 组件封装 样式引入 函数绑定（事件对象，this指向） Ref模板使用 state状态使用
react hooks react路由 redux 组件库 immutable mobx react+TS 单元测试 dav+umi
<!-- 脚手架快速上手 -->
$ create-react-app 
nrm 切换镜像 nrm use npm  | nrm use taobao $
# react 18.1.0
react 严格模式
 <React.StrictMode>
    <App />
  </React.StrictMode>
# react组件
## 类组件demo
class MyDemo extends React.Component {
  render(){
    return `<div></div>`
  }
}
## 函数式组件（16.8之前叫无状态组件）16.8之后hooks就可以有状态

## react事件绑定写法和css写法
css文件import引入或者声明变量赋值给style
事件绑定用
箭头函数比较推荐
构造器改变this指向也推荐
普通函数改变this不推荐
在render写this不推荐
事件对象
和浏览器事件对象相似但是不是浏览器的事件对象是react自己构建的也有stopPropagation阻止事件冒泡
preventDefault阻止默认事件
react事件和原生事件有什么区别
1.语法不同 2.react事件是采用事件代理绑定根节点事件冒泡，的模式不会绑定到dom
## Ref应用
react严格模式推荐
用myRef=React.createRef()去创建ref  <input ref={this.myRef}/>
获取就是this.myRef.current
和vue的ref语法不同
## react状态管理
改变状态setState()传递对象就是合并之前的状态进行更新异步更新为了考虑性能
重要 setstate 异步更新
setstate是异步更新状态第二个参数就可以知道啥时候更新完成
setstate在异步中（settimeout，promise）就是同步执行
<!-- 列表渲染map需要加key -->
diff算法
## xss攻击
特定情况去使用
react和vue都会自带防御xss
xss代码防护禁止代码注入<span><span/>会以字符串形式
富文本展示dangerouslySe tInnerHTML={{__html:<></>}}和vue的自定义指令v-html一样
<!-- 接口请求头限制 -->
参数给了还是报错
## react propsType效应
prop-types
是定义在类身上的propType属性
用static直接在类里面定义 static propTypes={}
defaultProps默认值  static defaultProps={}