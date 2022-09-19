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
react严格模式推荐（render执行两次有一次是去检测副作用）
用myRef=React.createRef()去创建ref  <input ref={this.myRef}/>
获取就是this.myRef.current
和vue的ref语法不同
## react状态管理
改变状态setState()传递对象就是合并之前的状态进行更新异步更新为了考虑性能=>会调用rendern
重要 setstate 异步更新
setstate是异步更新状态第二个参数就可以知道啥时候更新完成
setstate在异步中（settimeout，promise）就是同步执行
有状态组件控制无状态组件多写无状态组件状态管理多个组件定义会变复杂
受控组件非受控组件 ref（非受控组件React.createRef()）defaultValue表单默认值受控组件有状态去给ui setState更改state调用render函数更新ui
input事件和change事件是一个效果jsx中
父子通信，子组件无法更改父组件的state，子组件通知父组件让父组件进行更改state（回调函数方式实现），更改ui
为啥子组件不推荐有状态，父组件无法对子组件状态改变做出相对应的变化，设计原则是单向数据流在父组件定义状态可以更好的去控制子组件
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
## 组件通信
1. ref 
2. context(
  const GlobalContext=React.createContext()生成context
  包裹组件（注册）<GlobalContext.Provider>包裹组件</GlobalContext.Provider>
  使用 <GlobalContext.Consumer>
  （）=>{
    return jsx表达式
  }
  </GlobalContext.Consumer>
) 
3. (订阅发布模式（subscribe，publish）eventbus)
4.  状态提升
5.   props
## 插槽
this.props.children拿到内容 this.props.children[0]就是拿到第一个元素
提升了组件复用的扩展性（比如封装一个table表格就可以插槽动态的去添加操作里面的内容要是没有插槽就会在组件里面用属性做很多条件判断降低了组件的灵活性）
## 生命周期
调度机制，持续执行到相应的阶段就会执行相应的钩子函数
1. 初始化阶段
componentWillMount:render之前最后一次修改状态的机会 不推荐使用
render：渲染函数（setState就会调用render函数）
componentDidMount：Dom加载完毕之后触发可以在这一步做dom操作
2. 运行阶段
componentWillReceiveProps:父组件修改属性触发 (组件将要接收到props时)（nextProps参数）就是拿到最新的属性 利用属性做请求处理或者把属性转化为自己的状态（多个props会执行多次）
shouldComponentUpdate:返回false会阻止render调用 （组件应该更新吗）参数用法 nextProps(新的属性) nextState（新的状态）用来做判断禁止无效的虚拟Dom更新 
componentWillUpdate:不能改属性和状态 不推荐使用
render:只能访问this.props和state,不允许修改状态和Dom输出
componentDidUpdate:可以修改Dom dom更新后操作
参数用法 prevProps(老的属性) prevState（老的状态）用来做判断
3. 销毁阶段
componentWillunMount:组件销毁清除定时器，事件监听器
老生命周期的问题 
（1）componentWillMount 在ssr中这方法会被调用多次，绑定事件无法解绑，内存泄漏，变的不够高效
（2）componentWillReceiveProps 外部组件多次更新会导致不必要的请求
（3）componentWillUpdate 记录更新前的属性和状态，与componentDidUpdate时间过长会导致状态不行（老的props,老的State，第三个参数是 getSnaphotBeforeUpdate返回值）
4. 新的生命周期 
   getDerivedStateFromProps第一次的初始化组件以及后续的更新过程中返回一个新的state,返回null不需要更新state（static方法 必须定义状态）搭配componentDidUpdate使用用老的Props和老的Status 替代(componentWillReceiveProps,componentWillMount)

getSnapshotBeforeUpdate（需要更新之前的记录状态，比render晚执行）替代componentWillUpdate 特殊场景使用详情回退高度记录返回页面还是哪个高度 做对比

pureComponent组件 react的自动优化shouldComponentUpdate 状态和props经常更改就不需要使用pureComponent\
## 函数式组件
<!-- hooks -->
函数组件没有this
const [state,setState]=useState('')
每次setState就会重新执行函数
useEffect副作用强大功能
第一个参数回调函数，第二个参数空数组只会执行一次（有依赖就是多次依赖）在回调用了的依赖，就告诉数组使用了这依赖（找依赖确定哪个是依赖）
销毁清除定时器和事件就需要在useEffect返回值是一个函数可以进行清除
useLayoutEffect（会造成页面阻塞componentDidMount,componentDidUpdate）调用时间不一样建议修改dom使用该钩子函数因为他是在dom树在构建的时候使用的
useEffect是在dom树创建完毕
记忆函数useCallback提升性能
解决了函数重新定义的问题，第一个参数是回调函数第二个参数是数组保存的依赖

useMemo对比useCallback会调用第一个参数回调函数返回一个值，（vue计算属性）
useRef()模板引用 保存变量
useContext let context = React.creactContext()
useContext(context)子组件使用不需要包裹 return 比class简单
useReducer （状态管理） 方案抽离状态 和useContext搭配使用 降低耦合度
<!--reducer处理器 对应 dispatch -->
<!-- initState 状态 对应 state -->
const [state, dispatch] = useReducer(reducer, initState);
自定义hooks
抽离逻辑然后调用 
# router react-router-dom@5
重定向 Redirect
分支匹配 Switch(路由刷新有问题使用)
路由组件 Route
路由模式 HashPouter 
<!-- 路由嵌套还是以下api组件 -->
重定向 Redirect 属性 （to from）
分支匹配 Switch(路由刷新有问题使用)
路由组件 Route 属性 （path component）
路由模式 HashPouter  BrowserRouter(当成请求向后端请求)
<!-- 声明式 -->
<NavLink></NavLink>
属性 to activeStyle
<!-- 编程式 -->
 props.history.push('/films/tab2');
 或则react-dom-router的hooks
 useHistory
 <!-- 获取路由的参数 -->

props.location.query|props.location.state
动态路由需要先配置path动态
<!-- 路由守卫 -->
<!-- 条件判断渲染 会丢失props需要自己在函数中传递-->
withRouter(组件)反回组件：高阶组件解决


<Route to='/details' render={()=>(x?<a></a>:<b></b>)}></Route>
<!-- 反向代理 -->
查文档creact-app-react
https://create-react-app.dev/docs/proxying-api-requests-in-development
css文件名字改为index.module.css Module(样式编译重命名) 

## Redux  Flux
flow流 NPM I REDUX
// 订阅发布模式推出redux源码demo
// redux三大原则
// state以单一对象存储在store
// state是只读的
// 使用纯函数（对外界没有影响，同意输入到输出）reducer执行state跟新
// reducer函数逻辑太多需要进行拆分处理 combinerducers进行合并
// middleware处理异步问题 更改dispatch调用时间 (redux-thunk)
<!-- applyMiddleware来自于react -->

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

case 比if else性能要好（case可以直接找到）