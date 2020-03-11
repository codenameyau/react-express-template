import path from 'path';

const reactApp = (req, res, next) => {
  const html = path.resolve('build/index.html');
  res.sendFile(html);
};

export default reactApp;
