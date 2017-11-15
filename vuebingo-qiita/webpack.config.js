const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    path: __dirname + '/bin/',
    filename: '[name].js'
  },
  plugins: [
    new CopyWebpackPlugin([
      {from: './src/index.html'}
    ])
  ],
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'inline-source-map'
};