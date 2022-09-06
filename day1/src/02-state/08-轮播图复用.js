import React, { Component } from 'react';
import KSwiper from './components/01';
import KSwiperItem from './components/02';
export default class App extends Component {
  state = {
    list: [],
  };
  componentDidMount() {
    this.setState({
      list: [1, 2, 3, 4],
    });
  }
  render() {
    return (
      <div>
        <KSwiper>
          {this.state.list.map((item) => (
            <KSwiperItem key={item}>{item}</KSwiperItem>
          ))}
        </KSwiper>
      </div>
    );
  }
}
