/* eslint no-console: ["error", { allow: ["log", "error"] }] */
import path from 'path';
import express from 'express';
import morgan from 'morgan';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import webpackConfig from '../../webpack.config';

const PORT = 3000;
const server = express();

delete process.env.BROWSER;

server.use(
  morgan(':remote-addr - - :date[clf] :method :url HTTP/:http-version :status -'),
);

/*
 ***************************************
 * PING endpoint
 ***************************************
 */
server.get('/ping', (req, res) => {
  res.header('Content-Type', 'text/plain');
  res.send(new Date().toISOString());
});


const compiler = webpack(webpackConfig);
const middleware = webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  // https://webpack.github.io/docs/webpack-dev-middleware.html
  noInfo: true,
  // for hot-reloading with docker
  watchOptions: {
    poll: true,
  },
  stats: {
    colors: true,
  },
});

server.use(middleware);
server.use(webpackHotMiddleware(compiler));

// sending file so that on page refresh app doesn't break
server.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../app/index.html'));
});


/*
 *************************************************
 * Running the server
 *************************************************
 */
server.listen(PORT, '0.0.0.0', (err) => {
  if (err) {
    console.error(err);
  }
  console.log('Listening at http://0.0.0.0:%s/', PORT);
});

