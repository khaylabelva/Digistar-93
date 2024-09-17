const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // Adjust this path to match your backend API endpoint
    createProxyMiddleware({
      target: 'http://localhost:5000', // The address of your backend server
      changeOrigin: true,
    })
  );
};
