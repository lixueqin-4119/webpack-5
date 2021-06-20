const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'production',
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
        use: [//抽成文件
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
               publicPath: '../',
            },
          },
          'css-loader',
        ],
      },
    ],
  }
};

