import React from 'react';
import { Link } from 'react-router-dom';
import { AppMain } from 'app/styles/SharedStyles.js';

export const NotFound = props => {
  return (
    <AppMain>
      <Link className="App-link" to="/">
        Return home{' '}
        <span role="img" aria-label="home">
          🏡
        </span>
      </Link>
      <p>Page Not Found</p>
    </AppMain>
  );
};

export default NotFound;
