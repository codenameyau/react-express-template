import React from 'react';
import ReactLogo from 'app/assets/logo.svg';
import { useFetch } from 'app/hooks';
import { AppMain, CodeBlock } from 'app/styles/SharedStyles.js';

export const Rockets = props => {
  const [ready, data] = useFetch({ path: '/api' });

  return (
    <AppMain>
      <img src={ReactLogo} className="App-logo" alt="logo" />
      {ready && <CodeBlock>{JSON.stringify(data, null, 2)}</CodeBlock>}
    </AppMain>
  );
};

export default Rockets;
