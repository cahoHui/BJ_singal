const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

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
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'css-loader' }, { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|mp4|mov)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
          }
        }]
      }
    ],
  },
  entry: ['babel-polyfill', './index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      favicon: '',
      template: 'template.html',
      filename: 'index.html',
      inject: true,
      hash: true,
    }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  }
}