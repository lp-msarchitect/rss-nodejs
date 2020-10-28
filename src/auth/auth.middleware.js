const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../common/config');

const checkToken = async (req, res, next) => {
  const [scheme, token] = req.header('Authorization').split(' ');
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
