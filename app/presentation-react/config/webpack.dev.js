const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    new webpack.BannerPlugin({
      banner: `Build Time: ${new Date().toLocaleString()} \n Build For: Development`,
    }),
  ],
});
