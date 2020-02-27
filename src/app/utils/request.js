export const request = (
  url,
  options = {
    method: 'POST',
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

export default request;
