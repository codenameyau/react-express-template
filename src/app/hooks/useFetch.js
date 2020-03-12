import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import request from 'app/utils/request';

const cache = {};

export const useFetch = props => {
  const [ready, setReady] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (props.cache) {
      const cacheKey = btoa(props.path);

      if (cache[cacheKey]) {
        setReady(true);
        setData(cache[cacheKey]);
        return;
      }
    }

    if (!ready) {
      request(props.path)
        .then(res => {
          setReady(true);
          setData(res);

          if (props.cache) {
            cache[btoa(props.path)] = res;
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
