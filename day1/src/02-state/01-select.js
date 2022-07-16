import React, { Component } from 'react';
import './css/index.css';
export default class App extends Component {
  state = {
    footerstxt: [
      { label: '主页', isActive: true },
      { label: '电影', isActive: false },
      { label: '我的', isActive: false },
    ],
  };
  filterFootersTxt = () => {
    return this.state.footerstxt.filter((item) => item.isActive)[0].label;
  };
  updateFooterstxt = (val) => {
    let newarr = [...this.state.footerstxt];
    newarr.map((item, i) => {
      if (i == val) {
        item.isActive = true;
      } else {
        item.isActive = false;
      }
    });
    this.setState({
      footerstxt: newarr,
    });
  };
  myUpdate = () => {
    this.setState({
      footerstxt: [
        { label: '主页', isActive: false },
        { label: '电影', isActive: false },
        { label: '我的', isActive: true },
      ],
    });
  };
  render() {
    return (
      <div>
        <NavBar myUpdate={this.myUpdate}></NavBar>
        <Main maintxt={this.filterFootersTxt()}></Main>
        <Footers
          footerstxt={this.state.footerstxt}
          updateFooterstxt={this.updateFooterstxt}
        ></Footers>
      </div>
    );
  }
}
class NavBar extends Component {
  render() {
    return (
      <div>
        NavBar{' '}
        <button
          onClick={() => {
            this.props.myUpdate();
          }}
        >
          我的
        </button>
      </div>
    );
  }
}
class Main extends Component {
  render() {
    return <div>{this.props.maintxt}</div>;
  }
}
class Footers extends Component {
  render() {
    return (
      <div>
        {this.props.footerstxt.map((item, i) => (
          <span
            key={i}
            className={['span', item.isActive ? 'red' : ''].join(' ')}
            onClick={() => {
              if (item.isActive) {
                return;
              }

              this.props.updateFooterstxt(i);
            }}
          >
            {item.label}
          </span>
        ))}
      </div>
    );
  }
}
