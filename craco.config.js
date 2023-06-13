const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@": path.join(__dirname, "src"),
    },
    configure: (webpackConfig, { env: webpackEnv, paths }) => {
      webpackConfig.externals = {
        BMap: "BMap",
      };

      return webpackConfig;
    },
  },
  devServer: {
    proxy: {
      // '/api': {
      //   target: 'https://linktelcms.zeaylu.com/',
      //   changeOrigin: true,
      //   pathRewrite: {
      //     "^/api": ''
      //   }
      // },
      "/items": {
        target: "https://linktelcms.zeaylu.com",
        changeOrigin: true,
      },
      "/assets": {
        target: "https://linktelcms.zeaylu.com",
        changeOrigin: true,
      },
      "/files": {
        target: "https://linktelcms.zeaylu.com",
        changeOrigin: true,
      },
    },
  },
};