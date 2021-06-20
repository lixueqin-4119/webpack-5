const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  entry: './src/index.js',
  output: {
    filename: 'index.[contenthash].js'
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        title: 'XDML-写代码啦',
        template: 'src/assets/test.html'
      }),
      new MiniCssExtractPlugin({
        attributes: {
          id: 'target',
          'data-target': 'example',
        }
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        chunkFilename: '[id].[contenthash].css',
        ignoreOrder: false, // Enable to remove warnings about conflicting order
      }),

    ],
  
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],//放到页面
      },
    ],
  }
};

