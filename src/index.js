import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/App';
import GlobalStyle from './globalStyle';
import * as serviceWorker from './serviceWorker';

export const ReactApp = () => {
  return (
    <>
      <GlobalStyle />
      <App />
    </>
  );
};

ReactDOM.render(<ReactApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
