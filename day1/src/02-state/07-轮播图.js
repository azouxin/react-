import React, { Component } from 'react';
import './css/3index.css';
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default class App extends Component {
  state = { list: [] };
  // myRef = React.createRef();
  componentDidMount() {
    new Swiper('.swiper', {
      // Optional parameters
      // direction: 'vertical',
      loop: true,
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }
  render() {
    return (
      <div className="swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">Slide 1</div>
          <div className="swiper-slide">Slide 2</div>
          <div className="swiper-slide">Slide 3</div>
        </div>

        <div className="swiper-pagination"></div>
      </div>
    );
  }
}
