import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';
// HashRouter带#
import Films from '../view/films';
import Center from '../view/center';
import Cinemas from '../view/cinemas';
import NotFound from '../view/NotFound';
export const Main = (props) => {
  // console.log(props);
  return (
    <BrowserRouter>
      {/* 只匹配第一个 */}
      <Switch>
        {/* 一级二级看路径 */}
        <Route path="/films" component={Films}></Route>
        <Route path="/cinemas" component={Cinemas}></Route>
        <Route path="/center" component={Center}></Route>
        {/* <Route path='/films' component={}></Route> */}
        {/* 前面都不匹配就走redirect */}
        {/* exact精准 */}
        <Redirect from="/" to="/films" exact></Redirect>
        <Route component={NotFound}></Route>
      </Switch>
      {props.children}
    </BrowserRouter>
  );
};
