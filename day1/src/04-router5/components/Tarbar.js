import React from 'react';
import { NavLink } from 'react-router-dom';
// 组件类一定要继承react的component
export class Tarbar extends React.Component {
  active = {
    color: 'red',
  };
  render() {
    return (
      <section>
        <ul>
          <li>
            <NavLink to="/films" activeStyle={this.active}>
              首页
            </NavLink>
          </li>
          <li>
            <NavLink to="/cinemas" activeStyle={this.active}>
              电影
            </NavLink>
          </li>
          <li>
            <NavLink to="/center" activeStyle={this.active}>
              内容
            </NavLink>
          </li>
        </ul>
      </section>
    );
  }
}
