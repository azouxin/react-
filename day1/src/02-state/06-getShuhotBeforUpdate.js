import React, { Component } from 'react';
import './css/02index.css';
export default class App extends Component {
  state = { list: [1, 2, 3, 4, 5, 6, 7, 8, 9] };
  myRef = React.createRef();
  getSnapshotBeforeUpdate() {
    return [this.myRef.current.scrollHeight, this.myRef.current.scrollTop];
  }
  componentDidUpdate(prevProps, prevState, value) {
    this.myRef.current.scrollTop = value[1] + (this.myRef.current.scrollHeight - value[0]);
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              list: [...[11, 12, 13, 14, 15, 16, 17, 18], ...this.state.list],
            });
          }}
        >
          click
        </button>
        <ul ref={this.myRef}>
          {this.state.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
