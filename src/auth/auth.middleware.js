const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../common/config');

const checkToken = async (req, res, next) => {
  const header = req.header('Authorization');
  if (!header) {
    res.status(401).send('No authorization header');
  }
  const [scheme, token] = header.split(' ');
  if (scheme === 'Bearer') {
    try {
      await jwt.verify(token, JWT_SECRET_KEY);
    } catch (err) {
      res.status(401).send(`${err.name}: ${err.message}`);
      return;
    }
  } else {
    res.status(401).send('Wrong authorization scheme');
  }
  next();
};

module.exports = { checkToken };
