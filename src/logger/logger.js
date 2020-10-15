const { finished } = require('stream');

const logRequest = (req, res, next) => {
  const { method, url } = req;
  const start = Date.now();

  finished(res, () => {
    const ms = Date.now() - start;
    console.log(`${method} ${url} [${ms}ms]`);
  });

  next();
};

module.exports = { logRequest };
