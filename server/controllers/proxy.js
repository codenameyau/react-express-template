// Learn more about express-http-proxy here
// https://github.com/villadora/express-http-proxy
import proxy from 'express-http-proxy';

const SPACEX_API_PATH = 'https://api.spacexdata.com';

export const proxySpaceXRequest = proxy(SPACEX_API_PATH, {
  https: true,
  proxyReqPathResolver: function(req) {
    return req.path;
  },
});
