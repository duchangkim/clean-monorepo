const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    open: false,
    hot: true,
    compress: true,
    port: 3000,
    historyApiFallback: true,
    liveReload: true,
    // host: 'peter.test',
  },
  output: { filename: '[name].[contenthash].js', publicPath: '/' },
  plugins: [
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      reportFilename: 'bundleReport.html',
    }),
  ],
});
