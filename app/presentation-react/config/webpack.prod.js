const { merge } = require('webpack-merge');
const webpack = require('webpack');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'hidden-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.BannerPlugin({
      banner: `Build Time: ${new Date().toLocaleString()} \n Build For: Production`,
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      // 플러그인 인스턴스 생성
      new CssMinimizerPlugin(),
    ],
  },
});
