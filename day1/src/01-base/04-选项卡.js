import axios from 'axios';
import React, { Component } from 'react';
import zdy from 'prop-types';
console.log(zdy);
export default class Cinema extends Component {
  constructor() {
    super();
    // X-Client-Info: {"a":"3000","ch":"1002","v":"5.2.0","e":"1657425637705637356929025","bc":"110100"}
    // X-Host: mall.report.event
    this.state = {
      cinemas: [],
    };
    axios
      .get('https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=2395953', {
        headers: {
          'X-Client-Info': JSON.stringify({
            a: '3000',
            ch: '1002',
            v: '5.0.4',
            e: '16395416565231270166529',
            bc: '110100',
          }),
          'X-Host': 'mall.film-ticket.cinema.list',
          'X-Requested-With': 'XMLHttpRequest',
        },
      })
      .then(
        (res) => {
          const {
            data: { data },
          } = res;
          console.log(data);
          // this.setState({
          //   cinemas: data.cinemas,
          // });
        },
        (err) => {
          console.log(err);
        },
      );
  }
  render() {
    return (
      <section>
        {this.state.cinemas.map((item) => (
          <div key={item.cityId}>{item.address}</div>
        ))}
      </section>
    );
  }
}
