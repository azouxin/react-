let bus = {
  list: [],
  // 订阅
  subscribe(callBack) {
    this.list.push(callBack);
  },
  // 发布
  publish(info) {
    this.list.forEach((callback) => {
      callback && callback(info);
    });
  },
};
bus.subscribe((info) => {
  console.log(info);
});
bus.subscribe((info) => {
  console.log(info);
});
bus.publish('我是你爹');
