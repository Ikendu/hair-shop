const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/create',
    createProxyMiddleware({
      target: 'https://hairview.onrender.com',
      changeOrigin: true,
    })
  )
}
