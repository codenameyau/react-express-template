export const defaultOptions = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

export const request = (url, options = defaultOptions) => {
  if (options.body && options.headers['Content-Type'] === 'application/json') {
    options.body = JSON.stringify(options.body);
  }

  return fetch(url, options);
};

export default request;
