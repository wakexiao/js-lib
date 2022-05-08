const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack'); // 用于访问内置插件
const path = require('path');

function resolve(dir) {
  return path.resolve(__dirname, './', dir);
}

const config = {
  mode: 'development',
  entry: {
    index: './src/index.ts', // 入口js文件，key 是文件名
  },
  output: {
    path: resolve('dist'),
    filename: '[name].[contenthash:8].js', // name 是上面 entry 定义的 key
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({}),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'] // 针对这些后缀名的文件引入的时候可以不用写后缀名
  },
  devServer: {
    host: 'localhost', // 主机名
    port: '8081',
    open: true, // 开启服务器时，顺便打开浏览器
  }
};

module.exports = config;
