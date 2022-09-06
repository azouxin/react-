import React, { Component } from 'react';
import '../css/3index.css';
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default class kSwiper extends Component {
  state = { list: [] };
  // myRef = React.createRef();
  componentDidUpdate() {
    console.log('1');
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
  static getDerivedStateFromProps(nextPros) {
    console.log(nextPros);
    return { list: nextPros.children };
  }
  render() {
    return (
      <div className="swiper">
        <div className="swiper-wrapper">{this.props.children}</div>

        <div className="swiper-pagination"></div>
      </div>
    );
  }
}
