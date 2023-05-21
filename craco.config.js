const path = require('path')
module.exports = {
  webpack: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  }, 
  devServer: {
    proxy: {
      // '/api': {
      //   target: 'http://47.108.244.114:8055/',
      //   changeOrigin: true,
      //   pathRewrite: {
      //     "^/api": ''
      //   }
      // },
      '/items': {
        target: 'http://47.108.244.114:8055/',
        changeOrigin: true,
      },
    },
  },
}