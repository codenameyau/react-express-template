import React from 'react';
import { Link } from 'react-router-dom';

import { useFetch } from 'app/hooks';
import { AppMain, CodeBlock } from 'app/styles/SharedStyles.js';

export const Home = props => {
  const [ready, data] = useFetch({ path: '/api', cache: true });

  return (
    <AppMain>
      <Link className="App-link" to="/rockets">
        See SpaceX rocket launches{' '}
        <span role="img" aria-label="rocket">
          🚀
        </span>
      </Link>
      <p>This is an internal API request</p>
      {ready && <CodeBlock>{JSON.stringify(data, null, 2)}</CodeBlock>}
    </AppMain>
  );
};

export default Home;
