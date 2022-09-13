import { Route, Redirect, Switch } from 'react-router-dom';
import FilmsTable1 from './films/comingson';
import FilmsTable2 from './films/tab2';
export default function Films() {
  // 路由嵌套路由
  return (
    <div>
      <div>Films</div>
      {/* 路由嵌套 */}
      <Switch>
        <Route path="/films/tab1" component={FilmsTable1}></Route>
        <Route path="/films/tab2" component={FilmsTable2}></Route>
        <Redirect to="/films/tab1" from="/films"></Redirect>
      </Switch>
    </div>
  );
}
