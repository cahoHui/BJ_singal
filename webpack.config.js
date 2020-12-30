const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  devServer: {
    port: 30001,
    contentBase: './build',
    historyApiFallback: true,
    hot: true,
    inline: true,
    compress: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ],
  },
  entry: ['babel-polyfill', './index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: '',
      template: 'template.html',
      filename: 'index.html',
      inject: true,
      hash: true,
    }),
    // new CleanWebpackPlugin(),
  ]
}