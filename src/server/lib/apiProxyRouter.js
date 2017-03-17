import express from 'express';
import proxyMiddleware from 'http-proxy-middleware';
import config from './config';

export default function apiProxyRouter() {
  const router = express.Router(); // eslint-disable-line new-cap

  // configure proxy middleware context
  // requests with this path will be proxied
  const context = '/api';

  // configure proxy middleware options
  const options = {
    // target host
    target: config.Api.host,
    // needed for virtual hosted sites
    changeOrigin: true,
    pathRewrite: {
      '^/api': '',
    },
  };

  // create the proxy
  const proxy = proxyMiddleware(context, options);

  router.use(proxy);

  return router;
}
