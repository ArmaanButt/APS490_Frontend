const path = require('path');
const webpack = require('webpack');

const sourcePath = path.join(__dirname, './src/app');
const destPath = path.join(__dirname, './dist/app');

const rules = [
  {
    test: /\.html$/,
    exclude: /node_modules/,
    use: {
      loader: "file-loader",
      query: {
        name: "[name].[ext]"
      }
    },
  },
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: [
      'babel-loader',
    ],
  },
];


module.exports = {
  context: sourcePath,
  entry: {
    js: './index.js',
  },
  output: {
    path: destPath,
    filename: '[name].bundle.js',
  },
  module: {
    rules,
  },
  resolve: {
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      sourcePath,
    ]
  },
  devServer: {
    contentBase: destPath,
    port: 3000,
  },
};
