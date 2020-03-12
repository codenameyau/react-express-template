import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

export const request = (
  url,
  options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }
) => {
  const httpOptions = {
    ...options,
  };

  if (options.body) {
    httpOptions.body = JSON.stringify(options.body);
  }

  return fetch(url, httpOptions).then(res => {
    if (res.status === 204) {
      return { status: 204 };
    }

    if (res.status >= 400) {
      return {
        status: res.status,
        body: res.body,
      };
    }

    return res
      .json()
      .catch(error => {
        console.error(error);
      })
      .then(json => {
        if (json instanceof Array || Array.isArray(json)) {
          return {
            body: json,
            status: res.status,
          };
        } else {
          return {
            ...json,
            status: res.status,
          };
        }
      });
  });
};

const useFetchCache = {};

export const useFetch = props => {
  const [ready, setReady] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (props.cache) {
      const cacheKey = btoa(props.path);

      if (useFetchCache[cacheKey]) {
        setReady(true);
        setData(useFetchCache[cacheKey]);
        return;
      }
    }

    if (!ready) {
      request(props.path)
        .then(res => {
          setReady(true);
          setData(res);

          if (props.cache) {
            useFetchCache[btoa(props.path)] = res;
          }
        })
        .catch(err => {
          setReady(true);
          setData(err);
        });
    }
  }, [ready, props.path, props.cache]);

  return [ready, data];
};

useFetch.propTypes = {
  path: PropTypes.string.isRequired,
  cache: PropTypes.bool,
};

export default useFetch;
