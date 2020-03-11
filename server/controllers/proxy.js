// Learn more about express-http-proxy here
// https://github.com/villadora/express-http-proxy
import proxy from 'express-http-proxy';

const API_PATH = 'https://api.spacexdata.com/v3/launches/latest';

export const proxyRequest = proxy(API_PATH, {
  https: true,
  proxyReqPathResolver: function(req) {
    return req.path;
  },
});
