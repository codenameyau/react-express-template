import React from 'react';
import ReactLogo from 'app/assets/logo.svg';
import { AppMain } from 'app/styles/SharedStyles.js';

export const NotFound = props => {
  return (
    <AppMain>
      <img src={ReactLogo} className="App-logo" alt="logo" />
      <p>Page Not Found</p>
      <a className="App-link" href="/">
        Return home
      </a>
    </AppMain>
  );
};

export default NotFound;
