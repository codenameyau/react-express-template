import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import logo from './logo.svg';
import request from 'app/utils/request';

const StyledApp = styled.div`
  text-align: center;

  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }

  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  .App-link {
    color: #61dafb;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

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
    <StyledApp>
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
    </StyledApp>
  ) : null;
}

export default App;
