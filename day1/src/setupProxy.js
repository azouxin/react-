const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/ajax',
    createProxyMiddleware({
      // 目标地址
      target: 'http://localhost:5000',
      changeOrigin: true,
    }),
  );
};
