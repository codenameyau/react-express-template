import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path';
import dotenv from 'dotenv';
import morgan from 'morgan';
import compression from 'compression';

import api from './routes/api';
import react from './controllers/react';
import { proxySpaceXRequest } from './controllers/proxy';
import { healthCheck } from './controllers/health';
import { httpsRedirect } from './middleware/https';

/*************************************************
 * SERVER CONFIG
 *************************************************/

const app = express();

dotenv.config();
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Force https with redirect.
if (process.env.NODE_ENV === 'production') {
  app.use(httpsRedirect);
}

// Enable morgan request logging.
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(
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
app.use(express.static(path.resolve('build')));

// Health check endpoint.
app.get('/health', healthCheck);

// Internal API and services proxy app.
app.use('/spacex', proxySpaceXRequest);
app.use('/api', api);

// Fallback resource.
app.get('*', react);

/*************************************************
 * SERVER START
 *************************************************/

// Heroku server
if (process.env.NODE_ENV === 'production') {
  const server = app.listen(process.env.PORT, error => {
    if (error) {
      return console.error(error);
    }

    console.log(
      `🚀 Express prod server started at https://localhost:${server.address().port}`
    );
  });
}

// Local server
else {
  const server = app.listen(process.env.EXPRESS_PORT, error => {
    if (error) {
      return console.error(error);
    }

    console.log(
      `🚀 Express dev server started at http://localhost:${server.address().port}`
    );
  });
}
