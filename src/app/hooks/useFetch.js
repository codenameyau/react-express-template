import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import request from 'app/utils/request';

export const useFetch = props => {
  const [ready, setReady] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!ready) {
      request(props.path)
        .then(res => {
          setReady(true);
          setData(res);
        })
        .catch(err => {
          setReady(true);
          setData(err);
        });
    }
  }, [ready, props.path]);

  return [ready, data];
};

useFetch.propTypes = {
  path: PropTypes.string.isRequired,
};

export default useFetch;
