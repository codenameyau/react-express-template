import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path';
import dotenv from 'dotenv';
import morgan from 'morgan';

import api from './routes/api';
import react from './controllers/react';
import { proxyRequest } from './controllers/proxy';
import { healthCheck } from './controllers/health';
import { httpsRedirect } from './middleware/https';

/*************************************************
 * SERVER CONFIG
 *************************************************/

const server = express();

dotenv.config();
server.use(cookieParser());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

// Force https with redirect.
if (process.env.NODE_ENV === 'production') {
  server.use(httpsRedirect);
}

// Enable morgan request logging.
if (process.env.NODE_ENV === 'development') {
  server.use(morgan('dev'));
} else {
  server.use(
    morgan('combined', {
      skip: (req, res) => {
        return res.statusCode < 400; // don't log successful requests
      },
    })
  );
}

/*************************************************
 * SERVER ROUTERS
 *************************************************/

// Serve static files in production 'build/'.
server.use(express.static(path.resolve('build')));

// Health check endpoint.
server.get('/health', healthCheck);

// Internal API and services proxy server.
server.use('/api', api);
server.use('/apis', proxyRequest);

// Fallback resource.
server.get('*', react);

/*************************************************
 * SERVER START
 *************************************************/

const PORT = process.env.EXPRESS_PORT || 9008;

server.listen(PORT, error => {
  if (error) {
    return console.log(error);
  }

  console.log(`🚀 Express server started at http://localhost:${PORT}`);
});
