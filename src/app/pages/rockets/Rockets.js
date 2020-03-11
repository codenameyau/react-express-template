import React from 'react';
import { Link } from 'react-router-dom';

import { useFetch } from 'app/hooks';
import { AppMain, CodeBlock } from 'app/styles/SharedStyles.js';

export const Rockets = props => {
  const [ready, data] = useFetch({ path: '/spacex/launches/latest' });

  return (
    <AppMain>
      <Link className="App-link" to="/this-page-does-not-exist">
        Visit a 404 page{' '}
        <span role="img" aria-label="not found">
          👻
        </span>
      </Link>
      {ready && <CodeBlock>{JSON.stringify(data, null, 2)}</CodeBlock>}
    </AppMain>
  );
};

export default Rockets;
