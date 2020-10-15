const { finished } = require('stream');

const logRequest = (req, res, next) => {
  const { method, url } = req;
  const start = Date.now();

  finished(res, () => {
    const ms = Date.now() - start;
    const { statusCode } = res;
    console.log(`${method} ${url} ${statusCode} [${ms}ms]`);
  });

  next();
};

module.exports = { logRequest };
