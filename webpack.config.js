const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

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
    test: /\.scss$/,
    exclude: /node_modules/,
    loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: 'css-loader!sass-loader',
    }),
  },
  {
    test: /\.less/,
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader'
      },
      {
        loader: 'less-loader'
      },
    ],
  },
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: [
      'babel-loader',
    ],
  },
  {
    test: /\.(png|gif|jpg|svg)$/,
    use: 'url-loader?limit=20480&name=images/[name]-[hash].[ext]',
  },
  {
    test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/,
    use: "url-loader?limit=10000&mimetype=application/font-woff",
  },
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    use: "url-loader?limit=10000&mimetype=application/octet-stream",
  },
  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    use: "file-loader",
  },
];

module.exports = {
  context: sourcePath,
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './index.js',
    './index.html',
  ],
  output: {
    path: destPath,
    filename: 'bundle.js',
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
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin('style.css'),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'BROWSER': JSON.stringify(true),
      },
    }),
  ],
  devServer: {
    contentBase: destPath,
    port: 3000,
  },
};
