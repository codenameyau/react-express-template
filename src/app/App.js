import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import request from 'app/utils/request';

function App() {
  const [ready, setReady] = useState(false);
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    if (!ready) {
      request('/api').then(res => {
        setApiData(res);
        setReady(true);
      });
    }
  }, [ready]);

  return ready ? (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{apiData && JSON.stringify(apiData, null, 2)}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  ) : null;
}

export default App;
