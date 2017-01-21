const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './src/app'),
  entry: {
    app: './index.js',
  },
  output: {
    path: path.resolve(__dirname, './dist/app'),
    publicPath: '/assets',
    filename: 'bundle.js',
  },
};
